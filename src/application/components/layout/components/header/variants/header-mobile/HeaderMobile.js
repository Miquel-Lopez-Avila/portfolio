import React, { useEffect, useState }                                               from 'react';
import { useRouter }                                                                from 'next/router';
import { Container, Wrapper, Tab, HomeIcon, Text, PaperPlane, NavLink, BusinessIcon } from './HeaderMobile.styled';

const HeaderMobile = () => {
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
    <Wrapper>
      <Container>
        <Tab>
          <NavLink href="/" $isSelectedTab={selectedTab.home}>
                <HomeIcon />
              <Text>Inicio</Text>
          </NavLink>
        </Tab>
        <Tab>
          <NavLink href="/enterprise" $isSelectedTab={selectedTab.enterprise}>
              <BusinessIcon />
            <Text>Empresa</Text>
          </NavLink>
        </Tab>
        <Tab>
          <NavLink href="/contact" $isSelectedTab={selectedTab.contact}>
              <PaperPlane />
            <Text>Contactar</Text>
          </NavLink>
        </Tab>
      </Container>
    </Wrapper>
  )
};

export default HeaderMobile;
