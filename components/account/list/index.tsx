import React, { useState, useEffect, MouseEvent } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { AccountInterface } from '../../../interfaces/user.interface';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { UserState, InitialPropsState } from '../../../state';

import { AccountListBox } from './style';

import Button from '../../button/index';

import ModalRegister from '../../modalRegister';

export default function AccountList() {
  const [modalFlag, setModalFlag] = useState(false);
  const intl = new Intl.NumberFormat('ko', { style: 'currency', currency: 'KRW' });
  const onClickOpenModal = () => {
    setModalFlag(true);
  };
  const onClickCloseModal = () => {
    setModalFlag(false);
  };
  const userEmail = useRecoilValue(UserState);
  const accountInfo = useRecoilValueLoadable(InitialPropsState);

  switch (accountInfo.state) {
    case 'hasValue':
      return (
        <AccountListBox>
          <ul>
            {accountInfo.contents.map((account: AccountInterface, idx: number) => {
              return (
                <li key={idx}>
                  <dl>
                    <dt>
                      <span>{account.dateTime}</span>
                      <strong>{account.type === 'withdraw' ? '출금' : '입금'}</strong>
                    </dt>
                    <dd>
                      <span>
                        {account.type === 'withdraw' ? '-' : '+'}
                        {intl.format(account.price)}
                      </span>
                    </dd>
                  </dl>
                </li>
              );
            })}
          </ul>
          {userEmail && <Button onClickOpenModal={onClickOpenModal} />}
          {modalFlag && <ModalRegister onClose={onClickCloseModal} />}
        </AccountListBox>
      );
    case 'loading':
      return <Skeleton count={5} height={'5.4rem'} />;
    case 'hasError':
      return <>error</>;
  }
}
