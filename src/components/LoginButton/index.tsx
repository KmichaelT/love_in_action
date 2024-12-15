"use client";

import { FcGoogle } from 'react-icons/fc';
import './index.scss';

const LoginButton = () => {
  return (
    <a 
      href="/api/users/oauth/authorize" 
      className="login-button btn btn--style-secondary btn--size-large btn--icon-style-without-border"
    >
      <FcGoogle className="login-button__icon" />
      Sign in with Google
    </a>
  );
};

export default LoginButton;
