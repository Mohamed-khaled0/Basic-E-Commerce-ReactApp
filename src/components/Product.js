function Product (props){
    let {product} = props;
    return(
        <>
         <div className="card">
            <img className="card-img-top" src={product.image} alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title} </h5>
              <p className="card-text">
              {product.description} 
              </p>
              <button href="/#" className="btn btn-primary">
                Details
              </button>
            </div>
          </div>
        </>
    )
}
export default Product;