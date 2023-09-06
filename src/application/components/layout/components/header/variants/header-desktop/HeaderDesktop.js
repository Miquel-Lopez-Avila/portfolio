import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logo from 'common/components/logo';
import { Wrapper, NavBar, Container, Absolute, NavLink, WrapperNavigation, Button } from './HeaderStyled.styled';

const HeaderDesktop = () => {
  const [selectedTab, setSelectedTab] = useState({
    home: true,
    enterprise: false,
    contact: false
  });
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname) setSelectedTab({
      home: pathname === '/',
      enterprise: pathname === '/enterprise',
      contact: pathname === '/contact'
    })
  }, [pathname])


  return (
    <Absolute>
      <Wrapper>
        <Container>
          <NavLink href="/" disableUnderLine>
            <Logo />
          </NavLink>
          <WrapperNavigation>
            <NavBar>
              <NavLink href="/">
                Inicio
              </NavLink>
              <NavLink href="/enterprise">
                Sobre nosotros
              </NavLink>
            </NavBar>
            <Button href="/contact" type={'light'}>
              Contactar
            </Button>
          </WrapperNavigation>
        </Container>
      </Wrapper>
    </Absolute>
  )
};

export default HeaderDesktop;
