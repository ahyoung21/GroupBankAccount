import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import { UserInputInterface } from '../../interfaces/user.interface';
import { setData, joinAuth } from '../../firebase/firestore';

import { JoinBox } from './style';

export default function Join() {
  const firestore_path = 'users';

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const pwdRef = useRef(null);

  const [inputValue, setInputValue] = useState<UserInputInterface>({
    name: '',
    password: '',
    email: '',
  });

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    joinAuth(inputValue.email, inputValue.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        setData(firestore_path, {
          uid: user.uid,
          ...inputValue,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`${errorCode} - ${errorMessage}`);
      });
  };

  return (
    <>
      <JoinBox>
        <h2>회원가입</h2>
        <form onSubmit={onSubmit}>
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
          <button type={'submit'}>가입하기</button>
        </form>
      </JoinBox>
    </>
  );
}
