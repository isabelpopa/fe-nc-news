import './App.css'
import { Home } from '../components/Home'
import { Navbar } from '../components/Navbar'
import { Routes, Route } from 'react-router-dom';
import { SingleArticle } from '../components/SingleArticle';
import { ArticlesList } from '../components/ArticlesList';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<ArticlesList />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
      </Routes>
    </>
  )
}

export default App