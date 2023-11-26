import React from 'react';
import Slider from 'react-slick';
import ProductItem from '../../../components/ProductItem';
import { PrevArrow, NextArrow } from '../HomeIcon';
import { Link } from 'react-router-dom';
import { useGetLatestProductsQuery } from '../../../client.service';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './NewProductSlider.scss';

const NewProductSlider: React.FC = () => {
  const { data: products, isLoading, isError } = useGetLatestProductsQuery(11); // Số lượng sản phẩm bạn muốn lấy

  // Xử lý trường hợp loading hoặc error
  if (isLoading) return <div>Loading...</div>;
  if (isError || !products) return <div>Error occurred or no products available</div>;

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
    <div className='new-products'>
      <div className='new-products__header'>
        <h3 className='new-products__title'>New Products</h3>
        <Link to='/#' className='new-products__button'>
          See All New Products
        </Link>
      </div>
      <Slider className='product-slider' {...settings}>
        {products.map((product) => (
          <div key={product.product_id}>
            <ProductItem productItem={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewProductSlider;
