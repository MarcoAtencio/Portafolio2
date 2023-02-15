import { ContainerEducation, SliderBox, EducationIcon, Title } from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import UpnIcon from '../../../assets/img/education/upn.png';
import CepsUniIcon from '../../../assets/img/education/ceps-uni.png';
import HackspaceIcon from '../../../assets/img/education/hackspace.png';
import PlatziIcon from '../../../assets/img/education/platzi.png';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const Education = (props) => {
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: useWindowDimensions() === 'tablet' ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // ajusta el intervalo de tiempo en milisegundos
  };

  return (
    <ContainerEducation id='education'>
      <Title>Education</Title>
      <SliderBox>
        <Slider {...settings}>
          <div>
            <a href='https://www.upn.edu.pe/' target='_blank' rel='noreferrer'>
              <EducationIcon src={UpnIcon} alt='upn'></EducationIcon>
            </a>
          </div>
          <div>
            <a
              href='https://www.ceps.uni.edu.pe/'
              target='_blank'
              rel='noreferrer'
            >
              <EducationIcon src={CepsUniIcon} alt='ceps uni' />
            </a>
          </div>

          <div>
            <a href='https://hackspace.pe/' target='_blank' rel='noreferrer'>
              <EducationIcon src={HackspaceIcon} alt='hackspace' />
            </a>
          </div>

          <div>
            <a href='https://platzi.com/' target='_blank' rel='noreferrer'>
              <EducationIcon src={PlatziIcon} alt='platzi' />
            </a>
          </div>
        </Slider>
      </SliderBox>
    </ContainerEducation>
  );
};
export default Education;
