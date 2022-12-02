import { Link } from "react-router-dom";

import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LiveTv } from "@mui/icons-material";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";

import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'


export default function TvseriesCard({tvseries,action}){
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
            title={
              <Typography variant="h5" component="p">
                {tvseries.name}{" "}
                <LiveTv></LiveTv>
              </Typography>
            }
          />
          <CardMedia
            sx={{ height: 500 }}
            image={
              tvseries.poster_path
                ? `https://image.tmdb.org/t/p/w500/${tvseries.poster_path}`
                : img
            }
          />
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6" component="p">
                  <CalendarIcon fontSize="small" />
                  {tvseries.first_air_date}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component="p">
                  <StarRateIcon fontSize="small" />
                  {"  "} {tvseries.vote_average}{" "}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions disableSpacing>
       
        <Link to={`/tvseries/${tvseries.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
        </Card>
      );
    }