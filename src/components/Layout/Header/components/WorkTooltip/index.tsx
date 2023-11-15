import React from 'react';
import './WorkTooltip.scss';

const WorkTooltip: React.FC = () => {
  return (
    <div className='shop-info'>
      <div className='shop-info__hours'>
        <div className='shop-info__icon-container'>
          <svg
            className='bx-bx-time'
            width={35}
            height={35}
            viewBox='0 0 35 35'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.5 28.85C11.2429 28.85 6.15 23.7571 6.15 17.5C6.15 11.2429 11.2429 6.15 17.5 6.15C23.7571 6.15 28.85 11.2429 28.85 17.5C28.85 23.7571 23.7571 28.85 17.5 28.85Z'
              stroke='#0156FF'
              strokeWidth='2.3'
            />
            <path d='M17.5 12.25V18.375H23.625' stroke='#0156FF' strokeWidth='2.3' strokeLinecap='round' />
          </svg>
        </div>
        <div className='shop-info__text'>
          <span className='shop-info__text-title'>We are open:</span>
          <p className='shop-info__days'>
            Mon-Thu: <span className='shop-info__time'>9:00 AM - 5:30 PM</span>
          </p>
          <p className='shop-info__days'>
            Fr: <span className='shop-info__time'>9:00 AM - 6:00 PM</span>
          </p>
          <p className='shop-info__days'>
            Sat: <span className='shop-info__time'>11:00 AM - 5:00 PM</span>
          </p>
        </div>
      </div>
      <div className='shop-info__location'>
        <div className='shop-info__icon-container'>
          <svg
            className='bx-bx-time'
            width={35}
            height={35}
            viewBox='0 0 35 35'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17 17C15.625 17 14.5 15.92 14.5 14.6C14.5 13.28 15.625 12.2 17 12.2C18.375 12.2 19.5 13.28 19.5 14.6C19.5 15.92 18.375 17 17 17ZM24.5 14.84C24.5 10.484 21.1875 7.4 17 7.4C12.8125 7.4 9.5 10.484 9.5 14.84C9.5 17.648 11.9375 21.368 17 25.808C22.0625 21.368 24.5 17.648 24.5 14.84ZM17 5C22.25 5 27 8.864 27 14.84C27 18.824 23.6625 23.54 17 29C10.3375 23.54 7 18.824 7 14.84C7 8.864 11.75 5 17 5Z'
              fill='#0156FF'
            />
          </svg>
        </div>
        <span className='shop-info__text'>1234 Street Address, City Address, 1234</span>
      </div>
      <div className='shop-info__contact'>
        <div className='shop-info__text'>
          <p>
            Phones: <span>(00) 1234 5678</span>
          </p>
          <p>
            E-mail: <span>shop@email.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkTooltip;
