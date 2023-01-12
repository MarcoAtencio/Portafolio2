import styled from 'styled-components';

export const ContainerPresentation = styled.section`
  background-color: #fff;
  height: 100vh;
  padding: 10rem 8rem;
`;

export const PersonalInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GreetingsPrincipal = styled.h1`
  color: #08ad82;
  font-size: 4rem;
`;

export const Role = styled.p`
  margin-top: 2rem;
  color: #5b5b5b;
  font-size: 1.5rem;
`;

export const PortfolioActions = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
