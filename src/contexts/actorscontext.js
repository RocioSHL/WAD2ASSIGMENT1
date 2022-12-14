import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState( [] )
  const [mustwatch , setMustWatch ] = useState ([])
  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addtoMustWatch = (movie)=>
  {
  let newMustWatch = [...mustwatch];
    if (!mustwatch.includes(movie.id)) {
      newMustWatch.push(movie.id);
    }
    setMustWatch(newMustWatch);
    console.log(mustwatch);

  };


    return (
      <MoviesContext.Provider
        value={{
          favourites,
          addToFavourites,
          removeFromFavourites,
          addReview,
          addtoMustWatch,
        }}
      >
        {props.children}
      </MoviesContext.Provider>
    );
  };
  
  export default MoviesContextProvider;