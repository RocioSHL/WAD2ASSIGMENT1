import React, { useState } from "react";
import Header from "../headerMovieList";
import TVseriesList from "../templatetvserieslist";
import Grid from "@mui/material/Grid";

function TVseriesListPageTemplate({tvseries, title, action }) {
  

  let displayedTVseries = tvseries;
   


  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          
        </Grid>
        <TVseriesList action={action} tvseries={displayedTVseries}></TVseriesList>
      </Grid>
    </Grid>
  );
}
export default TVseriesListPageTemplate;
