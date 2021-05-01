import './Membership.styles.scss';

import { Row, Col, Typography } from 'antd';

import { HeartMember, LadyBug, Diamond } from 'icons';

const { Title, Paragraph } = Typography;

const Contents = [
  {
    title: 'Advanced Preveliged Settings',
    description: [
      'Hide "Online" Status',
      'Hide date joind',
      'Hide last login country',
      'Hide premium status',
      'Hide net worth',
      '(Successful & weathly only)',
    ],
  },
  {
    title: 'Inbox Filters',
    description: 'Clock messages of specific users',
  },
  {
    title: 'Save Member Notes',
    description: 'Create notes for some members',
  },
  {
    title: 'Edit messages',
    description: 'Edit messages after it sent',
  },
  {
    title: 'Search by Username',
    description: 'Easily search for other users by their username',
  },
];

const Content2 = [
  {
    title: ['ALL PREMIUM FEATURES', ' PLUS:'],
  },
  {
    title: 'Verified Badge',
    description: 'Recieve a Diamon badge upon successful verification bt admin',
  },
  {
    title: '95% More Messages',
    description: 'Get 95% more messages than the avarage user',
  },
  {
    title: 'Revese Accidental Swipes',
    description: 'Go back and view previous profiles',
  },
  {
    title: 'Smart Blocking',
    description: [
      'Connect witj facebook and',
      'Linkedin to block other users',
      'from your network',
      '(Successful & weathly only)',
    ],
  },
  {
    title: 'View Number of Blocks',
    description: [
      'See the number of times another',
      'profile has been blocked',
    ],
  },
];

const PreviegedContent = [
  {
    title: ['ALL DIAMOND & PREMIUM FEATUESS', ' PLUS:'],
  },
  {
    title: 'Presonalized Matchmaker',
    description: [
      'Admin will provide a',
      'personalized matchmaker ',
      'done outside the app',
    ],
  },
  {
    title: 'Unlimited Boosters',
    description: [
      'User profile visibilty will be',
      'increased to improve your ',
      'chances of getting matched',
    ],
  },
  {
    title: '24/7 Customer Support',
    description: ['Get your Questions ansewered', 'anytime '],
  },
  {
    description: ['*available to successful & wealthy members', 'only'],
  },
];

const Membership = () => (
  <div className="membership-content">
    <Title level={1} className="membership-content__title">
      Membership
    </Title>
    <Paragraph className="membership-content__description">
      Users can apply for our Successful & Wealthy or Attractive & Charming
      memberships.
    </Paragraph>
    <Row gutter={100}>
      <Col>
        <div className="membership-content__icon">
          <HeartMember />
        </div>
        <div className="membership-content__premium-title">PREMIUM</div>
        <div className="membership-content__diamond-premium-description">
          {Contents.map((content) => (
            <div className="membership-content__diamond-premium-description-box">
              <div className="membership-content__diamond-premium-description-box-title">
                {content.title}
              </div>
              <div className="membership-content__diamond-premium-description-box-desc">
                {Array.isArray(content.description)
                  ? content.description.map((desc) => (
                      <>
                        {desc}
                        <br />
                      </>
                    ))
                  : content.description}
              </div>
            </div>
          ))}
        </div>
      </Col>
      <Col>
        <div className="membership-content__icon">
          <LadyBug />
        </div>
        <div className="membership-content__previleged--title">PREVILEGED</div>
        <div className="membership-content__previleged-description">
          {PreviegedContent.map((content) => (
            <div className="membership-content__previleged-description-box">
              <div className="membership-content__previleged-description-box-title">
                {Array.isArray(content.title)
                  ? content.title.map((titl) => (
                      <>
                        {titl}
                        <br />
                      </>
                    ))
                  : content.title}
              </div>
              <div className="membership-content__previleged-description-box-desc">
                {Array.isArray(content.description)
                  ? content.description.map((desc) => (
                      <>
                        {desc}
                        <br />
                      </>
                    ))
                  : content.description}
              </div>
            </div>
          ))}
        </div>
      </Col>
      <Col>
        <div className="membership-content__icon">
          <Diamond />
        </div>
        <div className="membership-content__diamond-title">DIAMOND</div>
        <div className="membership-content__diamond-premium-description diamond-bg">
          {Content2.map((content) => (
            <div className="membership-content__diamond-premium-description-box">
              <div className="membership-content__diamond-premium-description-box-title">
                {Array.isArray(content.title)
                  ? content.title.map((titl) => (
                      <>
                        {titl}
                        <br />
                      </>
                    ))
                  : content.title}
              </div>
              <div className="membership-content__diamond-premium-description-box-desc">
                {Array.isArray(content.description)
                  ? content.description.map((desc) => (
                      <>
                        {desc}
                        <br />
                      </>
                    ))
                  : content.description}
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  </div>
);

export default Membership;
