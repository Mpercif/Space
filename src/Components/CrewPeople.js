import React from 'react';

export const CrewPeople = ({people}) => {

    const {name, role, bio} = people;

  return <div className='crew__info'>
            <h2 className='crew__role'>{role.toUpperCase()}</h2>
            <h2 className='crew__name'>{name.toUpperCase()}</h2>
            <p className='crew__pagragaph'>{bio}</p>
        </div>;
};
