import './Contact.styles.scss';
import { Col, Row, Typography, Form, Input } from 'antd';
import { Button } from 'components';

const Contact = () => (
  <div>
    <div className="contact-main">
      <Row align="center" justify="space-between">
        <Col span={12}>
          <div className="contact-main__contact-box">
            <Typography.Title className="contact-main__contact-box-title">
              Contact Us
            </Typography.Title>
            <Typography.Paragraph className="contact-main__contact-box-desc">
              Have any Questiuons? <br />
              <br />
              Please fill out out this form and someone from our team will get
              back to you as soon possible! For immediate assistance, check out
              our FAQ page for answers to our most frequently asked questions.
            </Typography.Paragraph>
          </div>
        </Col>
        <Col span={12}>
          <div className="contact-main__form-box">
            <Form className="contact-main__form-box-form">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                className="contact-main__form-box-form-input"
              />
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                className="contact-main__form-box-form-input"
              />
              <Input.TextArea
                placeholder="How can we help?"
                name="textarea"
                rows="4"
                className="contact-main__form-box-form-input"
              />
              <Button isSecondary className="detail-section__button">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Contact;
