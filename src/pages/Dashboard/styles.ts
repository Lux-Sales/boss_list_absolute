import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  img {
    border-radius: 50%;
  }
  h1 {
    width: 30vh;
    margin-top: 50px;
    font-family: Big Shoulders Display, serif;
    text-align: center;
    margin-right: 200px;
    height: 40px;
  }
  button {
    cursor: pointer;
    height: 50px;
    margin-top: 50px;
    margin-right: 20px;
    border-radius: 10px;
    background-color: #e61111;
    &:hover {
      background-color: ${shade(0.2, '#e61111')};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  border: 5px solid #000;
  border-radius: 10px 10px 0 0;
  height: 20px;
  margin-top: 15px;
  strong {
    margin: auto;
  }
`;

export const List = styled.div`
  display: flex;
  background-color: #828ed6;
  padding-bottom: 15px;
  flex-direction: column;
`;

export const Input = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #828ed6;
  padding-bottom: 15px;
  border-radius: 0 0 10px 10px;

  input {
    margin-left: 140px;
    background-color: ${shade(0.3, '#828ed6')};
    border-radius: 5px;

    &::placeholder {
      color: #000;
    }
  }

  select {
    margin-right: 70px;
    border-radius: 5px;
    background-color: ${shade(0.3, '#828ed6')};
    color: #000;
    & + select {
      margin-right: 150px;
    }
  }
`;

export const CenterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  button {
    cursor: pointer;
    height: 50px;
    width: 200px;
    border-radius: 10px;
    background-color: #0b7c07;
    &:hover {
      background-color: ${shade(0.3, '#0b7c07')};
    }
  }
`;

export const Users = styled.div`
  width: 100%;
  display: flex;
  span {
    margin: auto;
    width: 200px;
    text-align: center;
  }
`;
