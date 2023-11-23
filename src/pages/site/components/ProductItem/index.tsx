import React from 'react';
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

const InStockIcon: React.FC = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={11} height={10} viewBox='0 0 11 10' fill='none'>
    <circle cx='5.5' cy={5} r={5} fill='#78A962' />
    <path d='M7.5 4L4.98404 7L3.5 5.27853' stroke='white' strokeLinecap='round' />
  </svg>
);

const FavoriteIcon: React.FC = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={30} height={30} viewBox='0 0 30 30' fill='none'>
    <circle cx={15} cy={15} r={14} stroke='#A2A6B0' strokeWidth={2} />
    <path
      d='M14.6851 11.8254L15.3954 12.5419L16.1056 11.8254C16.7788 11.1462 17.8139 10.375 18.8922 10.375C19.9606 10.375 20.8026 10.7307 21.3714 11.278C21.9374 11.8225 22.2936 12.6141 22.2936 13.6095C22.2936 14.6805 21.8643 15.5925 21.1287 16.4761C20.3739 17.3829 19.3563 18.1913 18.2509 19.0643L18.2252 19.0846C17.2883 19.8241 16.2458 20.647 15.3958 21.5675C14.5542 20.655 13.5216 19.8387 12.593 19.1047L12.5424 19.0646L12.542 19.0643C11.4363 18.1911 10.4189 17.3825 9.66433 16.4757C8.92905 15.5921 8.5 14.6802 8.5 13.6095C8.5 12.6141 8.8562 11.8226 9.42223 11.278C9.99108 10.7308 10.8333 10.375 11.9021 10.375C12.9791 10.375 14.0111 11.1454 14.6851 11.8254Z'
      stroke='#A2A6B0'
      strokeWidth={2}
    />
  </svg>
);

const CompareIcon: React.FC = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={30} height={30} viewBox='0 0 30 30' fill='none'>
    <circle cx={15} cy={15} r={14} stroke='#A2A6B0' strokeWidth={2} />
    <path d='M11 22.0883V17.6027' stroke='#A2A6B0' strokeWidth='2.2' strokeLinecap='round' />
    <path d='M15 22.0884V8.69238' stroke='#A2A6B0' strokeWidth='2.2' strokeLinecap='round' />
    <path d='M19 22.0883V13.2467' stroke='#A2A6B0' strokeWidth='2.2' strokeLinecap='round' />
  </svg>
);

const AddToCartIcon: React.FC = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={19} height={17} viewBox='0 0 19 17' fill='none'>
    <path
      d='M11.4574 16.8334C12.01 16.8334 12.5399 16.6139 12.9306 16.2232C13.3213 15.8325 13.5408 15.3026 13.5408 14.75C13.5408 14.1975 13.3213 13.6676 12.9306 13.2769C12.5399 12.8862 12.01 12.6667 11.4574 12.6667C10.9049 12.6667 10.375 12.8862 9.9843 13.2769C9.59359 13.6676 9.3741 14.1975 9.3741 14.75C9.3741 15.3026 9.59359 15.8325 9.9843 16.2232C10.375 16.6139 10.9049 16.8334 11.4574 16.8334ZM4.16577 16.8334C4.7183 16.8334 5.24821 16.6139 5.63891 16.2232C6.02961 15.8325 6.2491 15.3026 6.2491 14.75C6.2491 14.1975 6.02961 13.6676 5.63891 13.2769C5.24821 12.8862 4.7183 12.6667 4.16577 12.6667C3.61323 12.6667 3.08333 12.8862 2.69263 13.2769C2.30193 13.6676 2.08243 14.1975 2.08243 14.75C2.08243 15.3026 2.30193 15.8325 2.69263 16.2232C3.08333 16.6139 3.61323 16.8334 4.16577 16.8334ZM17.747 2.16981C18.0071 2.16142 18.2536 2.05223 18.4346 1.86531C18.6156 1.6784 18.7168 1.42842 18.7168 1.16825C18.7168 0.908074 18.6156 0.658098 18.4346 0.471184C18.2536 0.284271 18.0071 0.175074 17.747 0.166687H16.5481C15.6085 0.166687 14.796 0.81877 14.5918 1.73544L13.2866 7.61252C13.0824 8.52919 12.2699 9.18127 11.3304 9.18127H3.50535L2.00327 3.17085H11.7376C11.9952 3.1591 12.2384 3.0485 12.4165 2.86205C12.5946 2.67561 12.694 2.42767 12.694 2.16981C12.694 1.91195 12.5946 1.66401 12.4165 1.47757C12.2384 1.29113 11.9952 1.18052 11.7376 1.16877H2.00327C1.69875 1.16868 1.39823 1.23802 1.12453 1.37151C0.85084 1.50501 0.611185 1.69915 0.423786 1.93917C0.236387 2.17919 0.106178 2.45878 0.0430584 2.75668C-0.0200634 3.05458 -0.0144329 3.36295 0.0595188 3.65835L1.5616 9.66669C1.66989 10.1002 1.92003 10.4851 2.27224 10.7601C2.62444 11.0351 3.05849 11.1845 3.50535 11.1844H11.3304C12.242 11.1845 13.1265 10.8737 13.8376 10.3032C14.5488 9.73281 15.0441 8.93687 15.2418 8.04689L16.5481 2.16981H17.747Z'
      fill='#0156FF'
    />
  </svg>
);

