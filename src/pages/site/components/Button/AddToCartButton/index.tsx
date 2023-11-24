import React from 'react';
import { AddToCartIcon } from '../../ProductIcon';
import './AddToCartButton.scss';

const AddToCartButton: React.FC = () => {
  return (
    <div className='add-to-cart'>
      <button className='add-to-cart-button'>
        <AddToCartIcon /> <span className='add-to-cart-text'>Add To Cart</span>
      </button>
    </div>
  );
};

export default AddToCartButton;
