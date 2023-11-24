import React from 'react';
import SlidingBanner from './components/SlidingBanner';
import NewProductSlider from './components/NewProductSlider';
import './Home.scss';

const products = [
  {
    title: 'Lenovo IdeaPad 3i 15.6in i5 8GB 512GB Laptop',
    originalPrice: 999,
    salePrice: 1399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'Lenovo IdeaPad 3i 15.6in i5 8GB 512GB Laptop + Microsoft 365',
    originalPrice: 999,
    salePrice: 1399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  },
  {
    title: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One 32432423423243234234',
    originalPrice: 999,
    salePrice: 399,
    imageUrl:
      'https://product.hstatic.net/200000722513/product/lg-gram-2023-fix_28f08b20a1724869a1d5da4920697371_medium.png',
    isAvailable: true,
    rating: 4,
    reviewsCount: 4
  }
];

const Home: React.FC = () => {
  return (
    <div className='home container'>
      <SlidingBanner />
      <NewProductSlider products={products} />
    </div>
  );
};

export default Home;
