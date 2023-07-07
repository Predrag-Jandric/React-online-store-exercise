import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.scss';
import App from './App';
import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

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
				path: '/products',
				element: <Products />,
			},
			{
				path: '/contact',
				element: <Contact />
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
