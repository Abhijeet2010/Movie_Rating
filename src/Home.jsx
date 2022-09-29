import React from 'react'
import Search from './Search'
import Movies from "./Movies"
import "./Home.css"

const Home = () => {
 
  return (
    <div className='home'>
      <Search/>
      <Movies/>
    </div>
  )
}

export default Home