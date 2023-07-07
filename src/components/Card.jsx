import React from 'react';

function Card({item}) {

	return (
		<div >
			<article className='card'>

				<h1 className='card__title'>{item.title}</h1>
				<small className='card__rating'>rating: {item.rating}</small>
				<p className='card__description'>{item.description}</p>
				<p className='card__price'>Price: ${item.price}</p>
			</article>
		</div>
	);
}

export default Card;
