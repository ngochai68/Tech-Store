import React from 'react';
import Slider from 'react-slick';
import ProductItem from '../../../components/ProductItem';
import { PrevArrow, NextArrow } from '../HomeIcon';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './NewProductSlider.scss';

interface Product {
  title: string;
  originalPrice: number;
  salePrice: number;
  imageUrl: string;
  isAvailable: boolean;
  rating: number;
  reviewsCount: number;
}

interface NewProductSliderProps {
  products: Product[];
}

const NewProductSlider: React.FC<NewProductSliderProps> = ({ products }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrow: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='product-slider'>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index}>
            <ProductItem
              title={product.title}
              originalPrice={product.originalPrice}
              salePrice={product.salePrice}
              imageUrl={product.imageUrl}
              isAvailable={product.isAvailable}
              rating={product.rating}
              reviewsCount={product.reviewsCount}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewProductSlider;
