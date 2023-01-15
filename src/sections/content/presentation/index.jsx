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
import file from '../../../assets/archives/CV-MarcoAtencio.pdf';

const Presentation = () => {
  console.log('file', file);
  const handleDownload = () => {
    const fileName = 'CV-MarcoAtencio.pdf';
    fetch(file)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
      })
      .catch((error) => console.log(error));
  };

  const handleContactMe = () => {
    console.log('contact me');
    const a = document.createElement('a');
    a.href = '#contactMe';
    a.click();
  };

  return (
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
        <BtnDownloadCV onClick={handleDownload}>Download CV</BtnDownloadCV>
        <BtnContactMe onClick={handleContactMe}>Contact Me</BtnContactMe>
      </PortfolioActions>
    </ContainerPresentation>
  );
};

export default Presentation;
