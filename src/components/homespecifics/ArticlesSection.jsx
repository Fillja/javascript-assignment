import React from 'react'
import article_1 from '@images/25mars.png'
import article_2 from '@images/17mars.png'
import article_3 from '@images/13mars.png'
import Button from '@generics/Button'
import ArticlesBox from '@generics/ArticlesBox'

const ArticlesSection = () => {
  return (
    <section className="articles-section">
        <div className="container">
            <div className="part-one">
                <div>
                    <p className="orange-p">Articles & News</p>
                    <h2>Get Every Single Articles & News</h2>
                </div>
                <Button color="btn-transparent" text="Browse Articles" url="#" />
            </div>
            <div className="part-two">
                
                <ArticlesBox img={article_1} alt="Woman sitting in a classroom smiling" title="How To Use Digitalization In The Classroom" 
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." date="25" month="Mar" />

                <ArticlesBox img={article_2} alt="Picture taken at an angle at a screen with business information" title="How To Implement Chat GPT In Your Projects" 
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." date="17" month="Mar" />

                <ArticlesBox img={article_3} alt="A phone laying on two stacked books" title="The Guide To Support Modern CSS Design" 
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." date="13" month="Mar" />

            </div>
            <div className="round-buttons">
                <a className="active" href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
                <a href="#"><i className="fa-sharp fa-solid fa-circle"></i></a>
            </div>
        </div>
    </section>
  )
}

export default ArticlesSection