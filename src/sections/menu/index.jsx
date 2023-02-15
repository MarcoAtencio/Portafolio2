import {
  ContainerSide,
  ProgrammerName,
  Role,
  NavPortfolio,
  OptionList,
  Option,
  NetworkInformation,
  ContainerMenu,
  MenuTop,
  MenuBottom,
  MenuOptions,
  MenuOption,
} from './styles';
import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/img/linkedin.svg';
import { ReactComponent as MenuIcon } from '../../assets/img/menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../assets/img/closeMenu.svg';
import { useState, useEffect } from 'react';

export const Side = (props) => {
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
  const [isOpenMenu, setIsOpenMenu] = useState(false);
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
        style={{ position: 'fixed', top: 40, right: 40 }}
        onClick={toggleMenu}
      />
      {isOpenMenu && (
        <ContainerMenu>
          <CloseMenuIcon
            style={{ position: 'absolute', top: 40, right: 40 }}
            onClick={toggleMenu}
          />
          <MenuTop>
            <ProgrammerName>Marco Atencio</ProgrammerName>
            <Role>Full Stack Developer</Role>
          </MenuTop>

          <MenuOptions>
            <MenuOption>
              <a href='#presentation' onClick={toggleMenu}>
                Home
              </a>
            </MenuOption>
            <MenuOption>
              <a href='#skills' onClick={toggleMenu}>
                My Skills
              </a>
            </MenuOption>
            <MenuOption>
              <a href='#work' onClick={toggleMenu}>
                Work
              </a>
            </MenuOption>
            <MenuOption>
              <a href='#education' onClick={toggleMenu}>
                Education
              </a>
            </MenuOption>
            <MenuOption>
              <a href='#contactMe' onClick={toggleMenu}>
                Contact Me
              </a>
            </MenuOption>
          </MenuOptions>

          <MenuBottom>
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
          </MenuBottom>
        </ContainerMenu>
      )}
    </>
  );
};
