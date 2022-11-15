import React, { useState, useEffect } from 'react';
import { AccountListBox } from './style';

import { getData, setData } from '../../../firebase/firestore';

export default function AccountList() {
  const getAccount = async () => {
    await getData('account').then((data: any) => {
      console.log(data.docs.map((item: any) => item.data()));
    });
  };

  const setAccount = () => {
    const data = { dateTime: '2022-11-15', price: 90000, seq: 1, type: 'withdraw' };
    setData('account', data);
  };

  useEffect(() => {
    getAccount();
  }, []);

  return <AccountListBox>본문</AccountListBox>;
}
