import React, { useContext } from "react";
import ActorListPageTemplate from "../components/templateactorlist";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";

const FavouriteActorsPage = () => {
  const {favourites: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["people", { id: movieId }],
        queryFn: getActor,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favouriteMovieQueries.map((q) => {
    
    return q.data
  });

  const toDo = () => true;

  return (
    <ActorListPageTemplate
      title="Favourite Actors"
     actors={movies}
      action={(actor) => {
        return (
          <>
            <RemoveFromFavourites movie={actor} />
           
          </>
        );
      }}
    />
  );
};

export default FavouriteActorsPage;

