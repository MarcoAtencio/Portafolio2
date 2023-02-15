import styled, { css } from 'styled-components';

export const ContainerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 0 10px red;
  z-index: 10;
`;

export const ContainerSide = styled.div`
  background-color: #08ad82;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 0;
`;

export const ProgrammerName = styled.h1`
  color: #fff;
  font-size: 2rem;
  text-align: center;
`;

export const Role = styled.p`
  margin-top: 0.5rem;
  color: #fcfcfc;
  font-size: 1.1rem;
  text-align: center;
`;

export const NavPortfolio = styled.div`
  width: 100%;
`;

export const OptionList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MenuTop = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #08ad82;
`;

export const MenuBottom = styled.div`
  height: 15vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 30%;
`;

export const MenuOptions = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  height: 60vh;
  background-color: white;
`;

export const MenuOption = styled.li`
  color: black;

  a {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0.8rem 1.8rem;
    font-size: 1.3rem;
    text-align: center;
    transition: background-color 0.4s ease;
    cursor: pointer;
    color: black;
    transition: transform 0.3s;
  }
`;

export const Option = styled.li`
  color: #fff;
  a {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0.8rem 1.8rem;
    font-size: 1.3rem;
    text-align: center;
    transition: background-color 0.4s ease;
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
    transform: scale(1.1);
  }
`;

export const NetworkInformation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  a {
    transition: transform 0.3s;
  }

  a:hover {
    transform: scale(1.2);
  }
`;

export const NetworkIcon = styled.image`
  background-color: #fff;
`;
