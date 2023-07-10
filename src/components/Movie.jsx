import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function Movie(props) {
    const { nameRu: name, year: year, posterUrl: poster, kinopoiskId: id, genres: genres} = props
    console.log(genres)
    return (
        <div id = {id}>
            <Card sx={{ maxWidth: 345, marginTop:"5px"}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="400"
                image={poster}
                alt={name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {year} 
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </div>
      );
}

export { Movie };
