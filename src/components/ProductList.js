import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  let api_url = "https://fakestoreapi.com/products";
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);

  let getProductInCategory = (categoryName) => {
    fetch(`${api_url}/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  let getProducts = () => {
    fetch(api_url)
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  };

  let getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((resp) => resp.json())
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>

      <div className="container">
        <button
          onClick={() => {
            getProducts();
          }}
          className="btn btn-info p-2 m-2">
          All Products
        </button>
        {categories.map((category) => {
          return (
            <button
              onClick={() => {
                getProductInCategory(category)
              }}
              key={category}
              className="btn btn-info p-2 m-2"
            >
              {" "}
              {category}
            </button>
          );

        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductsList;
