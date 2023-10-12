import { Link } from 'react-router-dom';
import './styles/ProductGridView.css';

const ProductGridView = ({ products }) => {
  return (
    <>
       <div className="row">
          { products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <Link className='single-grid-product' to={`/singleproduct/${product.id}`}>
                  <div className="product">
                    <img src={product.image} />
                    <h6>{product.name}</h6>
                  </div>
                </Link>
              </div>
            ))}  
        </div>
    </>
  );
};

export default ProductGridView;