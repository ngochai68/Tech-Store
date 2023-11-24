import { CustomArrowProps } from 'react-slick';

export const PrevArrow: React.FC<CustomArrowProps> = (props) => {
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

export const NextArrow: React.FC<CustomArrowProps> = (props) => {
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
