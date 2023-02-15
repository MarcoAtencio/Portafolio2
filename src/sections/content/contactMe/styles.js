import styled from 'styled-components';

export const Title = styled.h2`
  color: #08ad82;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
`;

export const ContainerContactMe = styled.section`
  background-color: #fff;
  height: 100vh;
  padding: 9rem 4rem;

  @media (min-width: 1200px) {
    padding: 10rem 6rem;
  }

  @media (min-width: 1401px) {
    padding: 10rem 8rem;
  }
`;

export const Input = styled.input`
  border: 1px solid #08ad82;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  &:focus {
    border: 2px solid #08ad82;
    outline: none;
  }
  &.top:nth-child(1) {
    @media screen and (min-width: 768px) {
      width: 48%;
    }
  }
  &.top:nth-child(2) {
    @media screen and (min-width: 768px) {
      width: 48%;
      margin-top: 0 !important;
    }
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid #08ad82;
  border-radius: 5px;
  padding: 10px;
  min-height: 100px;
  &:focus {
    border: 2px solid #08ad82;
    outline: none;
  }
`;

export const BtnSend = styled.button`
  background-color: #fff;
  color: #08ad82;
  border: 1px solid #08ad82;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  margin-right: 2rem;
  width: 180px;
  font-size: 1.2rem;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
    background-color: #08ad82;
    color: #fff;
    border: none;
  }
`;
