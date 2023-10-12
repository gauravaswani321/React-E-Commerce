import { Link } from 'react-router-dom';
import './styles/Error.css';

const Error = () => {

  return (
    <>
      <section className="error">
        <div className="container">
          <div className="row">
            <div className="col-md-12 error-content">
              <h1>404</h1>
              <h2>OH NO! You're lost.</h2>
              <p>The page you are looking for does not exist. The following might have been delete or disabled.
                You can go back Home by click below button.</p>
                <button type="submit" className="btn btn-primary">
                  <Link to='/'>Home</Link>
                </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Error;