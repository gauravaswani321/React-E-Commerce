import { useEffect } from 'react';
import FormatPrice from './FormatPrice';
import './styles/ProductListView.css';
import { Link } from "react-router-dom";

const ProductListView = ({products}) => {
  return (
    <>
        { products.map((product) => (
          <div className="row single-list-product" key={product.id}>
            <div className="col-md-3 image">
              <img src={product.image} />
            </div>

            <div className="col-md-9">
              <h4 className='name'>{product.name}</h4>
              <p className='price'><FormatPrice price={product.price}/></p>
              <p>{product.description.slice(0, 99)}...</p>
              <Link to={`/singleproduct/${product.id}`}>
                <button type="button" className="btn btn-primary view-product-btn">View Product</button>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductListView;