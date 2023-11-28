import React from 'react';
import { InStockIcon, FavoriteIcon, CompareIcon, CheckAvailabilityIcon } from '../ProductIcon';
import { Rate } from 'antd';
import { StarProductIcon } from '../ProductIcon';
import { IProduct } from '../../../../types/product.type';

import AddToCartButton from '../Button/AddToCartButton';

import './ProductItem.scss';

interface ProductItemProps {
  productItem: IProduct;
}

const ProductItem: React.FC<ProductItemProps> = ({ productItem }) => {
  if (!productItem) return null;

  const { is_available, title, image_url, rating, reviews_count, original_price, sale_price } = productItem;

  const isAvailable = is_available === 1;

  const numericRating = parseFloat(rating);

  return (
    <div className='product-item'>
      <div className='product-item__card'>
        <div className='product-item__status'>
          {isAvailable ? <InStockIcon /> : <CheckAvailabilityIcon />}
          <span
            className={`product-item__status-text ${!isAvailable ? 'product-item__status-text--out-of-stock' : ''}`}
          >
            {isAvailable ? 'in stock' : 'check availability'}
          </span>
        </div>
        <div className='product-item__image-wrapper'>
          <img className='product-item__image' alt={title} src={image_url} />
        </div>
        <div className='product-item__rating-reviews'>
          <Rate
            className='product-item__rating'
            character={<StarProductIcon />}
            disabled
            allowHalf
            defaultValue={numericRating}
          />
          <span className='product-item__reviews-text'>Reviews ({reviews_count})</span>
        </div>
        <div className='product-item__title'>{title}</div>
        <div className='product-item__pricing'>
          <div className='product-item__original-price'>${original_price}</div>
          <div className='product-item__sale-price'>${sale_price}</div>
        </div>
        <AddToCartButton />
        <div className='product-item__favorite-compare'>
          <FavoriteIcon />
          <CompareIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
