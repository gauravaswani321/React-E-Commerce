import './styles/Navbar.css';
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to="/"><img src="images/gaurav_logo.png" className="navbar-logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link" aria-current="page">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className="nav-link" aria-current="page">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link" aria-current="page">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cart' className="nav-link" aria-current="page"><BsFillCartCheckFill/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Navbar;