const RightArrow = ({ arrowColor }: { arrowColor: string }) => {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M24.5834 12.5001C24.5834 5.83008 19.1701 0.416748 12.5001 0.416748C5.83008 0.416748 0.416748 5.83008 0.416748 12.5001C0.416748 19.1701 5.83008 24.5834 12.5001 24.5834C19.1701 24.5834 24.5834 19.1701 24.5834 12.5001ZM2.83341 12.5001C2.83341 7.15925 7.15925 2.83341 12.5001 2.83341C17.8409 2.83341 22.1667 7.15925 22.1667 12.5001C22.1667 17.8409 17.8409 22.1667 12.5001 22.1667C7.15925 22.1667 2.83341 17.8409 2.83341 12.5001ZM17.3334 12.5001L12.5001 17.3334L10.7963 15.6297L12.7055 13.7084H7.66675V11.2917H12.7055L10.7842 9.3705L12.5001 7.66675L17.3334 12.5001Z'
        fill={arrowColor}
      />
    </svg>
  );
};

export default RightArrow;
