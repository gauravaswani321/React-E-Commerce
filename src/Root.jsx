import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './components/store/slices/store';

const Root = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
      </Provider>
    </>
  );
}

export default Root;