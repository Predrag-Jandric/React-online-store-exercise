import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import ProductService from './services/ProductService';
import { getAllProducts } from './store/productsSlice'

function App() {

	const dispatch = useDispatch()

	// const [data, setData] = useState([]);

	useEffect(() => {
		ProductService.getAllProducts()
			.then((res) => dispatch(getAllProducts(res.data.products)))
			.catch((err) => console.log(err));
	}, []);



	return (
		<div className='body'>
			<Navbar />
			{/* <section className='products'>
        {data.map((product, i) => (
          <Card key={i} item={product} />
        ))}
      </section> */}
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
