import React from 'react'

export const ImagePlanets = ({planetInfo}) => {

    const {planet, classActive} = planetInfo
    const namePlanet = planet.name.toLowerCase()

  return (
    <div 
        className={
            classActive === namePlanet
            ? `planet__img planet__img--active--${namePlanet} planet--active`
            : 'planet__img'
        }
    />
  )
}
