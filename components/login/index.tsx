import React, { useState, useEffect, useRef, ChangeEvent, MouseEvent } from 'react';
import Router from 'next/router';
import { atom, RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

import { UserInputInterface } from '../../interfaces/user.interface';
import { setData, loginAuth } from '../../firebase/firestore';
import { JoinBox } from '../join/style';
import { UserState } from '../../state';

export default function Login() {
  const firestore_path = 'users';
  const userState = useRecoilValue(UserState); // 읽기 전용!

  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [status, setStatus] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<UserInputInterface<string>>({
    email: '',
    password: '',
  });

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onSubmit = async (e: MouseEvent<HTMLElement>): Promise<void> => {
    e.preventDefault();
    setErrorMsg('');
    loginAuth(inputValue.email, inputValue.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        setData(firestore_path, {
          uid: user.uid,
          ...inputValue,
        });

        Router.push('/');
      })

      .catch((error) => {
        switch (error.code) {
          case 'auth/user-not-found':
            setErrorMsg('아이디가 존재하지 않습니다.');
            break;
          case 'auth/wrong-password':
            setErrorMsg('비밀번호를 확인해주세요.');
            break;
        }
      });
  };

  useEffect(() => {
    if (inputValue.email && inputValue.password) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [inputValue.password, inputValue.matchPassword]);

  return (
    <>
      <JoinBox>
        <div>
          <h2>로그인</h2>
          <form>
            <input
              type="text"
              placeholder="email"
              name="email"
              ref={emailRef}
              value={userState[0].email ? userState[0].email : inputValue.email}
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
            <div>{errorMsg}</div>
            <button type={'button'} onClick={status ? onSubmit : undefined}>
              로그인
            </button>
          </form>
        </div>
      </JoinBox>
    </>
  );
}
