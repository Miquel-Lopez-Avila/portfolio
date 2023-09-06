import React                               from 'react';
import Title                               from '../headings-and-text/variants/title';
import SubTitle                            from '../headings-and-text/variants/sub-title';
import { BannerContainer, Content, Frame, Flex, Check, ContainerContent } from './Secondary.styled';

const SecondaryBanner = ({ title, subTitle }) => {
  return (
    <BannerContainer>
      <Content>
        <ContainerContent>
          <Flex><Title color={'white'} disableMarginBottom fontSize={'60px !important'}>{title}</Title><Check /></Flex>
          <SubTitle color={'white'} fontSize={'30px !important'}>{subTitle}</SubTitle>
        </ContainerContent>
      </Content>
      <Frame />
    </BannerContainer>
  );
};

export default SecondaryBanner;
