import styled from 'styled-components';

export const ModalRegisterBox = styled.div`
  padding: 2rem;

  input {
    display: block;
    width: 100%;
    margin: 1rem 0;
    padding: 1rem;
    font-size: 1.4rem;
    box-sizing: border-box;
    border: 0.1rem solid rgb(221, 221, 221);
    border-radius: 0.3rem;

    &::placeholder {
      color: #999;
    }
  }

  form {
    div {
      font-size: 1.4rem;
      color: red;
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
