import styled from 'styled-components';

export const AccountListBox = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 10rem);
  margin: 5.4rem auto 0;
  overflow: hidden;

  ul {
    li {
      & + li {
        border-top: 1px solid rgb(244, 244, 244);
      }
    }
  }

  dl {
    display: flex;
    padding: 2rem 0;
    font-weight: 400;
    font-size: 1.4rem;


    strong {
      margin-left: 1.5rem;
    }

    dd {
      margin-left: auto;
    }
  }
`;
