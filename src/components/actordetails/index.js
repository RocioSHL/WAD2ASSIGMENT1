import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >

          
            
      </Paper>
      <Paper component="ul" sx={root}>
        <Chip icon={<AccessTimeIcon />} label={`Borned ${actor.birthday} `} />
        
        <Chip
          icon={<StarRate />}
          label={`${actor.popularity}`}
        />
        <Chip label={`also known as: ${actor.also_known_as}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        
      </Paper>
      </>
       
      
      
  );
};
export default   ActorDetails ;