import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ width: 345, height: 350, backgroundColor: "white" }}>
    <CardMedia sx={{ height: 140 }} image={elemento.img} title="green iguana" />
    <CardContent sx={{ height: 150 }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        textAlign={"center"}
      >
        {elemento.title}
      </Typography>
      <Typography variant="h6" color="text.secondary" textAlign={"center"}>
        {elemento.description}
      </Typography>
      <Typography variant="subtitle1" textAlign={"center"}>
        ${elemento.price}.-
      </Typography>
    </CardContent>
    <CardActions style={{ display: "flex", justifyContent: "center" }}>
      
        <Button
          variant="contained"
          size="small"
          sx={{ textTransform: "none" }}
        >
          Ver detalle
        </Button>
    </CardActions>
  </Card>
  );
};

export default ProductCard;
