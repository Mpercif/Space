import React from 'react';

export const InformationPlanet = ({destination}) => {
  
  const {name, description, distance, travel} = destination;

  return <div className='planet__description'>
            <h2 className='planet__title'>{name.toUpperCase()}</h2>
            <p className='planet__pharagaph'>{description}</p>
            <br />
            <span className='line'></span>
            <div className='travel__container'>
              <div className='travel__info'>
                  <p className='travel__subtitle'>AVG. DISTANCE</p>
                  <p className='travel__infoTrayect'>{distance.toUpperCase()}</p>
              </div>
              <div className='travel__info'>
                  <p className='travel__subtitle'>EST. TRAVEL TIME</p>
                  <p className='travel__infoTrayect'>{travel.toUpperCase()}</p>
              </div>
            </div>

        </div>
};
