import { Row, Typography } from 'antd';
import { Links } from 'components/Footer/Links.component';
import './Footer.styles.scss';

export const Footer = () => (
  <footer className="footer">
    <Row justify="center" align="middle">
      <Links />
    </Row>
    <Row justify="center" align="middle" className="footer__links">
      <Typography>
        <span>&#169;</span>2021 Privileged Dating.
      </Typography>
    </Row>
  </footer>
);
