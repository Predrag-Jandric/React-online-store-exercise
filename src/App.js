import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import ProductService from './services/ProductService';
import { getAllProducts } from './store/productsSlice';
import './styling/index.scss';


function App() {

	const dispatch = useDispatch()

	useEffect(() => {
		ProductService.getAllProducts()
			.then((res) => dispatch(getAllProducts(res.data.products)))
			.catch((err) => console.log(err));
	}, [dispatch]);

	return (
		<main>
			<Navbar />
			<Outlet />
		</main>
	);
}

export default App;
