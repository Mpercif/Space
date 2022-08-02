import React from 'react'

export const TechnologyImg = ({tech}) => {

    const {tech: techName, stateTech} = tech
    const techNameClass = techName.name.split(" ")[0].toLowerCase()
    const techActive = stateTech.name.split(" ")[0].toLowerCase()

  return (
    <div 
        className={
            techNameClass === techActive
            ? `tech__img tech__img--${techNameClass}`
            : 'tech__img'
        } 
    />
  )
}
