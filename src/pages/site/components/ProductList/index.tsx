import React from 'react';
import ProductItem from '../ProductItem';
import { Row, Col } from 'antd';
import './ProductList.scss';

interface Product {
  title: string;
  originalPrice: number;
  salePrice: number;
  imageUrl: string;
  isAvailable: boolean;
  rating: number;
  reviewsCount: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Row className='product-list'>
      {products.map((product, index) => (
        <Col xs={24} sm={12} md={8} lg={6} xl={4} key={index}>
          <ProductItem
            title={product.title}
            originalPrice={product.originalPrice}
            salePrice={product.salePrice}
            imageUrl={product.imageUrl}
            isAvailable={product.isAvailable}
            rating={product.rating}
            reviewsCount={product.reviewsCount}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
