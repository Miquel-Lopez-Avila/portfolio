import React         from 'react';
import HeaderDesktop from './components/header/variants/header-desktop';
import HeaderMobile  from './components/header/variants/header-mobile';
import Footer        from './components/footer/variants/footer';
import FooterSticky  from './components/footer/variants/footer-sticky';
import FloatingContactButton from './components/contact-button';
import { Wrapper }   from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <HeaderDesktop />
      {children}
      <Footer />
      <FloatingContactButton />
      <FooterSticky />
      <HeaderMobile/>
    </Wrapper>
  )
};

export default Layout;
