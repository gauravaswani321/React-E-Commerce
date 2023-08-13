import './styles/HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <>
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 hero-left-content">
                        <h6>Welcome to</h6>
                        <h2>Gaurav's Store</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Doloribus aperiam cumque cupiditate consequatur sint vitae
                            recusandae quo omnis assumenda nulla accusamus molestias, sed
                            quae quibusdam consequuntur voluptatem, iste quasi aliquam!
                        </p>
                        <Link to="/products"><button type="button" className="btn btn-primary">Shop Now</button></Link>
                    </div>
                    <div className="col-md-6 hero-left-img">
                        <img src="images/hero.jpg"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default HeroSection;