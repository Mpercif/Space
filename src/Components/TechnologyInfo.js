import React from 'react';

export const TechnologyInfo = ({tech}) => {

    const {name, description} = tech;


  return <div className='techInfo__container'>
            <p  className='techInfo__subtitle'>THE TERMINOLOGY</p>
            <h2 className='techInfo__name'>{name.toUpperCase()}</h2>
            <p  className='techInfo__paragraph'>{description}</p>
        </div>
};
