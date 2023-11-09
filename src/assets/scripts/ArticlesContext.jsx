import { useContext, createContext, useState, useEffect } from 'react';

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)

export const ArticlesProvider = ({children}) => {
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState(null)
    const apiURL = 'https://win23-assignment.azurewebsites.net/api/articles'

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch (apiURL)
        setArticles(await result.json())
    }

    const getArticle = async (id) => {
        const result = await fetch (`${apiURL}/${id}`)
        
        if (result.status === 200){
            setArticle(await result.json())
        }
    }

    return (
        <ArticleContext.Provider value={{articles, article, getArticles, getArticle}}>
            {children}
        </ArticleContext.Provider>
    )
}