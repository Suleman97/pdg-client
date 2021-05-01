import { Typography, Row, Col } from 'antd';
import clsx from 'clsx';
import propTypes from 'prop-types';
import './Hero.styles.scss';

export const Hero = ({
  title,
  description,
  button1,
  button2,
  isLeftToRight,
}) => (
  <div className={clsx('hero-section', isLeftToRight && 'hero-section__ltr')}>
    <div className="hero-section__box">
      <Typography.Title level={1} className="hero-section__title">
        {/* <img src={img} alt="" /> */}
        {title}
      </Typography.Title>
      <Typography className="hero-section__description">
        {/* Don’t just be lucky.{' '}
        <span className="hero-section__description-bold">Be Privileged.</span>{' '}
        Try the Privileged app today to find the one! */}
        {description}
      </Typography>
      <Row justify="space-between" align="middle" gutter={10}>
        <Col>{button1}</Col>
        <Col>{button2}</Col>
      </Row>
    </div>
  </div>
);

Hero.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  button1: propTypes.element,
  button2: propTypes.element,
  isLeftToRight: propTypes.bool,
};
