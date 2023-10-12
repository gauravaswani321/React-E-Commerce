import { useState } from 'react';
import './styles/ProductImg.css';

const ProductImg = ({images}) => {

    const [imgIndex, setImageIndex] = useState(0);

  return (
    <>
        <div className="row">
            <div className="col-md-12 product-main-image">
                <img src={images && images[imgIndex].url}/>
            </div>

            <div className="col-md-12 product-img-thumbnails">
                {images && images.map((curImage, index) => (
                    <img
                        src={curImage.url}
                        alt={curImage.filename}
                        key={index}
                        onClick={() => setImageIndex(index)}
                    />
                ))}
            </div>
        </div>
    </>
  );
};

export default ProductImg;