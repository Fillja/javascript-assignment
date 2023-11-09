import React from 'react'
import Button from '@generics/Button'
import { useArticles } from '../../assets/scripts/ArticlesContext'
import { Link } from 'react-router-dom'


const ArticleScrollSection = () => {

    const { articles } = useArticles()

    const getMonth = (number) => {
        const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']

        return monthArray[number-1]
    }

  return (
    <div className='article-scroll-section'>
        <div className='container'>
            <div className='title-part'>
                <div>
                    <p className='orange-p'>Articles & News</p>
                    <h2>Get Every Single Articles & News</h2>
                </div>
                <Button color="btn-transparent" text="Browse Articles" url="#"/>
            </div>
            <div className='scroll-part'>
                {
                    articles.map(article => (
                        <Link to={`/news/${article.id}`} key={article.id} className="article-item">
                            <div className="absolute-date">
                                <h3 className='h3-date'>{article.published.slice(8,10)}</h3>
                                <p className='p-month'>{getMonth(article.published.slice(5,7))}</p>
                            </div>
                            <img src={article.imageUrl} alt="" />
                            <p>{article.category}</p>
                            <h3 className='article-title'>{article.title}</h3>
                            <p>{article.content}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ArticleScrollSection