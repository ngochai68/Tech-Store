// Home/index.tsx
import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './SlidingBanner.scss';

const PrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props as {
    className: string;
    style: React.CSSProperties;
    onClick: React.MouseEventHandler<HTMLDivElement>;
  };

  return (
    <div className={className} style={{ ...style, display: 'block', left: '10px' }} onClick={onClick}>
      <div className='slider-icon-prev'>
        <svg xmlns='http://www.w3.org/2000/svg' width={8} height={12} viewBox='0 0 8 12' fill='none'>
          <path d='M7 1L2 6L7 11' stroke='white' strokeWidth={2} strokeLinecap='round' />
        </svg>
      </div>
    </div>
  );
};

const NextArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props as {
    className: string;
    style: React.CSSProperties;
    onClick: React.MouseEventHandler<HTMLDivElement>;
  };

  return (
    <div className={className} style={{ ...style, display: 'block', right: '10px' }} onClick={onClick}>
      <div className='slider-icon-next'>
        <svg xmlns='http://www.w3.org/2000/svg' width={8} height={12} viewBox='0 0 8 12' fill='none'>
          <path d='M1 11L6 6L1 1' stroke='white' strokeWidth={2} strokeLinecap='round' />
        </svg>
      </div>
    </div>
  );
};

const SlidingBanner: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <Slider {...settings}>
      <div className='slider-img'>
        <img
          src='https://www.legitreviews.com/wp-content/uploads/2017/01/msi-game_unlimited_meet_the_all_new_desktop_family-frontpage_banner-1920....jpg'
          alt=''
        />
      </div>
      <div className='slider-img'>
        <img src='https://www.quadra.id/wp-content/uploads/2019/03/msi-brand-landing-banner.jpg' alt='' />
      </div>
      <div className='slider-img'>
        <img src='https://storage-asset.msi.com/event/2023/MY/PBM/images/2023-3-banner.jpg' alt='' />
      </div>
      <div className='slider-img'>
        <img src='https://www.computerlounge.co.nz/Data/Media/Images/Brand/MSI/MSI-brand-banner.jpg' alt='' />
      </div>
      <div className='slider-img'>
        <img
          src='https://product.hstatic.net/1000037809/product/msi-a__content-geforce_rtx_4080_16gb_gaming_x_trio-banner-1940x600_eb79e2ccab1643238d74be2454f533df_master.jpg'
          alt=''
        />
      </div>
      <div className='slider-img'>
        <img src='https://www.evetech.co.za/repository/ProductImages/MSI-Website-Product-Banner-1586px.jpg' alt='' />
      </div>
    </Slider>
  );
};

export default SlidingBanner;
