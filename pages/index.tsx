import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import { app, database } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function Home() {
  const dbInstanceAccount = collection(database, 'account');

  const getAccount = async () => {
    await getDocs(dbInstanceAccount).then((data) => {
      console.log(data.docs.map((item) => item.data()));
    });
  };

  const postAccount = async () => {
    try {
      const res = await addDoc(dbInstanceAccount, {
        name: 'emily',
        price: 10000,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const [text, setText] = useState<string>('자바스크립트');

  useEffect(() => {
    getAccount();
    // postAccount();
  }, []);

  setTimeout(() => {
    setText('타입스크립트');
  }, 1000);

  return (
    <div className="container">
      <div>
        <span>{text} 적용 완료</span>
      </div>
    </div>
  );
}
