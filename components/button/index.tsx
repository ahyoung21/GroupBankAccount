import React, { useState, useEffect } from 'react';
import { ButtonBox } from './style';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IButton {
  onClickOpenModal: any;
}

export default function Button({ onClickOpenModal }: IButton) {
  return (
    <ButtonBox onClick={onClickOpenModal}>
      <FontAwesomeIcon icon={faPen} />
    </ButtonBox>
  );
}
