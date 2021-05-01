import './404NotFound.styles.scss';
import { LadyBugBg } from 'icons';
import { Typography } from 'antd';
import { Button } from 'components';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="page-body">
    <div className="bg-and-text-container">
      <LadyBugBg />
    </div>
    <div className="text">
      <Typography.Title className="title">404</Typography.Title>
      <Typography.Paragraph className="para-text">
        Oops! Looks like that page does not found{' '}
      </Typography.Paragraph>
      <Link to="/">
        <Button isSecondary isLight className="btn-return">
          Return to Homepage
        </Button>
      </Link>
    </div>
  </div>
);

export default NotFound;
