import React from 'react'
import article_1 from '@images/article-1.png'
import article_2 from '@images/article-2.png'
import article_3 from '@images/article-3.png'
import article_4 from '@images/article-4.png'
import Button from '@generics/Button'
import ProjectsLink from '@generics/ProjectsLink'

const ProjectsSection = () => {
  return (
    <section className="projects-section">
    <div className="container">
        <div className="title-part">
            <p className="orange-p">Projects & Case Studies</p>
            <h2>Let's Looks Our Global Projects</h2>
        </div>
        <div className="project-part">
            <ProjectsLink img={article_1} alt="A mans hands holding a business paper" title="Grow your business"/>
            <ProjectsLink img={article_2} alt="Pink electronic products on a desk" title="Why your client needs a responsive website"/>
            <ProjectsLink img={article_3} alt="Office supplies on a desk" title="Educate your employees to get better results"/>
            <ProjectsLink img={article_4} alt="Open laptop with a statistics page" title="Business Insights is a important piece of your business"/>
        </div>
        <div className="center-content">
            <Button color="btn-black" text="All Recent Projects" url="#" />
        </div>
    </div>
</section>
  )
}

export default ProjectsSection