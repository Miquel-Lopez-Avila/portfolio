import React                     from 'react';
import SecondaryBanner           from 'common/components/secondary-banner/SecondaryBanner';
import SectionWrapper            from 'common/components/section-wrapper';
import WrapperTitleWithUnderline from 'common/components/wrapper-tiltles-with-underline';
import Title                     from 'common/components/headings-and-text/variants/title';
import ThirdTitle                from 'common/components/headings-and-text/variants/third-title';
import {
  ContainerVerticalCard, Content, Flex, Wrapper
}                                from './Enterprise.styled';
import VerticalCard              from 'common/components/cards/variants/vertical-card';
import MobileDeviceSVG           from 'application/assets/devices/banner-mobile.svg';

const Enterprise = () => {
  return (
    <Wrapper>
      <SecondaryBanner title={'Sobre nosotros'} subTitle={'Contactanos para saber más!'} />
      <Content>
        <SectionWrapper>
          <WrapperTitleWithUnderline underline>
            <Title>¿Que es lo que ofrecemos?</Title>
            <ThirdTitle>thirdTitle</ThirdTitle>
          </WrapperTitleWithUnderline>
          <ContainerVerticalCard>
            <Flex>
              <VerticalCard title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
              <VerticalCard title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
              <VerticalCard title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
            </Flex>
           <Flex>
             <VerticalCard width={'50%'} title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
             <VerticalCard width={'50%'} title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
             <VerticalCard width={'50%'} title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
           </Flex>
          </ContainerVerticalCard>
        </SectionWrapper>
        <SectionWrapper>
          <WrapperTitleWithUnderline underline>
            <Title>¿Que es lo que ofrecemos?</Title>
            <ThirdTitle>thirdTitle</ThirdTitle>
          </WrapperTitleWithUnderline>
          <ContainerVerticalCard>
            <Flex>
              <VerticalCard title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
              <VerticalCard title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
              <VerticalCard title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
            </Flex>
            <Flex>
              <VerticalCard width={'50%'} title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
              <VerticalCard width={'50%'} title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
              <VerticalCard width={'50%'} title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
            </Flex>
          </ContainerVerticalCard>
        </SectionWrapper>
      </Content>
    </Wrapper>
  );
};

export default Enterprise;
