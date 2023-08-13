import { Link } from "react-router-dom";
import "./styles/Footer.css";
import { BsFacebook, BsDiscord, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 footer-store-about">
              <h5>Gaurav's Store</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus odio dignissimos.</p>
            </div>
            <div className="col-md-3 subscribe-footer-form">
              <h6>Subscribe to important updates</h6>
                <form action='https://formspree.io/f/xvojgdrr' method='POST'>
                    <div className="mb-3">
                        <input type="email" className="form-control mb-2" placeholder="Enter your email"/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-md-3 footer-social">
              <h5>Follow Us</h5>
              <span>
                <BsFacebook/>
                <BsDiscord/>
                <BsInstagram/>
              </span>
            </div>
            <div className="col-md-3 footer-contact-no">
              <h5>Call Us</h5>
              <Link to='tel:+918460469959'>+918460469959</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="copyright-footer">
        <div className="container">
          <p>
            &copy;{ new Date().getFullYear() } Gaurav's Store. All Rights Reserved. 
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
