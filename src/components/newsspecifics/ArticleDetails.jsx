import React, { useEffect } from 'react'
import { useArticles } from '../../assets/scripts/ArticlesContext'
import { useParams } from 'react-router-dom'
import RightContentSection from './RightContentSection'

const ArticleDetails = () => {

    const { id } = useParams()
    const { article, getArticle } = useArticles()

    useEffect(() => {
        getArticle(id)
    }, [id])

    const getMonth = (number) => {
        const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']

        return monthArray[number-1]
    }

  return (
    <section className='article-details-section'>
        <div className='container'>
            {
                article ? (
                    <div key={article.id} className='article-details'>
                        <h2>{article.title}</h2>
                        <div className='article-subtitle'>
                            <p>{getMonth(article.published.slice(5,7))} {article.published.slice(8,10)} {article.published.slice(0,4)}</p>
                            <i className="fa-solid fa-circle"></i>
                            <p>{article.category}</p>
                            <i className="fa-solid fa-circle"></i>
                            <p>{article.author}</p>
                        </div>
                        <img className='article-image' src={article.imageUrl} alt="" />
                        <p>{article.content}</p>
                    </div>
                ) : (
                    <h2 className='loading-text'>Loading article...</h2>
                )    
            }
            <RightContentSection />
        </div>
    </section>
  )
}

export default ArticleDetails