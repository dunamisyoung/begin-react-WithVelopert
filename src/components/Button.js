import React from 'react';
import classNames from 'classnames';

import './Button.scss';

// large, medium, small
const Button = ({ children, size, color, outline, fullWidth }) => {
  return <button className={classNames('Button', size, color, { outline, fullWidth })}>{children}</button>;
};

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
