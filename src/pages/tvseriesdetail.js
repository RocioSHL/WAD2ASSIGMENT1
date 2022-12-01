import React from "react";
import { useParams } from 'react-router-dom';
import TvseriesDetails from "../components/tvseriesdetails";
import { getTVserie } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TVseriesDetailsPage = (props) => {
  const { id } = useParams();

  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getTVserie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
      {show ? (
        <>
          
            <TvseriesDetails show = {show}></TvseriesDetails>
          
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default TVseriesDetailsPage;