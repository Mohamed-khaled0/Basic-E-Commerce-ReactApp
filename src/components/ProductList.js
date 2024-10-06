import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProductInCategory = (categoryName) => {
    setLoading(true);
    fetch(`${api_url}/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  const getProducts = () => {
    setLoading(true);
    fetch(api_url)
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((resp) => resp.json())
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center">Error fetching products</div>;

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <button onClick={getProducts} className="btn btn-info p-2 m-2">All Products</button>
        {categories.map((category) => (
          <button
            onClick={() => getProductInCategory(category)}
            key={category}
            className="btn btn-info p-2 m-2"
          >
            {category}
          </button>
        ))}
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <Product product={product} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
