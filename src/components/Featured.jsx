import "./styles/Featured.css";
import FormatPrice from "./FormatPrice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./store/slices/productApiSlice";
import { Link } from "react-router-dom";

const Featured = () => {

    const dispatch = useDispatch();
    const { featuredproducts } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts('https://api.pujakaitem.com/api/products'));
    }, [])

  return (
    <>
        <section className="featured">
            <div className="container">
                <div className="row featured-service-heading">
                    <h5>Check Our</h5>
                    <h2>Featured Services</h2>
                </div>
                <div className="row gx-5 featured-service-products">
                    { featuredproducts.map((product) => (
                        <div className="col-md-4" key={product.id}>
                            <div className="featured-single-product">
                                <Link to={`/singleproduct/${product.id}`}>
                                    <span>{product.category}</span>
                                    <img src={product.image}/>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6>{product.name}</h6>
                                        <p><FormatPrice price={product.price}/></p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  );
}

export default Featured;