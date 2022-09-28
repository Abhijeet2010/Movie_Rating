import React, { useEffect, useState } from "react";
 

const AppContext = React.createContext();
const AppUrl = `https://www.omdbapi.com/`;

const AppProvider = ({ children }) => {




  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [Error, setError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("Harry")

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setError({
          show: true,
          msg: data.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let setTime = setTimeout(()=>{
      getMovies(`${AppUrl}?s=${query}&apikey=4598e5a0`);
    }, 800)
      return ()=>clearTimeout(setTime)  
    }, [query]);
  return (
    <AppContext.Provider value={{ isLoading, movie, Error, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };