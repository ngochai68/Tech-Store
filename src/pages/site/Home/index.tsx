import React from 'react';
import SlidingBanner from './components/SlidingBanner';
import NewProductSlider from './components/NewProductSlider';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className='home container'>
      <SlidingBanner />
      <NewProductSlider />
    </div>
  );
};

export default Home;
