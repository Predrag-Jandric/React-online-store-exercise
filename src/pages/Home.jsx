import React from 'react';

function Home() {
	return <div className='idle-text'>
		Welcome, This React practice project includes react routing and advanced state management with redux toolkit.
		<br />
		<br />
		Begin by clicking "Products" then "View Details" of a product you like. This will lead to a new page with functionalities:
		<br /> 1. Changing thumbnail
		<br /> 2. Calculating a total price depending of the product price
		<br /> 3. Product availability logic
	</div>;
}

export default Home;
