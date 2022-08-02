import React, { useState } from 'react';
import { data } from '../data/data';
import { TechnologyImg } from './TechnologyImg';
import { TechnologyInfo } from './TechnologyInfo';

export const Technology = () => {

    const { technology } = data;
    const [stateTech, setTech] = useState(technology[0])
    const handleClick = (e)=>{
        const name = e.target.dataset.id;
        const [newTech] = technology.filter(val => val.name === name) 
        setTech(newTech);
    }

  return <main className='tech__container'>
                <h2 className='tech__subtitle'><span className='planet__number'>03</span>SPACE LAUNCH 101 </h2>
            <div className='tech__info'>
                <div className='tech__items'>
                    {technology.map((val,i) => 
                        <a 
                            className={
                                (val.name === stateTech.name)
                                ? 'tech__item tech__item--active' 
                                : 'tech__item' 
                            }
                            key={val.name}
                            data-id={val.name}
                            onClick={handleClick}
                        >
                            {i+1}
                        </a>
                    )}
                </div>
                <TechnologyInfo tech={stateTech} />
            </div>
            <picture className='tech__picture'>
                {
                    technology.map(tech => 
                        <TechnologyImg 
                            key={`${tech.name}-img`}
                            tech={{tech, stateTech}} 
                        />       
                    )
                }
            </picture>
        </main>
};
