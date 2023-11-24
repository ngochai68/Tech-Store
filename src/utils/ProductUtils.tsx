import { StarFilledIcon, StarEmptyIcon } from '../pages/site/components/ProductIcon';

export const renderRating = (rating: number) => {
  return (
    <div className='product-item__rating-stars'>
      {Array.from({ length: 5 }, (_, i) => (i < rating ? <StarFilledIcon key={i} /> : <StarEmptyIcon key={i} />))}
    </div>
  );
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(price);
};
