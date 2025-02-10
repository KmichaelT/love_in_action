"use client";

import { FcGoogle } from 'react-icons/fc';
import './index.scss';
import Link from 'next/link';

const LoginButton = () => {
  return (
    <Link
      href="/api/users/oauth/authorize"
      className="login-button btn btn--style-secondary btn--size-large btn--icon-style-without-border"
      prefetch={false}
    >
      <FcGoogle className="login-button__icon" />
      Sign in with Google
    </Link>
  );
};

export default LoginButton;
