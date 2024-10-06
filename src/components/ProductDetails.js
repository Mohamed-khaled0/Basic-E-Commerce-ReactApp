import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails(){
    let api_url = "https://fakestoreapi.com/products";
    let params = useParams();
    let [product , setProduct] = useState({});

    useEffect( () => {
        fetch(`${api_url}/${params.productId}`)
        .then((resp) => resp.json())
        .then((product) => setProduct(product))
    } 
    ,[])
    return(
        <>
    < Product product={product} showButton={false}  />
        </>
    )
}

export default ProductDetails;