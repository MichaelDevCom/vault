import React from 'react';

const Button = ({children, className, onClick}) => {
  
  const handleClick = () => onClick && onClick();
  
  const classes = "button" + (className ? " " + className : "");
  
  return (
    <div className={classes} onClick={handleClick}>
      <div>{children}</div>
    </div>
  );
}

export default Button;