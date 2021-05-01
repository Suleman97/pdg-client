import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Logo } from 'icons';
import { Links } from './Links.component';
import './Header.styles.scss';

export const Header = () => (
  <header className="header">
    <Row justify="space-between" align="middle">
      <Col>
        <Link to="/">
          <Logo />
        </Link>
      </Col>
      <Col>
        <Links />
      </Col>
    </Row>
  </header>
);
