import React from 'react'
import RecentPosts from '@generics/RecentPosts'
import Categories from '@generics/Categories'

const RightContentSection = () => {
  return (
    <div className='right-content-section'>
        <div className='input-div'>
            <i className="fa-regular fa-magnifying-glass"></i>
            <input placeholder="Type to search..." type="text" />
        </div>
        <div className='post-box'>
            <h3>Recent Posts</h3>
            <RecentPosts title="How To Blow Through Capital At An Incredible Rate" date="Jan 14, 2020" />
            <RecentPosts title="Design Studios That Everyone Should Know About?" date="Jan 14, 2020" />
            <RecentPosts title="How did we get 1M+ visitors in 30 days without anything!" date="Jan 14, 2020" />
            <RecentPosts title="Figma on Figma: How We Built Our Website Design System" date="Jan 14, 2020" />
        </div>
        <div className='categories-box'>
            <h3>Categories</h3>
            <Categories category="Technology -" posts="20 Posts" />
            <Categories category="Freelancing -" posts="07 Posts" />
            <Categories category="Writing -" posts="16 Posts" />
            <Categories category="Marketing -" posts="11 Posts" />
            <Categories category="Business -" posts="35 Posts" />
            <Categories category="Education -" posts="Education Posts" />
        </div>
    </div>
  )
}

export default RightContentSection