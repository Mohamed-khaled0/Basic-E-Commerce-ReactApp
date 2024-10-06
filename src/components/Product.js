import { Link } from "react-router-dom";

function Product (props){
    let {product,showButton} = props;

    return(
        <>
         <div className="card">
            <img className="card-img-top" src={product.image} alt={product.title} />
            <div className="card-body">
              <h5 className="card-title m-2 ">{product.title}</h5>
              <p className="card-text">
              {product.description} 
              </p>
              <p> Price : {product.price}$</p>
              {showButton &&  <Link href="/#" className="btn btn-primary" to={`/product/${product.id}`}>
                Details
              </Link>  }
             
            </div>
          </div>
        </>
    )
}
export default Product;