import styled from 'styled-components';

export const HeaderBox = styled.header`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffa5ac;
  z-index: 100;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;

    strong {
      display: block;
      width: 100%;
      margin: 0;
      padding: 2rem 1.5rem;
      font-weight: 400;
      font-size: 1.4rem;
      color: #fff;
      letter-spacing: 0.1rem;
      background-color: #ffa5ac;
      text-align: left;
      text-transform: uppercase;
      transition: 0.2s;
      transform-origin: 50% 50%;
    }
  }
`;
