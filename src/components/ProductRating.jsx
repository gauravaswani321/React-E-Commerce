import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
// import './styles/ProductRating.css';

const ProductRating = ({stars}) => {
  return (
    <>
      {[...Array(5)].map((star, index) => (
        <span key={index}>
          {stars >= index + 1 ? <span><BsStarFill/></span> :
          stars >= index + 0.5 ? <span><BsStarHalf/></span> : <span><BsStar/></span>}
        </span>
      ))}
    </>
  );
};

export default ProductRating;