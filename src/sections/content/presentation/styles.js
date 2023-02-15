import styled from 'styled-components';

export const ContainerPresentation = styled.section`
  background-color: #fff;
  padding: 12vw 6vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media screen and (min-width: 960px) {
    padding: 12vw 8vw;
    display: block;
  }
`;

export const PersonalInformation = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`;

export const GreetingsPrincipal = styled.h1`
  color: #08ad82;
  font-size: 2.3rem;

  @media screen and (min-width: 576px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media screen and (min-width: 960px) {
    font-size: 4rem;
  }
`;

export const Role = styled.p`
  margin-top: 1.5rem;
  color: #5b5b5b;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const Photo = styled.img`
  max-width: 250px;
  margin: auto;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 576px) {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    margin-top: 2rem;
    max-width: 350px;
  }
`;

export const PortfolioActions = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const BtnDownloadCV = styled.button`
  background-color: #08ad82;
  color: #fff;
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  margin-right: 2rem;
  width: 180px;
  font-size: 1.2rem;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 576px) {
    margin: 0;
  }
`;

export const BtnContactMe = styled.button`
  background-color: #fff;
  color: #08ad82;
  border: 1px solid #08ad82;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  width: 180px;
  font-size: 1.2rem;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
