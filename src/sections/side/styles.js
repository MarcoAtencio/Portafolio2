import styled, { css } from 'styled-components';

export const ContainerSide = styled.div`
  background-color: #08ad82;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const ProgrammerName = styled.h1`
  color: #fff;
  font-size: 2rem;
  text-align: center;
`;

export const NavPortfolio = styled.div`
  width: 100%;
`;

export const OptionList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Option = styled.li`
  color: #fff;
  a {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0.7rem 1.8rem;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 0.3s ease;
    cursor: pointer;
    color: #fff;
    transition: transform 0.3s;
  }

  ${(props) =>
    props.onSelect &&
    css`
      color: #343434;
      !props.onSelect &&
    `}

  a:hover {
    background-color: #fff;
    color: #08ad82;
    transform: scale(1.2);
  }
`;

export const NetworkInformation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const NetworkIcon = styled.image`
  background-color: #fff;
`;
