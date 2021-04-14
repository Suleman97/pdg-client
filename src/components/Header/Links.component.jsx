import { Divider } from 'antd';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { path: '/about', title: 'About' },
  { path: '/faqs', title: 'FAQs' },
  { path: '/membership', title: 'Membership' },
  { path: '/contact-us', title: 'Contact Us' },
];

export const Links = () => (
  <div className="header__links">
    {links.map((link, index) => (
      <Fragment key={link.path}>
        <Link className="header__links-text" to={link.path}>
          {link.title}
        </Link>
        {index === links.length - 1 ? (
          <></>
        ) : (
          <Divider type="vertical" className="header__links-divider" />
        )}
      </Fragment>
    ))}
  </div>
);
