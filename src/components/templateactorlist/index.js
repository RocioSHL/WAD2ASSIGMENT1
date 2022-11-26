import React, { useState } from "react";
import Header from "../headerMovieList";
import ActorList from "../actorlist/inndex";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({actors, title, action }) {
  

  let displayedActors = actors
   


  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          
        </Grid>
        <ActorList action={action} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;
