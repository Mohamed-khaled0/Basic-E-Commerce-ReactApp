import { Link } from "react-router-dom";
import './Products.css'; // Import the CSS file for styling

function Product(props) {
  let { product, showButton } = props;

  return (
    <>
      <div className="card mb-4"> {/* Add margin-bottom to cards */}
        <img
          className="card-img-top img-fluid"
          src={product.image}
          alt={product.title}
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <div className="card-body">
          <h5 className="card-title text-truncate" style={{ fontSize: '1.25rem' }}>{product.title}</h5>
          <p className="card-text" style={{ fontSize: '1rem', overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '4' }}>
            {product.description}
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#007bff', marginTop: '0.5rem' }}>
            Price: {product.price}$
          </p>
          {showButton && (
            <Link
              className="btn btn-primary"
              to={`/product/${product.id}`}
            >
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Product;
