import React from 'react';
import { appName } from 'application/config/variables';
import Logo from 'common/components/logo';
import {
  Footer as FooterStyle,
  Wrapper,
  ContainerInfo,
  ContainerBottom,
  Button,
  ResourcesContainer,
  LeftInfoContainer,
  FooterSentence,
  Sentence,
  SocialMedia,
  Instagram,
  Gmail,
  FooterStickyInMobile,
  ContainerTerms,
  CopyRight,
  FooterLink,
  Item,
  List,
  Point,
  ContainerLink,
  ContainerResources,
  ListResources,
  TitleResources,
  ItemResources, FacebookIcon
}                         from './Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyle>
      <Wrapper>
        <ContainerInfo>
            <LeftInfoContainer>
              <FooterSentence>
                <Sentence>El arte multimedia</Sentence>
                <SocialMedia>
                  <FacebookIcon />
                  <Instagram />
                  <Gmail />
                </SocialMedia>
              </FooterSentence>
            </LeftInfoContainer>
            <ResourcesContainer>
              <ContainerResources>
                <ListResources>
                  <TitleResources>Email</TitleResources>
                  <ItemResources>mediarte.agency@gmail.com</ItemResources>
                </ListResources>
                <ListResources>
                  <TitleResources>Teléfono</TitleResources>
                  <ItemResources>609 33 90 36</ItemResources>
                </ListResources>
              </ContainerResources>
            </ResourcesContainer>
        </ContainerInfo>
          <FooterStickyInMobile>
            <ContainerTerms>
              <CopyRight>
                <small>
                  &copy;
                  <span> {currentYear}</span>
                  , {appName}
                </small>
              </CopyRight>
              <List>
                <ContainerLink>
                  <Point>·</Point>
                    <Item>
                      <FooterLink href="/service">
                        Servicio
                      </FooterLink>
                    </Item>
                </ContainerLink>
                <ContainerLink>
                  <Point>·</Point>
                    <Item>
                      <FooterLink href="/frequent-questions">
                        Preguntas Frequentes
                      </FooterLink>
                    </Item>
                </ContainerLink>
                <ContainerLink>
                  <Point>·</Point>
                    <Item>
                      <FooterLink href="/cookies-policy">
                        Política de cookies
                      </FooterLink>
                    </Item>
                </ContainerLink>
              </List>
            </ContainerTerms>
          </FooterStickyInMobile>
        <ContainerBottom>
          <FooterLink href="/" disableUnderLine><Logo /></FooterLink>
          <Button href="/contact" type={'light'}>Contactar</Button>
        </ContainerBottom>
      </Wrapper>
    </FooterStyle>
  );
};

export default Footer;
