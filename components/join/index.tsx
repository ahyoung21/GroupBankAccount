import React, { useState, useEffect, useRef } from 'react';
import { JoinBox } from './style';

export default function Join() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const pwdRef = useRef(null);

  const [inputValue, setInputValue] = useState({
    name: '',
    password: '',
    email: '',
  });

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const postJoin = () => {};

  return (
    <>
      <JoinBox>
        <h2>회원가입</h2>
        <input
          type="text"
          placeholder="name"
          name="name"
          ref={nameRef}
          value={inputValue.name}
          onChange={handleInputValue}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          ref={emailRef}
          value={inputValue.email}
          onChange={handleInputValue}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          ref={pwdRef}
          value={inputValue.password}
          onChange={handleInputValue}
        />
        <button onClick={postJoin}>가입하기</button>
      </JoinBox>
    </>
  );
}
