import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {

	return (
		<div >
			<section className='card'>
				<img className='card__image' src={item.images[0]} alt="image missing" />

				<article className='card__content'>
					<h1 className='card__content__title'>{item.title}</h1>
					<small className='card__content__rating'>rating: {item.rating}</small>
					<p className='card__content__description'>{item.description}</p>
					<p className='card__content__price'>Price: <b>{item.price} $</b></p>
				</article>

				<Link className='card__btn' to={`/SingleProduct/${item.id}`}>View details</Link>
			</section>
		</div>
	);
}

export default Card;
