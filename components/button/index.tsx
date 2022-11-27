import React, { useState, useEffect } from 'react';
import { ButtonBox } from './style';

interface IButton {
  onClickOpenModal: any;
}

export default function Button({ onClickOpenModal }: IButton) {
  return <ButtonBox onClick={onClickOpenModal}>등록</ButtonBox>;
}
