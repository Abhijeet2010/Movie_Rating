import React from 'react'
import { useParams } from 'react-router-dom'

 
const MovieDetails = () => {
  const {id} = useParams()
  return (
    <div>
      <h1>the name of movie is {id}</h1>
    </div>
  )
}

export default MovieDetails