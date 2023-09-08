import './App.css'
import { Home } from '../components/Home'
import { Navbar } from '../components/Navbar'
import { Routes, Route } from 'react-router-dom';
import { SingleArticle } from '../components/SingleArticle';
import { ArticlesList } from '../components/ArticlesList';
import { UsersList } from '../components/UsersList';
import { TopicsList } from '../components/TopicsList';
import { Profile } from '../components/Profile';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<ArticlesList />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
        <Route path='/topics' element={<TopicsList />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/users' element={<UsersList />} />
      </Routes>
    </>
  )
}

export default App