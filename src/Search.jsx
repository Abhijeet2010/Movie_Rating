import React, { useContext } from 'react'
import { AppContext } from './context'
import "./Search.css"

const Search = () => {
  const {query, setQuery, Error} = useContext(AppContext)
  return (
    <div className='search'>
      <h2>Search Your Favourite Movie Here</h2> 
        <form action='#' onSubmit={(e)=>e.preventDefault()}>
          <div>
            <input className='search__input' type="text" placeholder='Search Movie'
              value={query}
              onChange={(e)=>setQuery(e.target.value)} 
            />    
          </div>
        </form>

        <div className='card-error'>
        <p>{Error.show && Error.msg}</p>
        </div>
    </div>
  )
}

export default Search