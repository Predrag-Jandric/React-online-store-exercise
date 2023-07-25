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
        // empty space for testing purpose, look in "testing" folder 
        setSingleProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const { images, title, price, rating, stock } = singleProduct;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className='main'>

      {/* left section = LS */}
      {images && (
        <section className='LS'>
          <img src={mainImage} alt="img missing" className="LS_main_image" />

          <article className="LS_secondary_images_container">
            {images.slice(0, 4).map((image, index) => (
              <img
                src={image}
                key={index}
                alt="img missing"
                // className="LS_secondary_images"
                className={`LS_secondary_images ${index === activeCard ? 'active' : ''}`}
                onClick={() => {
                  handleCardClick(index)
                  setMainImage(image)
                }}
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
                  Hurry up! only <strong>{stock}</strong> products left in stock!
                </span>
              ) : (
                'Sorry, none left'
              )}
            </p>
          </article>
        )}

        <hr className="horizontal_line" />

        <article className="RS_2of3">
          <p className="RS_2of3_total_price">
            Total price: {singleProduct && price * quantity}$
          </p>
          <div className="RS_2of3_container">
            {stock > 0 ? (
              <>
                <p className='RS_2of3_container_p'>Quantity:</p>
                <button
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                  className="RS_2of3_container_btn"
                >
                  -
                </button>
                <p className='RS_2of3_container_quantity'>{quantity}</p>
                <button
                  onClick={increaseQuantity}
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
            onClick={() => alert("This button functionality is out of this project's scope")}
            className='RS_3of3_btn'
          >
            Add to cart
          </button>
          <button
            onClick={() => alert("This button functionality is out of this project's scope")}
            className='RS_3of3_btn'
          >
            Buy it now
          </button>
          <VscHeart
            onClick={() => alert("This button functionality is out of this project's scope")}
            className='RS_3of3_icon'
          />
        </article>

        <hr className="horizontal_line" />
      </section>
    </div>
  );
}

export default SingleProduct;
