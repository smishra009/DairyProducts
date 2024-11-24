import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { DProduct } from "../App/models/DProduct";
import { Link } from "react-router-dom";

interface Props{
    product: DProduct
}
export default function ProductCard({product}:Props){
    return <>
    <Card>
      <CardHeader
      avatar={
        <Avatar sx={{backgroundColor:'primary.main'}}>
          {product.name.charAt(0)}
        </Avatar>
      }
      title={
        <Typography sx={{color: 'red'}}>
          {product.name}
        </Typography>
      }
      />
      <CardMedia
        sx={{ height: 140, backgroundSize:'contain'}}
        image={product.pictureUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        ₹{product.price}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.brand}/{product.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
    </>
}