import React from 'react'

const RecentPosts = ({title, date}) => {
  return (
    <div className='recent-posts-content'>
        <h4>{title}</h4>
        <p>{date}</p>
    </div>
  )
}

export default RecentPosts