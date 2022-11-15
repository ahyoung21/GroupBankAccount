import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import { getData, setData } from '../firebase/firestore';

export default function Home() {
  const getAccount = async () => {
    await getData('account').then((data: any) => {
      console.log(data.docs.map((item: any) => item.data()));
    });
  };

  const setAccount = () => {
    const data = { name: 'ahyoung', price: 90000 };
    setData('account', data);
  };

  const [text, setText] = useState<string>('자바스크립트');

  useEffect(() => {
    getAccount();
  }, []);

  setTimeout(() => {
    setText('타입스크립트');
  }, 1000);

  return (
    <div className="container">
      <div>
        <span>{text} 적용 완료</span>
        <button onClick={setAccount}>전송</button>
      </div>
    </div>
  );
}
