import React from 'react'

const ServicesBox = ({title, text}) => {
  return (
    <a className="transition" href="#"><div>
        <div className="border-bit"></div>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="end-content"><i className="fa-regular fa-arrow-right transition"></i></div>
    </div></a>
  )
}

export default ServicesBox