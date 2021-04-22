import Icon from '@ant-design/icons';

const StarSVG = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M41.5221 8.64326L50.6522 29.1233L72.9488 31.4783C74.3838 31.6299 74.9605 33.4083 73.8888 34.3733L57.2338 49.3816L61.8855 71.3166C62.1855 72.7283 60.6721 73.8266 59.4221 73.1066L40.0005 61.9016L20.5788 73.1049C19.3288 73.8249 17.8172 72.7266 18.1155 71.3149L22.7672 49.3799L6.11215 34.3716C5.04048 33.4066 5.61882 31.6283 7.05215 31.4766L29.3488 29.1216L38.4788 8.64159C39.0655 7.32492 40.9355 7.32492 41.5221 8.64326Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="5.55908"
        y1="40.4941"
        x2="74.4423"
        y2="40.4941"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F31B5A" />
        <stop offset="1" stopColor="#F04224" />
      </linearGradient>
    </defs>
  </svg>
);

export const Star = () => <Icon component={StarSVG} />;
