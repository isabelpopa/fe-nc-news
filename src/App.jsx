import './App.css'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import { SingleArticle } from './components/articles/SingleArticle';
import { ArticlesList } from './components/articles/ArticlesList';
import { UsersList } from './components/users/UsersList';
import { TopicsList } from './components/topics/TopicsList';
import { Profile } from './components/Profile';
import { Topic } from './components/topics/Topic';

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
        <Route path='/topics/:topicSlug' element={<Topic />} />
      </Routes>
    </>
  )
}

export default App