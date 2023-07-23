import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VscCheck, VscChromeClose, VscHeart } from 'react-icons/vsc';
import ProductService from '../services/ProductService';

function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');

  const { id } = useParams();

  useEffect(() => {
    ProductService.getSingleProduct(id)
      .then((res) => {
        const firstImage = res.data.images[0];
        setMainImage(firstImage);
        
        setSingleProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { images, title, price, rating, stock } = singleProduct;

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  return (
    <div className='main'>

      {images && (
        <section className='LS'>
          <img src={mainImage} alt="img missing" className="LS_main_image" />

          <article className="LS_secondary_images_container">
            {images.map((image, index) => (
              <img
                src={image}
                key={index}
                alt="img missing"
                className="LS_secondary_images"
                onClick={() => setMainImage(image)}
              />
            ))}
          </article>
        </section>
      )}

      {/* right section = RS */}
      <section className="RS">
        {singleProduct && (
          <article className="RS_1of3">
            <p className="RS_1of3_title">{title}</p>
            <p className="RS_1of3_price">{price} $</p>
            <small className='RS_1of3_rating'>Reviews: {rating}</small>

            <div className="RS_1of3_av">
              Availability:
              {stock >= 1 ? (
                <span className="RS_1of3_av_green">
                  <VscCheck /> In stock
                </span>
              ) : (
                <span className="RS_1of3_av_red">
                  <VscChromeClose /> Not available
                </span>
              )}
            </div>

            <p className='RS_1of3_hurry_up'>
              {stock >= 1 ? (
                <span>{' '}
                  Hurry up, <strong>{stock}</strong> left!
                </span>
              ) : (
                'Sorry, none left'
              )}
            </p>
          </article>
        )}

        <hr className="" />

        <article className="RS_2of3">
          <p className="RS_2of3_total_price">
            Total price: {singleProduct && price * quantity}$
          </p>
          <div className="RS_2of3_container">
            {stock > 0 ? (
              <>
                <p className='RS_2of3_container_p'>Quantity:</p>
                <button
                  onClick={handleDecreaseQuantity}
                  disabled={quantity === 1}
                  className="RS_2of3_container_btn"
                >
                  -
                </button>
                <p className='RS_2of3_container_quantity'>{quantity}</p>
                <button
                  onClick={handleIncreaseQuantity}
                  disabled={quantity >= stock}
                  className="RS_2of3_container_btn"
                >
                  +
                </button>
              </>
            ) : (
              <p className="RS_2of3_container_quantity">Quantity: 0</p>
            )}
          </div>
        </article>

        <article className='RS_3of3'>
          <button
            onClick={() => alert("This part doesn't have functionality")}
            className='RS_3of3_btn'
          >
            Add to cart
          </button>
          <button
            onClick={() => alert("This part doesn't have functionality")}
            className='RS_3of3_btn'
          >
            Buy it now
          </button>
          <VscHeart
            onClick={() => alert("This part doesn't have functionality")}
            className='RS_3of3_icon'
          />
        </article>

        <hr className="" />
      </section>
    </div>
  );
}

export default SingleProduct;
