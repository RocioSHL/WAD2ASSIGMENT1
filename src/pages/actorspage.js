import React, { useState, useEffect } from "react";
import ActorListPageTemplate from "../components/templateactorlist";
import {getActors } from "../api/tmdb-api";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
const ActorsPage = (props) => {
 
  const {  data, error, isLoading, isError }  = useQuery('people',getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actor = data.results;

  


  return (
    <ActorListPageTemplate
      title="ACTORS"
      actors={actor}
      action= {(actor) => {
        return (
        <>
        <AddToFavouritesIcon movie={actor} />
        
        </>)
      }}
      
    />
  );
};
export default ActorsPage;