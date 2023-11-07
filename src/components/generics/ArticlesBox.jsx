import React from 'react'

const ArticlesBox = ({img, alt, title, text, date, month}) => {
  return (
    <a href="#">
        <img className="transition" src={img} alt={alt}/>
        <p className="business-color">Business</p>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="absolute-date">
            <h3>{date}</h3>
            <p>{month}</p>
        </div>
    </a>
  )
}

export default ArticlesBox