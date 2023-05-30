import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={elemento.img}
        title={elemento.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {elemento.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Agregar al carrito</Button>
       
      </CardActions>
    </Card>
  );
};

export default ProductCard;
