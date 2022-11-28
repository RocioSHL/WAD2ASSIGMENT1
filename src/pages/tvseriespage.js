import React, { useState, useEffect } from "react";
import TVseriesListPageTemplate from "../components/templatetvseriespage";
import { getTVseries } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
const TvseriesPage = (props) => {
 
  const {  data, error, isLoading, isError }  = useQuery('tvseries',getTVseries)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvserie = data.results;

  


  return (
    <TVseriesListPageTemplate
      title="TV SERIES"
      tvseries= {tvserie}
      
    />
  );
};
export default TvseriesPage;