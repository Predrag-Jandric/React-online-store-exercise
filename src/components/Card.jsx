import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {

	return (
		<div >
			<article className='card'>

				<h1 className='card__title'>{item.title}</h1>
				<small className='card__rating'>rating: {item.rating}</small>
				<p className='card__description'>{item.description}</p>
				<p className='card__price'>Price: ${item.price}</p>
				<Link className='card__btn' to={`/SingleProduct/${item.id}`}>View details</Link>
			</article>
		</div>
	);
}

export default Card;
