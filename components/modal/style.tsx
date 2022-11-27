import styled from 'styled-components';

export const ModalBox = styled.div`
  display: -webkit-flex;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
`;

export const Dimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
