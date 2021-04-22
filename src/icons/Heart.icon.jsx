import Icon from '@ant-design/icons';

const HeartSVG = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M66.6673 29.9833C66.6673 33.2166 64.8339 36.3833 63.3006 38.4666C63.0839 38.7499 62.8839 39.0333 62.6839 39.2833C62.6673 39.3166 62.6339 39.3333 62.6173 39.3666C62.3839 39.6499 62.1839 39.8999 62.0006 40.0999C61.6673 40.4833 61.4173 40.7499 61.3006 40.8666C61.2506 40.9166 61.2339 40.9333 61.2339 40.9333L60.7006 41.4833C60.6672 41.5166 60.6339 41.5333 60.6173 41.5499C60.5672 41.5999 60.5506 41.6166 60.5506 41.6166L44.7673 57.5499L43.4173 58.9166L42.7173 59.6166L36.8673 65.5166C35.3673 67.0499 32.9006 67.0499 31.3839 65.5166L7.01725 40.9333C7.01725 40.9333 1.60059 35.5499 1.60059 29.9833C1.60059 21.0333 8.86725 13.5833 17.8673 13.5833C26.8506 13.5833 34.1339 21.7833 34.1339 21.7833C34.1339 21.7833 41.4006 13.5833 50.4006 13.5833C59.3839 13.5833 66.6673 21.0333 66.6673 29.9833Z"
      fill="url(#paint0_linear)"
    />
    <path
      opacity="0.07"
      d="M55.4167 30.7834C50.0167 27.6667 43.0667 29.5667 39.9167 35C37.9834 38.3667 39.2834 43.2834 39.35 43.4834L43.4167 58.9167L44.7667 57.55L40.95 43.05C40.9334 43 39.7834 38.5834 41.3667 35.8334C43.1667 32.7 46.45 30.95 49.8167 30.95C51.4334 30.95 53.0834 31.3667 54.5834 32.2334C59.2 34.9 60.5834 41.4167 60.6 41.4834L60.6167 41.55C60.6334 41.5334 60.6667 41.5167 60.7 41.4834L61.2334 40.9334C61.2334 40.9334 61.25 40.9167 61.3 40.8667C61.4167 40.75 61.6667 40.4834 62 40.1C61.25 37.7667 59.2834 33.0167 55.4167 30.7834Z"
      fill="white"
    />
    <path
      opacity="0.05"
      d="M55.8327 30.0667C53.9994 29.0167 51.9161 28.4501 49.8161 28.4501C45.4494 28.4501 41.3827 30.8001 39.1994 34.5834C37.1327 38.1667 38.3827 43.1334 38.5327 43.7001L42.7161 59.6167L43.4161 58.9167L44.7661 57.5501L60.5494 41.6167C60.5494 41.6167 60.5661 41.6001 60.6161 41.5501C60.6327 41.5334 60.6661 41.5167 60.6994 41.4834L61.2327 40.9334C61.2327 40.9334 61.2494 40.9167 61.2994 40.8667C61.4161 40.7501 61.6661 40.4834 61.9994 40.1001C62.1827 39.9001 62.3827 39.6501 62.6161 39.3667C61.7494 36.8334 59.6661 32.2834 55.8327 30.0667Z"
      fill="white"
    />
    <path
      d="M61.4246 41.3182C61.4246 41.3182 68.1246 39.0882 73.1329 41.9799C78.1413 44.8715 79.8029 51.3665 76.9196 56.3632C75.1313 59.4599 70.3763 60.7149 70.3763 60.7149L48.8813 66.5782C47.5446 66.9432 46.1746 66.1515 45.8213 64.8115L40.1513 43.2665C40.1513 43.2665 38.8613 38.5182 40.6479 35.4232C43.5329 30.4265 49.9896 28.6199 54.9979 31.5099C60.0063 34.3999 61.4246 41.3182 61.4246 41.3182Z"
      fill="#FF5252"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="55.2619"
        y1="66.6666"
        x2="36.2495"
        y2="7.86047"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#98002C" />
        <stop offset="0.520252" stopColor="#FF4747" />
        <stop offset="1" stopColor="#FF004A" />
      </linearGradient>
    </defs>
  </svg>
);

export const Heart = () => <Icon component={HeartSVG} />;
