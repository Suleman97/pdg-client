import Icon from '@ant-design/icons';

const InfinitySVG = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60 60C51.2283 60 45.1433 54.085 40 47.5583C34.8567 54.085 28.7717 60 20 60C9.72 60 0 50.28 0 40C0 29.72 9.72 20 20 20C28.7717 20 34.8567 25.915 40 32.4417C45.1433 25.915 51.2283 20 60 20C70.28 20 80 29.72 80 40C80 50.28 70.28 60 60 60ZM45.655 40C50.0917 45.9067 54.4867 50.9083 60 50.9083C65.7733 50.9083 70.9083 44.8083 70.9083 40C70.9083 35.1917 65.7733 29.0917 60 29.0917C54.4867 29.0917 50.0933 34.0933 45.655 40ZM20 29.0917C14.2267 29.0917 9.09167 35.1917 9.09167 40C9.09167 44.8083 14.2267 50.9083 20 50.9083C25.5133 50.9083 29.9067 45.9067 34.345 40C29.9067 34.0933 25.5133 29.0917 20 29.0917Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M60 50.9083C46.655 50.9083 40 20 20 20C20 22.9633 20 26.0217 20 29.0917C33.5983 29.0917 40 60 60 60C60.1333 60 60.265 59.98 60.3983 59.9767C60.1817 56.9533 60.08 53.93 60.0367 50.905C60.025 50.9067 60.0133 50.9083 60 50.9083Z"
      fill="url(#paint1_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="-5.96046e-07"
        y1="40"
        x2="80"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF0404" />
        <stop offset="1" stopColor="#AE0049" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="53.317"
        y1="60"
        x2="36.6745"
        y2="17.5861"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#98002C" />
        <stop offset="0.520252" stopColor="#FF4747" />
        <stop offset="1" stopColor="#FF004A" />
      </linearGradient>
    </defs>
  </svg>
);

// export const Infinity = () => <Icon component={InfinitySVG} />;
export const InfinityIcon = () => <Icon component={InfinitySVG} />;
