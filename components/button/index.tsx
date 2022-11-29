import React, { useState, useEffect } from 'react';
import { ButtonBox } from './style';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IButtonProps {
  onClickOpenModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ onClickOpenModal }: IButtonProps) {
  return (
    <ButtonBox onClick={onClickOpenModal}>
      <FontAwesomeIcon icon={faPen} />
    </ButtonBox>
  );
}
