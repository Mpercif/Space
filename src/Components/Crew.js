import React, { useState } from 'react';
import { data } from '../data/data';
import { CrewPeople } from './CrewPeople';

export const Crew = () => {

    const {crew} = data;
    const [stateCrew, setCrew] = useState(crew[0]);

    const handleClick = (e)=>{
        const name = e.target.dataset.id;
        const [newInfo] = crew.filter(val => val.name === name)
        setCrew(newInfo)
    }
  return <main className='crew__container'>
            <div className='crew__texts'>
                <h2 className='crew__subtitle'><span className='crew__number'>02</span>MEET YOUR CREW </h2>
                <CrewPeople people={stateCrew}  />
                <div className='crew__selector'>
                    {crew.map(val =>
                        <a
                            key={val.name}
                            data-id={val.name}
                            className={
                                (val.name === stateCrew.name)
                                ? 'crew__item crew__item--active'
                                : 'crew__item'
                             }
                             onClick={handleClick}
                        />

                    )}
                </div>
            </div>
            <picture className='crew__picture'>
                <div className='crew__img' />
            </picture>
        </main>;
};
