import './App.css'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'

function App() {
  return (
    <div className='flex items-center justify-center p-4 h-screen bg-blue-50 '>

<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/signup' element={<Signup/>} />
</Routes>

    </div>
  )
}

export default App
