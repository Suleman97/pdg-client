import Icon from '@ant-design/icons';

const DiamondSVG = () => (
  <svg
    width="78"
    height="78"
    viewBox="0 0 78 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <g filter="url(#filter0_d)">
        <path
          d="M68.0028 29.2954L57.0497 17.6294C56.5312 17.1109 55.8831 16.7869 55.1702 16.7869H22.6351C21.9222 16.7869 21.2092 17.1109 20.7556 17.6294L9.80249 29.2954C8.83033 30.3324 8.89516 31.8879 9.86733 32.9249L37.0879 60.1455C37.6064 60.664 38.2545 60.9232 38.9026 60.9232C39.6156 60.9232 40.2637 60.664 40.7174 60.1455L67.938 32.9249C68.9749 31.9527 68.975 30.3324 68.0028 29.2954ZM26.8478 33.0545L31.6438 47.0537L17.6446 33.0545H26.8478ZM41.1062 22.0366L45.2541 28.5177H32.4863L36.6343 22.0366H41.1062ZM38.9026 54.6366V54.507L31.6438 33.0545H46.1615L38.9026 54.507V54.6366ZM50.9575 33.0545H60.2255L46.2263 47.0537L50.9575 33.0545ZM60.4199 28.5177H50.5686L46.4207 22.0366H54.0036L60.4199 28.5177ZM23.7369 22.0366H31.3198L27.1719 28.5177H17.3206L23.7369 22.0366Z"
          fill="#00B2EB"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="-0.89502"
        y="10.7869"
        width="79.619"
        height="64.1363"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <clipPath id="clip0">
        <rect width="77.7732" height="77.7732" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const Diamond = () => <Icon component={DiamondSVG} />;
