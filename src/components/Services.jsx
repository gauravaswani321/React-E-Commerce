import "./styles/Services.css";
import { BsTruck, BsCurrencyRupee, BsShieldCheck, BsFillShieldLockFill } from "react-icons/bs";

const Services = () => {
  return (
    <>
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="superfast-delivery">
                            <BsTruck/>
                            <h6>Super Fast and Free Delivery</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="no-contact-shipping">
                            <BsShieldCheck/>
                            <h6>Non-contact Shipping</h6>
                        </div>
                        <div className="money-back-garunteed">
                            <BsCurrencyRupee/>
                            <h6>Money Back Garunteed</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="secure-payment">
                            <BsFillShieldLockFill/>
                            <h6>Super Secure Payment System</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Services;