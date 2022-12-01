import styled from 'styled-components';

export const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 11rem);
  max-width: 46rem;
  margin: auto;

  div {
    width: 100%;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1.6rem;
    text-align: center;
  }

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
    font-size: 1.4rem;
    text-align: center;
    background-color: #fae100;
    cursor: pointer;
    box-sizing: border-box;
  }
`;
