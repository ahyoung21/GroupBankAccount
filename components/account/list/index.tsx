import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { AccountInterface } from '../../../interfaces/user.interface';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { InitialPropsState } from '../../../state';

import { AccountListBox } from './style';

import { getData, setData } from '../../../firebase/firestore';

export default function AccountList() {
  const accountInfo = useRecoilValueLoadable(InitialPropsState);
  console.log(accountInfo.contents);

  const setAccount = () => {
    const data = { dateTime: '2022-11-15', price: 90000, seq: 1, type: 'withdraw' };
    setData('account', data);
  };

  useEffect(() => {}, []);

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
        </AccountListBox>
      );
    case 'loading':
      return <Skeleton count={5} />;
    case 'hasError':
      return <>error</>;
  }
}
