import React from "react";
import SiteHeader from './components/siteHeader'
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; 
import UpcomingPage from "./pages/upcomingMoviesPage";
import {Link} from 'react-router-dom'
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import ActorCard from "./components/actorcard";
import PopularPage from "./pages/mostpopularmoviespage";
import ActorsPage from "./pages/actorspage";
import TvseriesPage from "./pages/tvseriespage";
import FavouriteActorsPage from "./pages/favoriteactorspage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <SiteHeader /> { <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies/favourites">Favourites</Link>
        </li>
      </ul> }
      <MoviesContextProvider>
      <Routes>
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route exact path="/movies/upcoming" element={<UpcomingPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path = "/movies/popular" element = {<PopularPage/>}/>
        <Route path = "/actors" element = {<ActorsPage/>}/>
        <Route path = "/tvseries" element = {<TvseriesPage/>}/>
        <Route path = "/actors/favorites" element = {<FavouriteActorsPage></FavouriteActorsPage>}/>
      </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );