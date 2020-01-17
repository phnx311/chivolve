import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, isDisabled, ...otherProps}) => (
  <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} ${isDisabled} custom-button`} disabled={isDisabled} {...otherProps} >
    {children}
  </button>
)

export default CustomButton;