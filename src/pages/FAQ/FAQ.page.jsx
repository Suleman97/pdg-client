import { Row, Typography, Col } from 'antd';
import { BsPlus } from 'react-icons/bs';
import './FAQ.styles.scss';

const FAQ = () => (
  <div className="faq-content">
    <Typography.Title className="faq-content__title">FAQs</Typography.Title>
    <Typography.Paragraph className="faq-content__description">
      How can we help?
    </Typography.Paragraph>
    <Row justify="space-between">
      <div className="faq-content__box">
        <Col span={12}>
          <Typography.Paragraph className="faq-content__box-content">
            Frequently Asked Questions?
          </Typography.Paragraph>
        </Col>
        <Col span={12}>
          <div className="toggle">
            <BsPlus />
          </div>
        </Col>
      </div>
    </Row>
  </div>
);

export default FAQ;
