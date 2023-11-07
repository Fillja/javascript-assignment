import React from 'react'

const ProjectsLink = ({img, alt, title}) => {
  return (
    <a href="#">
        <img className="transition" src={img} alt={alt}/>
        <h3>{title}</h3>
        <p>Read More<i className="fa-regular fa-arrow-up-right"></i></p>
    </a>
  )
}

export default ProjectsLink