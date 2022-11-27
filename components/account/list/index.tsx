import React, { useState, useEffect, MouseEvent } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { AccountInterface } from '../../../interfaces/user.interface';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { UserState, InitialPropsState } from '../../../state';

import { AccountListBox } from './style';

import { getData, setData } from '../../../firebase/firestore';
import Button from '../../button/index';

import Menu from '../../modal/menu';

export default function AccountList() {
  const [modalFlag, setModalFlag] = useState(false);
  const onClickOpenModal = (e: MouseEvent<HTMLButtonElement>) => {
    setModalFlag(true);
  };
  const onClickCloseModal = () => {
    setModalFlag(false);
  };
  const userEmail = useRecoilValue(UserState);
  const accountInfo = useRecoilValueLoadable(InitialPropsState);
  console.log(accountInfo.contents);

  const setAccount = () => {
    const data = { dateTime: '2022-11-15', price: 90000, seq: 1, type: 'withdraw' };
    setData('account', data);
  };

  switch (accountInfo.state) {
    case 'hasValue':
      return (
        <AccountListBox>
          <ul>
            {accountInfo.contents.map((account: AccountInterface, idx: number) => {
              return (
                <li key={idx}>
                  <span>{account.dateTime}</span>
                  <span>{account.price}</span>
                  <span>{account.type}</span>
                </li>
              );
            })}
          </ul>
          {userEmail && <Button onClickOpenModal={onClickOpenModal} />}
          {modalFlag && <Menu onClose={onClickCloseModal} />}
        </AccountListBox>
      );
    case 'loading':
      return <Skeleton count={5} />;
    case 'hasError':
      return <>error</>;
  }
}
