import React from 'react';

function Home() {
	return (
		<main className='home'>
			<h2>Project Documentation</h2>

			<hr />

			<article>
				<h4>What is this?</h4>
				<p>React practice project that simulates store page where user can select and buy products.</p>
			</article>

			<hr />
			
			<article>
				<h4>How to use?</h4>
				<p>Click "Products" then "View Details" of a product you like.</p>
			</article>

			<hr />

			<article>
				<h4>Tools/Features used:</h4>
				<p>1. React routing with react-router-dom</p>
				<p>2. Advanced state management with redux-toolkit.</p>
				<p>3. Maps, conditional rendering etc...</p>
				<p>4. Sass for styling</p>
			</article>

			<hr />

		</main>
	)
}

export default Home;
