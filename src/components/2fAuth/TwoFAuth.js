import React from 'react';
import SendCode from './Auth';
import VerifyCode from './Verify';

const Auth2FAPage = () => (
  <div>
    <SendCode />
    <VerifyCode />
  </div>
);

export default Auth2FAPage;