import './App.css'
import { Home } from '../components/Home'
import { Navbar } from '../components/Navbar'
import { Routes, Route } from 'react-router-dom';
import { SingleArticle } from '../components/SingleArticle';
import { ArticlesList } from '../components/ArticlesList';
import { UsersList } from '../components/UsersList';
import { TopicsList } from '../components/TopicsList';
import { Profile } from '../components/Profile';
import { Coding } from '../components/Coding';
import { Football } from '../components/Football';
import { Cooking } from '../components/Cooking';

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
        <Route path='/topics/coding' element={<Coding />} />
        <Route path='/topics/football' element={<Football />} />
        <Route path='/topics/cooking' element={<Cooking />} />
      </Routes>
    </>
  )
}

export default App