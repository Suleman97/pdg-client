import { Button as AntdButton, Typography } from 'antd';
import PropTypes from 'prop-types';
import './Button.styles.scss';

export const Button = ({ children, isSecondary, className, isLight }) => (
  <AntdButton
    type="primary"
    className={`button
    ${isSecondary && 'button__secondary'}
    ${isLight && 'button__light'}
    ${className}`}
  >
    <Typography className="button__text">{children}</Typography>
  </AntdButton>
);

Button.propTypes = {
  isLight: PropTypes.bool,
  className: PropTypes.string,
  isSecondary: PropTypes.bool,
  children: PropTypes.element.isRequired,
};
