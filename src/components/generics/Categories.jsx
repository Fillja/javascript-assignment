import React from 'react'

const Categories = ({category, posts}) => {
  return (
    <div className="categories">
        <p>{category}</p>
        <p className='post-p'>{posts}</p>
    </div>
  )
}

export default Categories