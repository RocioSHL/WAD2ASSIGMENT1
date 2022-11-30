import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const TvseriesDetails = ({ show }) => {  
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {show.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        
    
      </Paper>
      <Paper component="ul" sx={root}>
        <Chip icon={<AccessTimeIcon />} label={`${show.number_of_episodes} episodes , ${show.number_of_seasons} seasons`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${show.status}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${show.popularity}`}
        />
        <Chip label={`Released: ${show.first_air_date}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
       
      </Paper>
       <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      />
       
      
      </>
  );
};
export default TvseriesDetails ;