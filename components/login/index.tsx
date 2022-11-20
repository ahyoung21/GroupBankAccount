import React, { useState, useEffect, useRef } from 'react';
import { LoginBox } from './style';
import { loginAuth } from '../../firebase/firestore';

export default function Login() {
  return (
    <>
      <LoginBox>
        <h2>로그인</h2>
      </LoginBox>
    </>
  );
}
