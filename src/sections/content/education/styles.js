import styled from 'styled-components';

export const ContainerEducation = styled.section`
  background-color: #fff;
  height: 100vh;
  padding: 12vw 6vw;

  @media screen and (min-width: 960px) {
    padding: 12vw 6vw;
  }
`;

export const Title = styled.h2`
  color: #08ad82;
  font-size: 2.5rem;
`;

export const SliderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const EducationIcon = styled.img`
  max-height: 130px;

  @media screen and (min-width: 576px) {
    max-height: 200px;
  }

  @media screen and (min-width: 768px) {
    max-height: 200px;
  }

  @media screen and (min-width: 992px) {
    max-height: 120px;
  }

  @media screen and (min-width: 1200px) {
    max-height: 150px;
  }
`;
