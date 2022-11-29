import React, { useState, useEffect, useRef, ChangeEvent, MouseEvent } from 'react';
import { atom, RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import Router from 'next/router';
import { UserInputInterface, UserErrorMsgInterface } from '../../interfaces/user.interface';
import { setData, joinAuth } from '../../firebase/firestore';

import { UserState } from '../../state';

import { JoinBox } from './style';

export default function Join() {
  const firestore_path = 'users';
  const [userState, setUserState] = useRecoilState(UserState);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const matchPwdRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState<UserInputInterface<string | null>>({
    name: '',
    email: '',
    password: '',
    matchPassword: '',
  });

  const [errorMsg, setErrorMsg] = useState<UserErrorMsgInterface>({
    regMessage: '',
    pwdMessage: '',
    common: '',
  });

  const [status, setStatus] = useState<boolean>(false);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleMatchPasswordCheck();

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleMatchPasswordCheck = () => {
    if (inputValue.password === inputValue.matchPassword) {
      setErrorMsg({ ...errorMsg, pwdMessage: '' });
      if (inputValue.password) setStatus(true);
    } else {
      setErrorMsg({ ...errorMsg, pwdMessage: '불일치' });
    }
  };

  const handlePwdCheck = () => {
    const pwdRegExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&=\*()\-_?~])[A-Za-z\d!@#$%^&=\*()\-_?~]{6,12}$/;

    if (inputValue.password && !pwdRegExp.test(inputValue.password)) {
      pwdRef.current && pwdRef.current.focus();
      setErrorMsg({ ...errorMsg, regMessage: '사용불가' });
    } else {
      setErrorMsg({ ...errorMsg, regMessage: '' });
    }
  };

  const onSubmit = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    setErrorMsg({ regMessage: '', pwdMessage: '', common: '' });
    joinAuth(inputValue.email, inputValue.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        setData(firestore_path, {
          uid: user.uid,
          ...inputValue,
        });

        setInputValue({
          name: '',
          email: '',
          password: '',
          matchPassword: '',
        });

        setUserState([{ email: user.email }]);
        Router.push('/login');
      })

      .catch((error) => {
        switch (error.code) {
          case 'auth/weak-password':
            setErrorMsg({ ...errorMsg, common: '비밀번호는 6자리 이상이어야 합니다' });
            break;
          case 'auth/invalid-email':
            setErrorMsg({ ...errorMsg, common: '잘못된 이메일 주소입니다' });
            break;
          case 'auth/email-already-in-use':
            setErrorMsg({ ...errorMsg, common: '이미 가입되어 있는 계정입니다' });
            break;
        }
      });
  };

  useEffect(() => {
    if (inputValue.password) {
      handlePwdCheck();
    }

    if (inputValue.password && inputValue.matchPassword) {
      handleMatchPasswordCheck();
    }
  }, [inputValue.password, inputValue.matchPassword]);

  return (
    <>
      <JoinBox>
        <div>
          <h2>회원가입</h2>
          <form>
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
            <div>{errorMsg.regMessage}</div>
            <input
              type="password"
              placeholder="password confirm"
              name="matchPassword"
              ref={matchPwdRef}
              value={inputValue.matchPassword}
              onChange={handleInputValue}
            />

            <div>{errorMsg.pwdMessage}</div>
            <div>{errorMsg.common}</div>
            <button type={'button'} onClick={status ? onSubmit : undefined}>
              가입하기
            </button>
          </form>
        </div>
      </JoinBox>
    </>
  );
}
