import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getPopularmovies } from "../api/tmdb-api";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
const PopularPage = (props) => {
 
  const {  data, error, isLoading, isError }  = useQuery('popular',getPopularmovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}
      action={(movie) => {
        return (
        <>
        <AddToFavouritesIcon movie={movie} />
        <AddToPlaylistIcon movie = {movie }/>
        </>)
      }}
    />
  );
};
export default PopularPage;