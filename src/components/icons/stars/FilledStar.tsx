const FilledStar = ({ size }: { size: number }) => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ scale: size / 25 }}
    >
      <path
        d='M0.950274 1.1446C0.886719 0.985293 0.873754 0.810283 0.913142 0.643352C0.95253 0.476421 1.04236 0.325666 1.17042 0.211573C1.29849 0.0974808 1.45857 0.0255852 1.62893 0.00565712C1.79928 -0.014271 1.97164 0.0187341 2.12258 0.100189L4.16977 1.19785C5.77455 2.05904 7.54796 2.55956 9.36619 2.66447C11.1844 2.76937 13.0036 2.47612 14.6968 1.80521L16.8554 0.951384C17.0147 0.887829 17.1897 0.874865 17.3566 0.914253C17.5236 0.953641 17.6743 1.04347 17.7884 1.17153C17.9025 1.2996 17.9744 1.45968 17.9943 1.63004C18.0143 1.80039 17.9813 1.97275 17.8998 2.12369L16.8034 4.16977C15.9422 5.77454 15.4417 7.54796 15.3368 9.36619C15.2319 11.1844 15.5251 13.0036 16.196 14.6968L17.0499 16.8554C17.1134 17.0147 17.1264 17.1897 17.087 17.3566C17.0476 17.5236 16.9578 17.6743 16.8297 17.7884C16.7016 17.9025 16.5416 17.9744 16.3712 17.9943C16.2009 18.0143 16.0285 17.9813 15.8776 17.8998L13.8315 16.8034C12.2267 15.9422 10.4533 15.4417 8.63506 15.3368C6.81683 15.2319 4.99762 15.5251 3.30445 16.196L1.1446 17.051C0.985294 17.1145 0.810283 17.1275 0.643352 17.0881C0.476421 17.0487 0.325666 16.9589 0.211573 16.8308C0.0974807 16.7028 0.0255851 16.5427 0.00565701 16.3723C-0.0142711 16.202 0.0187351 16.0296 0.10019 15.8787L1.19785 13.8315C2.05904 12.2267 2.55956 10.4533 2.66447 8.63506C2.76937 6.81683 2.47613 4.99762 1.80521 3.30445L0.950274 1.1446Z'
        fill='url(#paint0_linear_185_3138)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_185_3138'
          x1='10.6096'
          y1='19.6757'
          x2='19.8645'
          y2='5.76916'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#AB814E' />
          <stop offset='1' stopColor='#FFE1B9' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FilledStar;
