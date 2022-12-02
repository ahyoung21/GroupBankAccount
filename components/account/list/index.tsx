import React, { useState, useEffect, MouseEvent } from 'react';
import { deleteData } from '../../../firebase/firestore';
import { AccountInterface } from '../../../interfaces/user.interface';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { UserState, InitialPropsState } from '../../../state';

import { AccountListBox } from './style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Button from '../../button/index';

import ModalRegister from '../../modalRegister';

export default function AccountList() {
  const [modalFlag, setModalFlag] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const intl = new Intl.NumberFormat('ko', { style: 'currency', currency: 'KRW' });
  const onClickOpenModal = () => {
    setModalFlag(true);
  };
  const onClickCloseModal = () => {
    setModalFlag(false);
  };

  const onMouseDown = (e: MouseEvent<HTMLElement>): void => {
    setStart(e.pageX);
  };

  const onMouseUp = (e: MouseEvent<HTMLElement>): void => {
    setEnd(e.pageX);
    if (start > end) {
      e.currentTarget.classList.add('active');
    } else {
      e.currentTarget.classList.remove('active');
    }
  };

  const onMouseMove = (e: MouseEvent<HTMLElement>): void => {};

  const onClickDelete = async (id: string) => {
    const confirm = window.confirm('정말 삭제하시겠습니까?');

    if (confirm) {
      await deleteData('account', id)
        .then(() => {
          console.log('Entire Document has been deleted successfully.');
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
                <li
                  key={idx}
                  onMouseDown={onMouseDown}
                  onMouseUp={onMouseUp}
                  onMouseMove={onMouseMove}
                >
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
                  <button onClick={() => onClickDelete(account.id)}>삭제</button>
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
