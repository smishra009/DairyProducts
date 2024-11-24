import { useState, useEffect } from "react";
import { DProduct } from "../App/models/DProduct"
import ProductList from "./ProductList"
import agent from "../App/CentralisedAxios/agent";
import ProgressComponent from "../App/Layouts/progress";

export default function Catalog(){
    let [productsList,setProducts]= useState<DProduct[]>([]);
    const [loading, setLoading]=useState(true)
  useEffect(()=>{
    agent.catalog.list()
    .then(products=>setProducts(products))
    .catch(error=>console.log(error))
    .finally(()=>setLoading(false))
  },[])
    if(loading) return <ProgressComponent message="Products are on the way..."/>
    return <>
   <ProductList products={productsList}/>
    </>
}



