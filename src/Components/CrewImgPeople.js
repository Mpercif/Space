import React from 'react'

export const CrewImgPeople = ({information}) => {

    const {people, stateCrew} = information
    const {role} = people

    const roleName = role.split(' ')[0].toLowerCase().trim()
    const roleActive = stateCrew.role.split(' ')[0].toLowerCase().trim()

  return (
    <div 
        className={
            roleName === roleActive
            ? `crew__img crew__img--${roleName}`
            : 'crew__img'
        }
    />
  )
}
