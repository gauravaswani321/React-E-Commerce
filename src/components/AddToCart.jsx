import './styles/AddToCart.css';
import { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const AddToCart = ({product}) => {
    const {id, colors, stock} = product;
    const [currColor, setCurrColor] = useState(''); 

    const [amount, setAmount] = useState(1);

  return (
    <>
        <div className="row">
            <div className="col-md-6">
                <div className="product-color-picker">
                    <p><b>Color :</b></p>
                    {colors.map((color, index) => (
                        <button 
                            className={currColor === color ? 'active' : undefined}
                            style={{backgroundColor:color}}
                            key={index}
                            onClick={() => setCurrColor(color)}>
                            {currColor === color  && <TiTick/>}
                        </button>
                    ))}
                </div>
            </div>
            <div className="col-md-6">
                <div className='product-amount'>
                    <p><b>Quantity :</b></p>
                    <button onClick={amount > 1 ? () => setAmount(amount - 1) : undefined}><AiFillMinusCircle/></button>
                        <div>{amount}</div>
                    <button onClick={amount < stock ? () => setAmount(amount + 1) : undefined}><AiFillPlusCircle/></button>
                </div>
            </div>

            <div className="col-md-12 add-to-cart">
                <Link to='/cart'>
                    <button type="button" className="btn btn-primary">Add to Cart</button>
                </Link>
            </div>
        </div>

    </>
  );
};

export default AddToCart;