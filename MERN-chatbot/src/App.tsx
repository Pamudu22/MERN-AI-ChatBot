
import './App.css'
import Header from './components/Header'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Chat from './pages/Chat'
import Notfound from './pages/Notfound'
import { UseAuth } from './context/AuthContext'



function App() {
  


  return    <main>
    <Header />
 
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='*' element={<Notfound />} />
    </Routes>

  </main>
  
}

export default App
