import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<div className='navbar'>
			<NavLink className='navbar__a' to='/'>Home</NavLink>
			<NavLink className='navbar__a' to='/AllProducts'>Products</NavLink>
		</div>
	);
}

export default Navbar;
