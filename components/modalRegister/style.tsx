import styled from 'styled-components';

export const ModalRegisterBox = styled.div`
  padding: 2rem;

  input,
  select {
    display: block;
    position: relative;
    width: 100%;
    margin: 1rem 0;
    padding: 1rem;
    font-size: 1.4rem;
    box-sizing: border-box;
    border: 0.1rem solid rgb(221, 221, 221);
    border-radius: 0.3rem;
    appearance: none;

    &::placeholder {
      color: #999;
    }
  }

  form {
    div {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0px;
        right: 1.5rem;
        bottom: 0.5rem;
        width: 0.7rem;
        height: 0.7rem;
        margin: auto;
        border-bottom: 0.1rem solid rgb(58, 58, 58);
        border-right: 0.1rem solid rgb(58, 58, 58);
        transform: rotate(45deg);
      }
    }
  }

  button {
    display: block;
    width: 100%;
    margin-top: 2rem;
    padding: 1.5rem 0;
    font-size: 1.8rem;
    text-align: center;
    background-color: #fae100;
    cursor: pointer;
    box-sizing: border-box;
  }
`;
