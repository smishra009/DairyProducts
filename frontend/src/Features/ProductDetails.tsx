import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DProduct } from "../App/models/DProduct";
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import agent from "../App/CentralisedAxios/agent";
import ProgressComponent from "../App/Layouts/progress";

export function ProductDetails(){
   const {id}= useParams<{id:string}>();
   const [currProduct, setCurrProduct]= useState<DProduct|null>(null);
   const [loading, setLoading]= useState(true)
   useEffect(()=>{
        id && agent.catalog.IndiProduct(parseInt(id))
        .then(res=>setCurrProduct(res))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
   },[])
   if(loading) return <ProgressComponent message={"Loading Product..."} />
   if(!currProduct) return <h3>Product does not exist</h3>
     return(
            <Grid marginTop={10}container spacing={6}>
            <Grid item xs={6}>
                <img src={currProduct.pictureUrl} alt="Product Image" style={{width:'100%'}}/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h2">{currProduct.name}</Typography>
                <Divider sx={{mb:2}}/>
                <Typography variant="h3" sx={{color: 'secondary.main'}}>{currProduct.price+' '}₹</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{currProduct.brand}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Category</TableCell>
                                <TableCell>{currProduct.category}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{currProduct.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Quantity left</TableCell>
                                <TableCell>{currProduct.quantity}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}