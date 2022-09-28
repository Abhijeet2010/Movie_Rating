import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import MovieDetails from "./MovieDetails"
import "./App.css"

const App = () => {
  return ( 
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='movie/:id' element = {<MovieDetails/>} />
        <Route path='*' element = {<Error/>} />
      </Routes>
    
  )
}

export default App