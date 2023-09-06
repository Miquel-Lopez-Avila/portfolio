import React from 'react';
import Title from 'common/components/headings-and-text/variants/title';
import SubTitle from 'common/components/headings-and-text/variants/sub-title';
import Text from 'common/components/headings-and-text/variants/text';
import MobileDeviceSVG from 'application/assets/devices/banner-mobile.svg';
import DesktopDeviceSVG   from 'application/assets/devices/banner-desktop.svg';
import Pinterest   from 'application/assets/social-media/logo-pinterest.svg';
import Instagram   from 'application/assets/social-media/logo-instagram.svg';
import FaceBook   from 'application/assets/social-media/logo-facebook.svg';
import TikTok   from 'application/assets/social-media/logo-tiktok.svg';
import TextColorSecondary from 'common/components/text-color-secondary';
import {
  BannerContainer,
  Frame,
  Content,
  ImageContainer,
  MobileDevice,
  DesktopDevice,
  Info,
  PinterestImg, InstagramImg, FaceBookImg, TikTokImg, Button
} from './Banner.styled';

const Banner = () => {
  return (
    <BannerContainer>
      <Content>
          <Info>
            <Title color={'white'} fontSize={''} fontWeight={''}>¿Sabías que Las marcas que utilizan los medios sociales tienen un 45% más de impacto en los clientes?</Title>
            <SubTitle color={'white'} fontSize={''} fontWeight={''}>Gestionamos!! tus <TextColorSecondary>redes sociales</TextColorSecondary></SubTitle>
            <Text color={'white'} fontSize={''} fontWeight={''}>¿Te apuntas?</Text>
            <Button href="/contact" type={'light'}>
              Contactanos
            </Button>
          </Info>
        <ImageContainer>
          <MobileDevice data-aos="fade-up" data-aos-duration={1000}>
            <img src={MobileDeviceSVG} alt={'syntactic_sugar mobile instagram'}/>
          </MobileDevice>
          <DesktopDevice  data-aos="fade-up">
            <img src={DesktopDeviceSVG} alt={'syntactic_sugar desktop instagram'} />
          </DesktopDevice>
        </ImageContainer>
      </Content>
      <Frame />
      <PinterestImg src={Pinterest} alt={'Pinterest'} />
      <InstagramImg src={Instagram} alt={'Instagram'}/>
      <FaceBookImg src={FaceBook} alt={'Facebook'}/>
      <TikTokImg src={TikTok} alt={'Linkedin'} />
    </BannerContainer>
  );
};

export default Banner;
