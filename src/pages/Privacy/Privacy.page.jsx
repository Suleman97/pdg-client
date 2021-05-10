import { Typography } from 'antd';

import './Privacy.styles.scss';

const Privacy = () => (
  <div className="privacy-content">
    <Typography.Title className="privacy-content__title">
      Privacy Policy
    </Typography.Title>
    <Typography.Paragraph className="privacy-content__description">
      Welcome to the Privileged Privacy Policy (Policy)! This explains how we
      collect, store, protect, and share your information, and with whom we
      share it. We suggest you read this in conjunction with our brilliant Terms
      and Conditions of Use. Whilst you are enjoying the Privileged mobile
      application (App), we collect some information about you. In addition, you
      may choose to use the App to share information with other members,
      including your friends and contacts (Users). We may also need to share
      your information sometimes. Privileged is a global app, and your
      information will be sent to and used in the United States regardless of
      the country you reside in. This Policy explains how we protect your
      personal data when we transfer it overseas, so please read very
      carefully.If you have any questions or comments about this Policy, please
      feel free to contact us at support@privilegedapp.com1.
    </Typography.Paragraph>
  </div>
);

export default Privacy;
