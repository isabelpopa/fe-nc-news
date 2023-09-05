import './App.css'
import { Home } from '../components/Home'
import { Navbar } from '../components/Navbar'
import { Routes, Route } from 'react-router-dom';
import { ArticlesPage } from '../components/ArticlesPage';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<ArticlesPage />} />
      </Routes>
    </>
  )
}

export default App