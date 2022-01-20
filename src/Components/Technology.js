import React, { useState } from 'react';
import { data } from '../data/data';
import { TechnologyInfo } from './TechnologyInfo';

export const Technology = () => {

    const { technology } = data;
    const [stateTech, setTech] = useState(technology[0])

  return <main className='tech__container'>
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
                        >
                            {i+1}
                        </a>
                    )}
                </div>
                <TechnologyInfo />
            </div>
            <picture className='tech__picture'>
                <img src='' className='tech__img' />
            </picture>
        </main>
};
