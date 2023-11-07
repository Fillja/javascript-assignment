import React from 'react'

const Button = ({color, text, url}) => {
  return (
    <a className={color} href={url}>
        {text}
        <i className="fa-regular fa-arrow-up-right"></i>
    </a>
  )
}

export default Button