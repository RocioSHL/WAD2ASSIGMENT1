export default function ActorCard({tvseries,action}){
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
            avatar={
             tvseries.favourite ? (
                <Avatar sx={{ backgroundColor: 'red' }}>
                  <FavoriteIcon />
                </Avatar>
              ) : null
            }
            title={
              <Typography variant="h5" component="p">
                {movie.title}{" "}
              </Typography>
            }
          />
          <CardMedia
            sx={{ height: 500 }}
            image={
              actor.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : img
            }
          />
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6" component="p">
                  <CalendarIcon fontSize="small" />
                  {movie.release_date}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component="p">
                  <StarRateIcon fontSize="small" />
                  {"  "} {movie.vote_average}{" "}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
        </Card>
      );
    }