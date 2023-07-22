import { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

function AllProducts() { 

  const {allProducts} = useSelector((state) => state.productStore)

console.log(allProducts);

  return (
    <div>
      <h1 className='all__our__products'>All our products</h1>
      <section className='products'>
        {allProducts.map((product, i) => (
          <Card key={i} item={product} />
        ))}
      </section>
    </div>
  );
}

export default AllProducts;














// function AllProducts() {
// 	const [data, setData] = useState([]);

// 	useEffect(() => {
// 		ProductService.getAllProducts()
// 			.then((res) => setData(res.data.products))
// 			.catch((err) => console.log(err));
// 	}, []);

// 	return (
// 		<div>
// 			<h1 className='all__our__products'>All our products</h1>
// 			<section className='products'>
				
// 				{data.map((product, i) => {
// 					return <Card key={i} item={product} />;

// 				})}
// 			</section>
// 		</div>
// 	)
// }

// export default AllProducts;
