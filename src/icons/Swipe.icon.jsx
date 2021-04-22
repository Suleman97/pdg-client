import Icon from '@ant-design/icons';

const SwipeSVG = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.8334 16.6667H40.0001L39.4184 8.33337H25.8334C23.5317 8.33337 21.6667 10.1984 21.6667 12.5C21.6667 14.8017 23.5317 16.6667 25.8334 16.6667Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M18.9329 52.1249C18.9345 52.1132 18.9395 52.1049 18.9412 52.0932L18.9379 52.0916L18.9329 52.1249Z"
      fill="url(#paint1_linear)"
    />
    <path
      d="M64.5633 34.8367L43.3333 31.6667V12.7383C43.3333 10.5583 41.765 8.57332 39.5967 8.35499C37.1017 8.10499 35 10.0567 35 12.5C35 12.895 35 68.28 35 68.28C37.435 70.4467 40.5783 71.6667 43.8567 71.6667H61.6667C67.19 71.6667 71.6667 67.19 71.6667 61.6667V43.0783C71.6667 38.9517 68.6467 35.4467 64.5633 34.8367Z"
      fill="url(#paint2_linear)"
    />
    <path
      d="M43.3333 31.6666V41.6666L47.6833 32.3166L43.3333 31.6666Z"
      fill="url(#paint3_linear)"
    />
    <path
      d="M39.1667 15C40.5475 15 41.6667 13.8807 41.6667 12.5C41.6667 11.1193 40.5475 10 39.1667 10C37.786 10 36.6667 11.1193 36.6667 12.5C36.6667 13.8807 37.786 15 39.1667 15Z"
      fill="#FFF0C9"
    />
    <path
      d="M18.3718 40C15.5052 40 14.2085 41.78 14.2085 44.1533L34.3502 67.7017C34.5568 67.9083 34.7818 68.095 34.9985 68.2883V43.78C31.2102 50.2467 28.4335 44.4583 25.5485 45.13C25.5502 45.13 24.3502 40 18.3718 40Z"
      fill="url(#paint4_linear)"
    />
    <path
      d="M13.0619 9.89568C13.0619 9.89568 14.2233 8.47039 15.7422 8.46945C17.2611 8.46851 18.5552 9.76083 18.6317 11.3169C18.6787 12.2814 17.8077 13.2165 17.8077 13.2165L13.8972 17.4876C13.6541 17.7533 13.2385 17.7534 12.9692 17.4882L8.64155 13.2227C8.64155 13.2227 7.67885 12.2881 7.63166 11.3242C7.5556 9.7679 8.72374 8.47431 10.2424 8.47299C11.7611 8.47166 13.0619 9.89568 13.0619 9.89568Z"
      fill="url(#paint5_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="21.6667"
        y1="12.5"
        x2="40.0001"
        y2="12.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F31B5A" />
        <stop offset="1" stopColor="#F04224" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="18.8954"
        y1="52.0769"
        x2="18.8987"
        y2="52.0775"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC430" />
        <stop offset="0.57" stopColor="#F8BD29" />
        <stop offset="1" stopColor="#F0B421" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="37.76"
        y1="37.8267"
        x2="79.4833"
        y2="81.1533"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC430" />
        <stop offset="0.41" stopColor="#FEC130" />
        <stop offset="0.72" stopColor="#FCB730" />
        <stop offset="0.998" stopColor="#F7A72F" />
        <stop offset="1" stopColor="#F7A72F" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="44.8533"
        y1="36.635"
        x2="41.9383"
        y2="35.0483"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.282" stopColor="#FFC430" />
        <stop offset="0.401" stopColor="#F8BD2D" />
        <stop offset="0.574" stopColor="#E5AA23" />
        <stop offset="0.78" stopColor="#C58A14" />
        <stop offset="1" stopColor="#9C6000" />
      </linearGradient>
      <linearGradient
        id="paint4_linear"
        x1="23.9818"
        y1="55.8433"
        x2="38.0602"
        y2="41.96"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.282" stopColor="#FFC430" />
        <stop offset="0.401" stopColor="#F8BD2D" />
        <stop offset="0.574" stopColor="#E5AA23" />
        <stop offset="0.78" stopColor="#C58A14" />
        <stop offset="1" stopColor="#9C6000" />
      </linearGradient>
      <linearGradient
        id="paint5_linear"
        x1="9.27455"
        y1="14.4818"
        x2="17.8067"
        y2="9.26616"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F31B5A" />
        <stop offset="1" stopColor="#F04224" />
      </linearGradient>
    </defs>
  </svg>
);

export const Swipe = () => <Icon component={SwipeSVG} />;
