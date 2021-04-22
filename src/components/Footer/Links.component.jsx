import { Divider } from 'antd';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import './Footer.styles.scss';

const links = [
  { path: '/about', title: 'About' },
  { path: '/faqs', title: 'FAQs' },
  { path: '/membership', title: 'Membership' },
  { path: '/contact-us', title: 'Contact Us' },
  { path: '/terms', title: 'Terms & Conditions' },
  { path: '/privacy', title: 'Privacy Policy' },
];

export const Links = () => (
  <div className="footerer__links">
    {links.map((link, index) => (
      <Fragment key={link.path}>
        <Link className="footer__links-text" to={link.path}>
          {link.title}
        </Link>
        {index === links.length - 1 ? (
          <></>
        ) : (
          <Divider type="vertical" className="footer__links-divider" />
        )}
      </Fragment>
    ))}
  </div>
);
