import React from 'react'
import { VscCheck, VscChromeClose, VscHeart } from "react-icons/vsc";

function Detail() {
  return (
    <div>
      
      <section>
          {/* <img src={productThumbnail} alt="img missing" className='' /> */}

          {/* <article className=''>
            {data.images.map((image, index) => (
              <img
                src={image}
                key={index}
                alt="img missing"
                className=''
                onClick={() => changeThumbnail(image)}
              />
            ))}
          </article> */}
        </section>

        <section className=''>
          {/* {data && ( */}
            <article className=''>
              <p className=''>title</p>
              <p className=''>99 $</p>
              <small>Reviews: 9.9</small>

              <div className=''>
                Availability:
                {/* {data.stock >= 1 ? (
                  <span className=''><VscCheck /> In stock</span>) : 
                  (<span className=''><VscChromeClose /> Not available</span>
                )} */}
              </div>

              <p>
                {/* {data.stock >= 1 ? (
                  <span> Hurry up, <strong>{data.stock}</strong> left!</span>)
                  : ('Sorry, none left')} */}
              </p>
            </article>
          {/* )} */}

          <hr className='' />

          <article className=''>
            <p className=''>Total price: $</p>
            <div className=''>
              <p className=''>Quantity:</p>
              <button
                
                className=''
              >-
              </button>
              <p className=''></p>
              <button
               
                className=''
              >+
              </button>
            </div>
          </article>

          <article>
            <button
              onClick={() => alert("This part doesn't have functionality")}>
              Add to cart
            </button>
            <button
              onClick={() => alert("This part doesn't have functionality")}>
              Buy it now
            </button>
            <VscHeart
              onClick={() => alert("This part doesn't have functionality")} />
          </article>

          <hr className='' />
        </section>

    </div>
  )
}

export default Detail
