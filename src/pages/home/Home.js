import React                                                  from 'react';
import SectionWrapper                                         from 'common/components/section-wrapper';
import Banner                                                 from './components/banner/Banner';
import SubTitle                                               from 'common/components/headings-and-text/variants/sub-title';
import Text                                                   from 'common/components/headings-and-text/variants/text';
import Title          from 'common/components/headings-and-text/variants/title';
import MobileDeviceSVG                                        from 'application/assets/devices/banner-mobile.svg';
import DesktopDevicesSVg                                        from 'application/assets/devices/banner-desktop.svg';
import LogoBlueSVG    from 'application/assets/logos/logo-blue.svg';
import SyntacticSugar from 'application/assets/png/syntactic_sugar.png';
import Latexa from 'application/assets/png/latexa.png';
import ThirdTitle                                             from 'common/components/headings-and-text/variants/third-title';
import WrapperTitleWithUnderline                              from 'common/components/wrapper-tiltles-with-underline';
import VerticalCard from 'common/components/cards/variants/vertical-card';
import ClientsCard  from 'common/components/cards/variants/clients-card';
import FeatureCard  from 'common/components/cards/variants/feature-card';
import {
  Wrapper,
  Content,
  ContainerVerticalCard,
  ContainerClients,
  ClientSection,
  EmptySpace, ContainerFeatures
} from './Home.styled';

const Home = () => {
  return (
    <Wrapper>
      <Banner />
      <Content>
        <SectionWrapper>
          <WrapperTitleWithUnderline underline>
            <Title>¿Que es lo que ofrecemos?</Title>
            <ThirdTitle>thirdTitle</ThirdTitle>
          </WrapperTitleWithUnderline>
          <ContainerVerticalCard>
            <VerticalCard title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
            <VerticalCard title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
            <VerticalCard title={'Reduce la carga de trabajo'} image={MobileDeviceSVG} description={'Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos Hemos estado trabajando con todos ellos'} />
          </ContainerVerticalCard>
        </SectionWrapper>
        <SectionWrapper>
          <WrapperTitleWithUnderline underline>
            <Title>Marcas</Title>
            <ThirdTitle>Estamos trabajando con las siguientes marcas</ThirdTitle>
          </WrapperTitleWithUnderline>
          <ContainerClients>
            <ClientSection>
              <ClientsCard image={SyntacticSugar.src} title={'xx'}/>
              <EmptySpace />
            </ClientSection>
            <ClientSection>
              <ClientsCard image={LogoBlueSVG} title={'xx'}/>
              <EmptySpace />
              <EmptySpace />
            </ClientSection>
            <ClientSection>
              <ClientsCard image={Latexa.src} title={'xx'}/>
              <EmptySpace />
            </ClientSection>

          </ContainerClients>
        </SectionWrapper>
        <SectionWrapper>
          <WrapperTitleWithUnderline underline>
            <Title>Redes sociales</Title>
          </WrapperTitleWithUnderline>
          <ContainerFeatures>
            <FeatureCard  title={'Programación flexible'} image={DesktopDevicesSVg} description={'Planea todas las citas de tu clínica con nuestra agenda. Configura la disponibilidad de cada doctor y visualiza múltiples agendas al mismo tiempo.\n'} checks={[{ text: 'sadfsd', small: true }]} />
            <FeatureCard  title={'Programación flexible'} image={DesktopDevicesSVg} description={'dsfdsd'} checks={[{ text: 'sadfsd'}]} reverted />
          </ContainerFeatures>
        </SectionWrapper>
      </Content>
    </Wrapper>
  );
};

export default Home;
