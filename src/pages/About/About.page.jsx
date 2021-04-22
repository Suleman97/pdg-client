import { Row, Col, Typography } from 'antd';
import pic from './about.png';
import './About.styles.scss';

const About = () => (
  <div className="about-content">
    <Row justify="space-between">
      <Col span={12}>
        <img src={pic} alt="about" className="img" />
      </Col>
      <Col span={12}>
        <Typography.Title className="about-content__title">
          About
        </Typography.Title>
        <Typography className="about-content__description">
          Privileged was founded on the honest concept that people have specific
          desires both altruistic and superficial. We are a premium relationship
          service for users who have specific desires and are looking for the
          finest experience that is tailored to their individual needs.
          Relationships and connections are at the heart of our business. We
          strive to be essential to our users by delivering an expectational
          experience and service. We trust and respect one another for who we
          are and what we bring to the Privileged platform. We all have biases.
          However, we do not tolerate bias that excludes or minimizes anyone –
          all people belong and their unique desires.{' '}
        </Typography>
        <Typography className="about-content__description">
          We’re committed to ensuring that we have a welcoming and inclusive
          culture where everyone’s voice matters and where people of all races,
          ethnicities, genders, gender identities, sexual orientations, ages,
          religions, disabilities and viewpoints can thrive and connect. At
          Privileged we do not disguise what people are truly looking for, we
          are effective because we allow our users to seek and identify their
          truest intentions in a partner.
        </Typography>
      </Col>
    </Row>
  </div>
);

export default About;
