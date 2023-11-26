import React from 'react';
import ProductItem from '../ProductItem';
import { Row, Col } from 'antd';
import { IProduct } from '../../../../types/product.type';
import './ProductList.scss';

interface ProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Row className='product-list'>
      {products.map((product, index) => (
        <Col xs={24} sm={12} md={8} lg={6} xl={4} key={index}>
          <ProductItem productItem={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
