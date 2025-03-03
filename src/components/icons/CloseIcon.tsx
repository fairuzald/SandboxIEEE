interface CloseIconProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const CloseIcon: React.FC<CloseIconProps> = ({ onClick }) => {
  return (
    <div className='relative cursor-pointer' onClick={onClick}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='white'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute top-0 right-0 w-4 h-4 md:w-6 md:h-6 z-[2]'
      >
        <path
          d='M3.27295 0.000306869C2.99382 0.000306869 2.71439 0.106634 2.50166 0.319901L0.319901 2.50166C-0.106634 2.9282 -0.106634 3.61879 0.319901 4.04424L8.27566 12L0.319901 19.9558C-0.106634 20.3823 -0.106634 21.0729 0.319901 21.4983L2.50166 23.6801C2.9282 24.1066 3.61879 24.1066 4.04424 23.6801L12 15.7243L19.9558 23.6801C20.3812 24.1066 21.0729 24.1066 21.4983 23.6801L23.6801 21.4983C24.1066 21.0718 24.1066 20.3812 23.6801 19.9558L15.7243 12L23.6801 4.04424C24.1066 3.61879 24.1066 2.92711 23.6801 2.50166L21.4983 0.319901C21.0718 -0.106634 20.3812 -0.106634 19.9558 0.319901L12 8.27566L4.04424 0.319901C3.83097 0.106634 3.55208 0.000306869 3.27295 0.000306869Z'
          fill='white'
        />
      </svg>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='#745735'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute top-0 right-0 blur w-4 h-4 md:w-6 md:h-6'
      >
        <path
          d='M3.27295 0.000306869C2.99382 0.000306869 2.71439 0.106634 2.50166 0.319901L0.319901 2.50166C-0.106634 2.9282 -0.106634 3.61879 0.319901 4.04424L8.27566 12L0.319901 19.9558C-0.106634 20.3823 -0.106634 21.0729 0.319901 21.4983L2.50166 23.6801C2.9282 24.1066 3.61879 24.1066 4.04424 23.6801L12 15.7243L19.9558 23.6801C20.3812 24.1066 21.0729 24.1066 21.4983 23.6801L23.6801 21.4983C24.1066 21.0718 24.1066 20.3812 23.6801 19.9558L15.7243 12L23.6801 4.04424C24.1066 3.61879 24.1066 2.92711 23.6801 2.50166L21.4983 0.319901C21.0718 -0.106634 20.3812 -0.106634 19.9558 0.319901L12 8.27566L4.04424 0.319901C3.83097 0.106634 3.55208 0.000306869 3.27295 0.000306869Z'
          fill='white'
        />
      </svg>
    </div>
  );
};

export default CloseIcon;
