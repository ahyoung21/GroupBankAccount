import React, { useState, useEffect, useRef, ChangeEvent, MouseEvent } from 'react';
import { setData } from '../../firebase/firestore';
import Modal from '../common/modal';
import { ModalRegisterBox } from './style';

interface ModalProps {
  onClose: () => void;
}

interface IRegister {
  date: string;
  price: number;
  select: string;
  name: string;
}

const ModalRegister = (props: ModalProps) => {
  const dateRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<IRegister>({
    date: '',
    price: 0,
    select: '',
    name: '',
  });

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const data = {
      dateTime: inputValue.date,
      price: inputValue.price,
      seq: inputValue.name,
      type: inputValue.select,
    };
    setData('account', data);
  };

  return (
    <Modal onClose={props.onClose}>
      <ModalRegisterBox>
        <form>
          <select name="selectBox" id="selectBox" onChange={handleSelectValue}>
            <option value="deposit">입금</option>
            <option value="withdraw">출금</option>
          </select>
          <input
            type="text"
            placeholder="YYYY-MM-DD 형식으로 입력해주세요."
            name="date"
            ref={dateRef}
            value={inputValue.date}
            onChange={handleInputValue}
          />
          <input
            type="number"
            placeholder="금액을 입력해주세요."
            name="price"
            ref={priceRef}
            value={inputValue.price}
            onChange={handleInputValue}
          />
          <input
            type="text"
            placeholder="이름을 입력해주세요."
            name="name"
            ref={nameRef}
            value={inputValue.name}
            onChange={handleInputValue}
          />

          <button type={'button'} onClick={true ? onSubmit : undefined}>
            등록
          </button>
        </form>
      </ModalRegisterBox>
    </Modal>
  );
};

export default ModalRegister;
