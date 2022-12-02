import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AccountBox } from "@mui/icons-material";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import { MoviesContext } from "../../contexts/moviesContext";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'

export default function ActorCard({actor,action}){
 
  const {favourites , addToFavorites}=useContext(MoviesContext);

  if (favourites.find((id) => id === actor.id)) {
   actor.favourite = true;
  } else {
    actor.favourite = false
  }
return (
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
       
       avatar={
        actor.favourite ? (
           <Avatar sx={{ backgroundColor: 'red' }}>
             <FavoriteIcon />
           </Avatar>
         ) : null
       }
    
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
            <AccountBox color="blue" ></AccountBox>
          </Typography>
         
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {actor.birthday}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {actor.popularity}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
    {action(actor)}
    <Link to={`/actors/${actor.id}`}>
      <Button variant="outlined" size="medium" color="primary">
        Biography 
      </Button>
    </Link>
  </CardActions>
    </Card>
  );
}