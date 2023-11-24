import React from 'react';
import { InStockIcon, FavoriteIcon, CompareIcon, CheckAvailabilityIcon } from '../ProductIcon';
import { renderRating, formatPrice } from '../../../../utils/ProductUtils';
import AddToCartButton from '../Button/AddToCartButton';

import './ProductItem.scss';

interface ProductItemProps {
  title: string;
  originalPrice: number;
  salePrice: number;
  imageUrl: string;
  isAvailable: boolean;
  rating: number;
  reviewsCount: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  title,
  originalPrice,
  salePrice,
  imageUrl,
  isAvailable,
  rating,
  reviewsCount
}) => {
  return (
    <div className='product-item'>
      <div className='product-item__card'>
        <div className='product-item__status'>
          {isAvailable ? <InStockIcon /> : <CheckAvailabilityIcon />}
          <span className='product-item__status-text'>{isAvailable ? 'in stock' : 'check availability'}</span>
        </div>
        <div className='product-item__image-wrapper'>
          <img className='product-item__image' alt={title} src={imageUrl} />
        </div>
        <div className='product-item__rating'>
          {renderRating(rating)} <span className='product-item__rating-text'>Reviews ({reviewsCount})</span>
        </div>
        <div className='product-item__title'>{title}</div>
        <div className='product-item__pricing'>
          <div className='product-item__original-price'>{formatPrice(originalPrice)}</div>
          <div className='product-item__sale-price'>{formatPrice(salePrice)}</div>
        </div>
        <AddToCartButton/>
        <div className='product-item__favorite-compare'>
          <FavoriteIcon />
          <CompareIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
