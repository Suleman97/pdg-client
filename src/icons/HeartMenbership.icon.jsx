import Icon from '@ant-design/icons';

const HeartMemberSVG = () => (
  <svg
    width="82"
    height="82"
    viewBox="0 0 82 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <path
        d="M38.3263 25.2142L40.5215 28.5634L43.1188 25.5153C45.33 22.9203 47.6283 21.5187 50.3427 20.9561C57.9071 19.4188 65.4318 27.2067 63.4767 35.9048L63.4765 35.9059C62.2049 41.5731 58.8199 45.7859 54.5273 49.7758L54.5249 49.778C51.1754 52.898 47.6137 55.7214 43.9472 58.6279C42.9756 59.3981 41.9967 60.1741 41.0124 60.963C33.7816 55.8911 27.135 50.4649 21.9382 43.4335C18.7314 39.0626 17.3683 34.567 18.763 29.5935C21.3125 20.5392 31.6967 18 37.8438 24.4335L37.8569 24.4471C37.8609 24.4536 37.8654 24.4608 37.8704 24.4688C37.9008 24.5181 37.9265 24.5616 37.9653 24.6272C37.9853 24.661 38.0087 24.7005 38.0379 24.7498C38.1129 24.8757 38.2103 25.0372 38.3263 25.2142Z"
        stroke="#FEDD9E"
        strokeWidth="6"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="5.21655"
        y="11.7526"
        width="71.567"
        height="66.4949"
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
    </defs>
  </svg>
);

export const HeartMember = () => <Icon component={HeartMemberSVG} />;
