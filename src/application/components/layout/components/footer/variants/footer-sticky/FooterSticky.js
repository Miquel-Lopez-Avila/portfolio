import React                                                                         from 'react';
import { appName }                                                                   from 'application/config/variables';
import TextColored                                                                   from 'common/components/text-colored/TextColored';
import { CopyRight, Footer, Wrapper, ContainerTerms, List, Item, Point, FooterLink } from './FooterSticky.styled';

const FooterSticky = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer data-aos="fade-up">
      <Wrapper data-aos="fade-up">
        <ContainerTerms>
          <CopyRight>
            <small>
              &copy;
              <span> {currentYear}</span>
              , <TextColored primary>{appName}</TextColored>
            </small>
          </CopyRight>
          <List data-aos="fade-up">
            <Point>·</Point>
              <Item>
                <FooterLink href="/service">
                  Servicio
                </FooterLink>
              </Item>
            <Point>·</Point>
              <Item>
                <FooterLink href="/frequent-questions">
                  Preguntas Frequentes
                </FooterLink>
              </Item>
            <Point>·</Point>
              <Item>
                <FooterLink href="/cookies-policy">
                  Política de cookies
                </FooterLink>
              </Item>
          </List>
        </ContainerTerms>
      </Wrapper>
    </Footer>
  );
};

export default FooterSticky;
