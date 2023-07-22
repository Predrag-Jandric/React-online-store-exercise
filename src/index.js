import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.scss';
import App from './App';
import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import SingleProduct from './pages/SingleProduct';
import { Provider } from 'react-redux';
import store from './store/store';


const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/AllProducts',
				element: <AllProducts />,
			},
			{
				path: '/SingleProduct/:id',
				element: <SingleProduct />
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
