import {
  ContainerSide,
  ProgrammerName,
  NavPortfolio,
  OptionList,
  Option,
  NetworkInformation,
  ContainerMenu,
} from './styles';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/img/linkedin.svg';
import { ReactComponent as MenuIcon } from '../../assets/img/menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../assets/img/closeMenu.svg';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Side = (props) => {
  console.log('window dimensions', useWindowDimensions());

  return (
    <ContainerSide className='col-3 col-xl-2'>
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
          <LinkedinIcon />
        </a>
      </NetworkInformation>
    </ContainerSide>
  );
};

export const HamburgerMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState();
  const toggleMenu = () => {
    console.log('toggle');
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpenMenu);
  }, [isOpenMenu]);

  return (
    <>
      <MenuIcon
        style={{ position: 'absolute', top: 40, right: 40 }}
        onClick={toggleMenu}
      />
      {isOpenMenu && (
        <ContainerMenu>
          <CloseMenuIcon
            style={{ position: 'absolute', top: 40, right: 40 }}
            onClick={toggleMenu}
          />
          <p>Prueba</p>
        </ContainerMenu>
      )}
    </>
  );
};
