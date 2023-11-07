import React from 'react'

const TeamMember = ({img, alt, name, title}) => {
  return (
    <div>
        <img src={img} alt={alt}/>
        <h3>{name}</h3>
        <p>{title}</p>
    </div>
  )
}

export default TeamMember