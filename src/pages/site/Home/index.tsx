// Home/index.tsx
import React from 'react';
import SlidingBanner from './components/SlidingBanner';

import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className='home container'>
      <SlidingBanner />
    </div>
  );
};

export default Home;
