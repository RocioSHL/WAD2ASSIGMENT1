import React from "react";
import { useParams } from 'react-router-dom';
import TvseriesDetails from "../components/tvseriesdetails";
import { getTVserie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TvseriesDetailsPage = (props) => {
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
      {movie ? (
        <>
          
            <TvseriesDetails show ={show} />
          
        </>
      ) : (
        <p>Waiting for show details</p>
      )}
    </>
  );
};

export default TvseriesDetailsPage;