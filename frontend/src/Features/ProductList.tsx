import { Grid} from "@mui/material";
import { DProduct } from "../App/models/DProduct";
import ProductCard from "./ProductCard";

interface Props{
    products: DProduct[];
}
export default function ProductList({products}:Props){
    return <>
     <Grid sx={{mt:8}} container spacing={4}>
        {
            products.map(item=>
                <Grid key={item.id} item xs={3}>
                    <ProductCard product={item}/>
                </Grid>
            )
        }
    </Grid>
    </>
}