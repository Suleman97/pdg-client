import { Typography, Row, Col } from 'antd';
import './Features.styles.scss';
import {
  Free,
  Star,
  Clean,
  Secuirty,
  InfinityIcon,
  Swipe,
  Support,
  Heart,
} from 'icons';

const features1 = [
  {
    icon: <Star />,
    description: 'Quality of members',
  },
  {
    icon: <Support />,
    description: 'Great customer service',
  },
  {
    icon: <Clean />,
    description: 'Simple, modern interface',
  },
  {
    icon: <InfinityIcon />,
    description: 'Limitless options for what people are seeking',
  },
];

const features2 = [
  {
    icon: <Free />,
    description: 'Robust free version',
  },
  {
    icon: <Secuirty />,
    description: 'Great customer service',
  },
  {
    icon: <Swipe />,
    description: 'Addictive swiping feature',
  },
  {
    icon: <Heart />,
    description: 'Fun & inclusive interface',
  },
];

export const Features = () => (
  <div className="feature-section">
    <Row align="middle" justify="center">
      <Typography.Title level={1} className="feature-section__title">
        What makes us stand out?
      </Typography.Title>
    </Row>
    <Row align="middle" className="feature-section__features" gutter={140}>
      <Col span={12}>
        {features1.map((feature) => (
          <div
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              marginBottom: '5rem',
            }}
          >
            {feature.icon}
            <Typography className="feature-section__description">
              {feature.description}
            </Typography>
          </div>
        ))}
      </Col>
      <Col span={12}>
        {features2.map((feature) => (
          <div
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              marginBottom: '5rem',
            }}
          >
            {feature.icon}
            <Typography className="feature-section__description">
              {feature.description}
            </Typography>
          </div>
        ))}
      </Col>
    </Row>
  </div>
);
