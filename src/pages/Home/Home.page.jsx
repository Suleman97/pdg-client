import { Button } from 'components';
import { Hero, Detail, Features } from './Sections';
import './Home.styles.scss';
import d1 from './detail1.png';
import d2 from './detail2.png';
import h1 from './Hero.png';
import h2 from './Hero2.png';

const details = [
  {
    img: d1,
    title: 'You don’t have to settle',
    description:
      'Relationships and connections are at the heart of our business. We strive to be essential to our users by delivering an expectational experience and service. We trust and respect one another for who we are and what we bring to the Privileged platform.',
    button: (
      <Button isSecondary isLight className="detail-section__button">
        Learn More
      </Button>
    ),
  },
  {
    img: d2,
    title: 'Become a member',
    description:
      'Whether you’re looking for someone successful, wealthy, attractive, or charming,  the app offers three levels of membership (Priemium, Diamond, and Privileged) to help you get closer to finding your match.',
    buttonText: 'Learn More',
    isLight: true,
    isRightToLeft: true,
    button: (
      <Button isSecondary className="detail-section__button">
        Learn More
      </Button>
    ),
  },
];

const heroProps = {
  title: 'Priviliged',
  description:
    'Don’t just be lucky. Be Privileged. Try the Privileged app today to find the one!',
  button1: <Button>Enter phone number</Button>,
  button2: <Button isSecondary>Text me the app</Button>,
};

const Home = () => (
  <div className="home">
    {/* <Hero /> */}
    <Hero {...heroProps} />
    {details.map((detail) => (
      <Detail {...detail} />
    ))}
    <Features />
    <Hero {...heroProps} isLeftToRight />
  </div>
);

export default Home;
