import {
  ContainerPresentation,
  PersonalInformation,
  GreetingsPrincipal,
  Role,
  PortfolioActions,
  BtnDownloadCV,
  BtnContactMe,
} from './styles';
import ProgrammerImg from '../../../assets/img/programmer.png';

const Presentation = () => (
  <ContainerPresentation id='presentation'>
    <PersonalInformation>
      <div>
        <GreetingsPrincipal>Hi</GreetingsPrincipal>
        <GreetingsPrincipal>I’m Marco</GreetingsPrincipal>
        <GreetingsPrincipal>Web Developer</GreetingsPrincipal>
      </div>

      <img src={ProgrammerImg} alt={'Foto de el programador Marco Atencio'} />
    </PersonalInformation>
    <Role>Full Stack Developer</Role>
    <PortfolioActions>
      <BtnDownloadCV>Download CV</BtnDownloadCV>
      <BtnContactMe>Contact Me</BtnContactMe>
    </PortfolioActions>
  </ContainerPresentation>
);

export default Presentation;
