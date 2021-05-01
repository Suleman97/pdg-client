import { Row, Col, Typography } from 'antd';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './Detail.styles.scss';

export const Detail = ({
  title,
  description,
  isLight,
  isRightToLeft,
  img,
  button,
}) => (
  <div
    className={clsx(
      'detail-section',
      isLight && 'detail-section__light',
      isRightToLeft && 'detail-section__rtl'
    )}
  >
    <Row align="middle" justify="space-between" gutter={85}>
      <Col span={12}>
        <img src={img} alt="" />
      </Col>
      <Col span={12}>
        <div className="detail-section__text-box">
          <Typography.Title level={1} className="detail-section__title">
            {title}
          </Typography.Title>
          <Typography className="detail-section__description">
            {description}
          </Typography>
          {button}
        </div>
      </Col>
    </Row>
  </div>
);

Detail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isLight: PropTypes.bool,
  isRightToLeft: PropTypes.bool,
  img: PropTypes.string,
  button: PropTypes.element,
};
