import * as React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  primary?: boolean;
  onClick?(): void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  const { to, children, primary, disabled, onClick } = props;
  const isLink = !!to;

  const renderButton = () => {
    return (
      <button 
        style={buttonStyle(!!primary, !!disabled)} 
        disabled={disabled}
        onClick={onClick}
      >{children}</button>
    )
  }

  const renderLink = () => {
    if (!to) {
      return <div></div>
    }

    return (
      <Link 
        style={{
          ...buttonStyle(!!primary, !!disabled),
          textDecoration: 'none',
        }} 
        to={to}
      >{children}</Link> 
    )
  }

  return isLink ? renderLink() : renderButton();
}

const buttonStyle = (primary: boolean, disabled: boolean) => {
  const style: React.CSSProperties = {
    display: 'inline-block',
    border: 'solid 1px #ccc',
    borderColor: primary ? '#2e6da4' : '#ccc',
    borderRadius: '4px',
    margin: '0 10px 10px 0',
    padding: '8px 16px',
    width: 'auto',
    overflow: 'visible',
    background: primary ? '#337ab7' : 'transparent',
    color: primary ? '#fff' : 'inherit',
  }

  if (disabled) {
    style.color = '#ccc'
  }

  return style;
}

export default Button;