const CheckAvailabilityIcon: React.FC = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={11} height={10} viewBox='0 0 11 10' fill='none'>
    <circle cx='5.5' cy={5} r={5} fill='#C94D3F' />
    <path
      d='M6.17669 5.85626L6.52669 5.50626C6.57383 5.4597 6.63347 5.42783 6.69838 5.41452C6.76328 5.4012 6.83065 5.40702 6.89231 5.43126L7.31888 5.60157C7.38119 5.62686 7.43462 5.67004 7.47244 5.72565C7.51025 5.78126 7.53076 5.84682 7.53138 5.91407V6.69532C7.53101 6.74107 7.5214 6.78627 7.50311 6.8282C7.48481 6.87013 7.45823 6.90793 7.42494 6.93931C7.39166 6.9707 7.35237 6.99502 7.30944 7.01083C7.2665 7.02663 7.22082 7.03358 7.17513 7.03126C4.18607 6.84532 3.58294 4.31407 3.46888 3.34532C3.46358 3.29775 3.46842 3.24959 3.48307 3.20402C3.49772 3.15846 3.52186 3.11651 3.55389 3.08093C3.58592 3.04536 3.62511 3.01698 3.6689 2.99764C3.71269 2.97831 3.76007 2.96846 3.80794 2.96876H4.56263C4.62997 2.96896 4.69572 2.9893 4.75141 3.02717C4.8071 3.06504 4.85018 3.1187 4.87513 3.18126L5.04544 3.60782C5.07048 3.66924 5.07687 3.73667 5.06381 3.8017C5.05075 3.86672 5.01882 3.92646 4.972 3.97344L4.622 4.32344C4.622 4.32344 4.82356 5.68751 6.17669 5.85626Z'
      fill='white'
    />
  </svg>
);

const StarFilledIcon: React.FC = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={14} height={13} viewBox='0 0 14 13' fill='none'>
    <path
      d='M6.91099 0.173835C6.94815 0.10127 7.05185 0.10127 7.08901 0.173834L8.92922 3.76772C8.94375 3.79609 8.97092 3.81583 9.00239 3.82088L12.989 4.46045C13.0695 4.47337 13.1016 4.572 13.044 4.62976L10.1947 7.49048C10.1722 7.51306 10.1618 7.54501 10.1668 7.57649L10.7904 11.5657C10.803 11.6462 10.7191 11.7072 10.6464 11.6703L7.04522 9.84443C7.0168 9.83002 6.9832 9.83002 6.95478 9.84443L3.35358 11.6703C3.28087 11.7072 3.19697 11.6462 3.20956 11.5657L3.83323 7.57649C3.83816 7.54501 3.82778 7.51306 3.80529 7.49048L0.955954 4.62976C0.898423 4.572 0.93047 4.47337 1.01096 4.46045L4.99761 3.82088C5.02908 3.81583 5.05625 3.79609 5.07078 3.76772L6.91099 0.173835Z'
      fill='#E9A426'
    />
  </svg>
);

const StarEmptyIcon: React.FC = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={14} height={13} viewBox='0 0 14 13' fill='none'>
    <path
      d='M6.91099 0.173835C6.94815 0.10127 7.05185 0.10127 7.08901 0.173834L8.92922 3.76772C8.94375 3.79609 8.97092 3.81583 9.00239 3.82088L12.989 4.46045C13.0695 4.47337 13.1016 4.572 13.044 4.62976L10.1947 7.49048C10.1722 7.51306 10.1618 7.54501 10.1668 7.57649L10.7904 11.5657C10.803 11.6462 10.7191 11.7072 10.6464 11.6703L7.04522 9.84443C7.0168 9.83002 6.9832 9.83002 6.95478 9.84443L3.35358 11.6703C3.28087 11.7072 3.19697 11.6462 3.20956 11.5657L3.83323 7.57649C3.83816 7.54501 3.82778 7.51306 3.80529 7.49048L0.955954 4.62976C0.898423 4.572 0.93047 4.47337 1.01096 4.46045L4.99761 3.82088C5.02908 3.81583 5.05625 3.79609 5.07078 3.76772L6.91099 0.173835Z'
      fill='#CACDD8'
    />
  </svg>
);

const renderRating = (rating: number) => {
  return (
    <div className='product-rating-stars'>
      {Array.from({ length: 5 }, (_, i) => (i < rating ? <StarFilledIcon key={i} /> : <StarEmptyIcon key={i} />))}
    </div>
  );
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(price);
};

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
      <div className='product-card'>
        <div className='product-status'>
          {isAvailable ? <InStockIcon /> : <CheckAvailabilityIcon />}
          <span className='status-text'>{isAvailable ? 'in stock' : 'check availability'}</span>
        </div>
        <div className='product-image-wrapper'>
          <img className='product-image' alt={title} src={imageUrl} />
        </div>
        <div className='product-rating'>
          {renderRating(rating)} <span className='product-rating-text'>Reviews ({reviewsCount})</span>
        </div>
        <div className='product-title'>{title}</div>
        <div className='product-pricing'>
          <div className='product-original-price'>{formatPrice(originalPrice)}</div>
          <div className='product-sale-price'>{formatPrice(salePrice)}</div>
        </div>
        <div className='add-to-cart'>
          <button className='add-to-cart-button'>
            <AddToCartIcon /> <span className='add-to-cart-text'>Add To Cart</span>
          </button>
        </div>
        <div className='favorite-compare'>
          <FavoriteIcon />
          <CompareIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
