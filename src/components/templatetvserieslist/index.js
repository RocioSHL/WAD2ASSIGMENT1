import React from "react";
import TvseriesCard from "../tvseriescard";
import Grid from "@mui/material/Grid";

const TVseriesList = ( {tvseries, action }) => {
  let tvseriesCards = tvseries.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvseriesCard key={m.id} tvseries={m} action={action} />
    </Grid>
  ));
  return tvseriesCards;
};

export default TVseriesList;