import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import News from './views/News'
import { ArticlesProvider } from './assets/scripts/ArticlesContext'
import NewsDetails from './views/NewsDetails'

function App() {

  return (
    <BrowserRouter>
      <ArticlesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
        </Routes>
      </ArticlesProvider>
    </BrowserRouter>
  )
}

export default App
