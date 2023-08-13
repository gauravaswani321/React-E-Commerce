import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Root from './Root';
import Home from './Home';
import About from './About';
import Products from './Products'
import Contact from './Contact';
import Cart from './Cart';
import Error from './components/Error';
import SingleProduct from './SingleProduct';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/> 
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
