import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import MovieDetails from "./MovieDetails"

const App = () => {
  return ( 
    <div className='app'>
    
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='movie/:id' element = {<MovieDetails/>} />
        <Route path='*' element = {<Error/>} />
      </Routes>
      </div>
    
  )
}

export default App