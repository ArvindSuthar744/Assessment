import { BrowserRouter, Link, NavLink, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'

function App() {


  return (
    <>
    <div className='app'>
      <h1>Styled Components</h1>

      <BrowserRouter>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive
              ? "green"
              : "red",
          })}
        >
          Home
        </NavLink>
        <Link to='/about'>About</Link>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes> 
      </BrowserRouter>

      </div>
    </>
  )
}

export default App
