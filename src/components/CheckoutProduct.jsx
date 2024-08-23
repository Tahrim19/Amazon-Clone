import React from 'react';
import { useStateValue } from './StateProvider';
import '../css/checkoutProduct.css';

export default function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className='checkout-product'>
      <img className='checkout-product-image' src={image} alt={title} />
      <div className='checkout-product-info'>
        <p className='checkout-product-title'>{title}</p>
        <p className='checkout-product-price'>
          <small>$</small><strong>{price}</strong>
        </p>
        <div className='checkout-product-rating'>
          {Array(rating).fill().map((_, i) => (
            <p key={i}>🌟</p>
          ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}
