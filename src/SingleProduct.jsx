import './components/styles/SingleProduct.css';
import FormatPrice from './components/FormatPrice';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleFetchProduct } from "./components/store/slices/productApiSlice";
import { CiDeliveryTruck } from "react-icons/ci";
import { GrPowerCycle } from "react-icons/gr";
import { SiTrustpilot } from "react-icons/si";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import ProductImg from './components/ProductImg';
import ProductRating from './components/ProductRating';
import AddToCart from './components/AddToCart';

const SingleProduct = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(singleFetchProduct(`https://api.pujakaitem.com/api/products?id=${id}`));
  }, []);
  
  const { singleProduct } = useSelector((state) => state.products);
  const {
    id:pid,
    name,
    stars,
    reviews,
    price,
    company,
    colors,
    description,
    category,
    shipping,
    stock,
    image
  } = singleProduct;

  if (state.isLoading) {
    return <div className="page_loading">Loading...</div>;
  }

  return (
    <>
      <section className="singlepg-product-head">
        <div className="container">
          <div className="row singlepg-product-heading">
            <span>
              <h4><Link to='/'>Home</Link></h4>
              <h4>/</h4>
              <h4>{ name }</h4>
            </span>
          </div>
        </div>
      </section>

      <section className="singlepg-product-details">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ProductImg images={image}/>
            </div>
            <div className="col-md-6 singlepg-product-content">
              <h3 className='name'>{ name }</h3>
              <div className='rating-stars'>
                <ProductRating stars={ stars }/> <p>({ reviews } Customer Reviews)</p>
              </div>
              <p className='deleted-price'><b>MRP:</b> <del><FormatPrice price={ price + 19500 }/></del></p>
              <p className='price'><b>Deal of the Day:</b> <FormatPrice price={price} /></p>
              <p className='description'>{ description }</p>
              <div className="services-icons">
                <span><CiDeliveryTruck/><p>Free Delivery</p></span>
                <span><GrPowerCycle/><p>15 Days Replacement</p></span>
                <span><SiTrustpilot/><p>Gaurav's Assured</p></span>
                <span><VscWorkspaceTrusted/><p>1 Year Warranty</p></span>
              </div>
              <p className='stock'><b>Available:</b> {stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
              <p className='brand'><b>Brand:</b> {company}</p>
              <div className="color">
                {stock > 0 && <AddToCart product={singleProduct}/>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;