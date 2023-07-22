import React, { useEffect, useState } from 'react';
import Detail from '../components/Detail';
import { useParams } from 'react-router-dom'; 

import ProductService from '../services/ProductService';

function SingleProduct() {

  const [singleProduct, setSingleProduct] = useState([])

  const { id } = useParams()

  useEffect(() => {
    ProductService.getSingleProduct(id)
      .then((res) => setSingleProduct(res.data))
      .catch((err) => console.log(err))
  }, [])

  console.log(singleProduct);

  return (
    <div>
      <h1>{singleProduct.title}</h1>
    </div>
  )
}

export default SingleProduct
