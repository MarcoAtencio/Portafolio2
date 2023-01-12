import {
  ContainerSide,
  ProgrammerName,
  NavPortfolio,
  OptionList,
  Option,
  NetworkInformation,
} from './styles';
import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import { ReactComponent as Linkedin } from '../../assets/img/linkedin.svg';

const Side = (props) => (
  <ContainerSide className='col-2'>
    <ProgrammerName>Marco Atencio</ProgrammerName>
    <NavPortfolio>
      <OptionList>
        <Option>
          <a href='#presentation'>Home</a>
        </Option>
        <Option>
          <a href='#skills'>My Skills</a>
        </Option>
        <Option>
          <a href='#work'>Work</a>
        </Option>
        <Option>
          <a href='#education'>Education</a>
        </Option>
        <Option>
          <a href='#contactMe'>Contact Me</a>
        </Option>
      </OptionList>
    </NavPortfolio>
    <NetworkInformation>
      <a
        href='https://github.com/MarcoAtencio'
        target='_blank'
        rel='noreferrer'
      >
        <GithubIcon />
      </a>

      <a
        href='https://www.linkedin.com/in/marcoatencio/'
        target='_blank'
        rel='noreferrer'
      >
        <Linkedin />
      </a>
    </NetworkInformation>
  </ContainerSide>
);

export default Side;
