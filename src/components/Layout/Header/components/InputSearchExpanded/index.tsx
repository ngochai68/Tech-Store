import React from 'react';
import { Input } from 'antd';
import './InputSearchExpanded.scss';

type InputSearchExpandedProps = {
  onClose: () => void;
};

const InputSearchExpanded: React.FC<InputSearchExpandedProps> = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className='search-expanded'>
      <div className='search-expanded__container'>
        <Input className='search-expanded__input-search' placeholder='Search entiere store here...' />
        <div className='search-expanded__icon-search'>
          <svg
            className='gg-search__group'
            width={16}
            height={16}
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.95072 1.99141C0.792037 3.14838 0.118125 4.70363 0.0663107 6.34023C0.0144968 7.97682 0.588681 9.57159 1.67185 10.7995C2.75503 12.0275 4.26567 12.7962 5.89594 12.9491C7.49648 13.0991 9.09407 12.6444 10.3749 11.6766L13.7061 15.0085L13.7061 15.0085C13.789 15.0914 13.8873 15.1571 13.9955 15.2019C14.1038 15.2468 14.2198 15.2698 14.3369 15.2698C14.4541 15.2698 14.5701 15.2468 14.6783 15.2019C14.7866 15.1571 14.8849 15.0914 14.9678 15.0085C15.0506 14.9257 15.1163 14.8274 15.1611 14.7191C15.206 14.6109 15.229 14.4949 15.229 14.3777C15.229 14.2606 15.206 14.1446 15.1611 14.0363C15.1163 13.9281 15.0506 13.8298 14.9678 13.7469L14.9677 13.7469L11.636 10.416C12.6013 9.13496 13.0539 7.53846 12.903 5.93943C12.7493 4.31054 11.9808 2.80139 10.7539 1.719C9.52693 0.636623 7.93373 0.0623154 6.29838 0.11292C4.66303 0.163525 3.10838 0.835233 1.95072 1.99141ZM1.95072 1.99141L2.02138 2.06217L1.95072 1.99141ZM9.78874 3.25366C10.2263 3.68416 10.5743 4.19703 10.8127 4.76269C11.051 5.32835 11.175 5.93561 11.1775 6.54944C11.18 7.16327 11.061 7.77152 10.8272 8.3391C10.5935 8.90669 10.2497 9.42238 9.81563 9.85642C9.38158 10.2905 8.86589 10.6343 8.29831 10.868C7.73072 11.1018 7.12248 11.2208 6.50865 11.2183C5.89482 11.2158 5.28756 11.0918 4.7219 10.8535C4.15623 10.6151 3.64336 10.2671 3.21287 9.82954C2.35255 8.95509 1.87263 7.77613 1.87762 6.54944C1.88262 5.32275 2.37213 4.14773 3.23954 3.28033C4.10694 2.41292 5.28196 1.92341 6.50865 1.91841C7.73533 1.91342 8.9143 2.39335 9.78874 3.25366Z'
              fill='black'
              stroke='black'
              strokeWidth='0.2'
            />
          </svg>
        </div>
      </div>

      <div className='search-expanded__icon-close' onClick={handleClose}>
        <svg
          className='gg-search'
          width={19}
          height={19}
          viewBox='0 0 19 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M3.8457 3.84613L15.1535 15.1539' stroke='#0156FF' strokeWidth='2.4' strokeLinecap='round' />
          <path d='M15.1543 3.84613L3.84653 15.1539' stroke='#0156FF' strokeWidth='2.4' strokeLinecap='round' />
        </svg>
      </div>
    </div>
  );
};

export default InputSearchExpanded;
