import React, { useState } from 'react';
import { data } from '../data/data';
import { ImagePlanets } from './ImagePlanets';
import { InformationPlanet } from './InformationPlanet';

export const Destination = () => {

    const {destinations} = data;
    const [planetInfo, setInfo] = useState(destinations[0])
    const [classActive, setClassActive] = useState('moon')

    const handleClick = (e)=>{
        const name = e.target.dataset.id;
        const [newInfo] = destinations.filter(val => val.name === name);
        setInfo(newInfo);
        setClassActive(newInfo.name.toLowerCase());
    }


  return <section className='planet__container'>
                <div className='planet__view'>
                    <h2 className='planet__subtitle'><span className='planet__number'>01</span>PICK YOUR DESTINATION </h2>
                    <picture className='planet__picture'>
                        {
                            destinations.map(planet => 
                                <ImagePlanets 
                                    key={`${planet.name}_img`}
                                    planetInfo={{planet, classActive}} 
                                />
                            )
                        }
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