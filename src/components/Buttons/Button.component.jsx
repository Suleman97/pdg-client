import { Button as AntdButton, Typography } from 'antd';
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
