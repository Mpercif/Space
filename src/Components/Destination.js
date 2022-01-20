import React, { useState } from 'react';
import { data } from '../data/data';
import { InformationPlanet } from './InformationPlanet';

export const Destination = () => {

    const {destinations} = data;
    const [planetInfo, setInfo] = useState(destinations[0])

    const handleClick = (e)=>{
        const name = e.target.dataset.id;
        const [newInfo] = destinations.filter(val => val.name === name);
        setInfo(newInfo);
    }


  return <section className='planet__container'>
                <div className='planet__view'>
                    <h2 className='planet__subtitle'><span className='planet__number'>01</span>PICK YOUR DESTINATION </h2>
                    <picture className='planet__picture'>
                        <div className='planet__img' />
                    </picture>
                </div>
                <div className='planet__info'>
                    <div className='planet__selector'>
                        {destinations.map(destiny =>
                            <a     
                                key={destiny.name} 
                                data-id={destiny.name}
                                className={ 
                                            (planetInfo.name === destiny.name) 
                                            ? 'planet__name planet__name--active' 
                                            : 'planet__name' 
                                        } 
                                href='#'
                                onClick={handleClick}
                            >
                                {destiny.name.toLocaleUpperCase()} 
                            </a>
                        )}
                    </div>
                    <InformationPlanet destination={planetInfo} />
                </div>
          </section>

};