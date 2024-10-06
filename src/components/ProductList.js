import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  let api_url = "https://fakestoreapi.com/products";
  let  [products,setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
    .then((resp) => resp.json())
    .then((data) => setProducts(data));
  } , []);

  return (
    <>
      <h2 className="text-center p-3">Out Products</h2>

      <div className="container">
        <div className="row">
            {products.map( (product) => {
                return(
            <div className="col-3" key={product.id}>
            <Product  product={product}/>
          </div>
                )
            })}
        </div>
      </div>
    </>
  );
}
export default ProductsList;
