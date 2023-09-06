import styled, { css, keyframes }                from 'styled-components';
import { desktop, mobileOnly, tablet, xDesktop } from 'application/styles/breakpoints';
import Container                                 from 'common/components/container';
import ButtonWrapper                              from 'common/components/button';

const translateAndRotateIn = keyframes`
  0% { transform: translate(25%, 25%) rotate(45deg); }
  100% { transform: translate(100%, 100%) rotate(15deg); }
`;

const translateAndRotateOut = keyframes`
  0% { transform: translate(100%, 100%) rotate(15deg); }
  100% { transform: translate(25%, 25%) rotate(45deg); }
`;

export const BannerContainer = styled.section`
  position: relative;
  color: white;
  padding: 30px 0 50px;

  ${tablet} {
    background-color: inherit;
    padding: 64px 0;
  }

  ${xDesktop} {
    min-height: 700px;
  }
`;

export const Frame = styled.div`
  display: block;
  z-index: -1;
  background-color: ${({ theme }) => theme.colors.primary};
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 800px;
  top: 0;
  left: 0;
  clip-path: polygon(0 0,100% 0,100% 70%,0 95%);

  ${tablet} {
    clip-path: polygon(0 0,100% 0,100% 60%,0 95%);
  }
`;

export const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  svg {
    width: 100%;
  }

  ${mobileOnly} {
    padding: 45px 10px;
  }

  ${xDesktop} {
    padding-top: 0;
    position: relative;
    min-height: 500px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${tablet} {
    width: 45%;
    justify-content: left;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  z-index: 11;
  align-items: end;
  justify-content: center;
  text-align: center;
  margin-top: 35px;
  min-height: 160px;

  ${tablet} {
    min-height: 364px;
  }

  ${xDesktop} {
    display: block;
    margin-top: 0;
    width: 58%;
    min-height: 500px;
    margin-left: 20px;
  }
`;

const imageStyle = css`
  opacity: 1 !important;
  position: relative;
  min-height: 100%;
  filter: drop-shadow(2px 4px 4px rgb(0 0 0 / 20%));

  & > img {
    vertical-align: middle;
    width: 100%;
  }

  ${xDesktop} {
    position: absolute;
  }
`;

export const MobileDevice = styled.div`
  ${imageStyle};
  width: 17%;
  margin-left: 0;
  margin-bottom: 24px;

  ${tablet} {
    width: 15%;
    max-width: 50%;
  }

  ${xDesktop} {
    min-width: 220px;
    top: 100px;
    left: 0;
    z-index: 1;
  }
`;
export const DesktopDevice = styled.div`
  ${imageStyle};
  width: 88%;
  padding-right: 5px;

  ${tablet} {
    width: 92%;
    max-width: 70%;
    padding-right: 0;
  }

  ${xDesktop} {
    min-width: 1000px;
    top: 24px;
    left: 212px;
  }
`;

export const Info = styled.div`
  text-align: center;
  display: flex;
  z-index: 50;
  flex-direction: column;
  align-items: center;

  ${desktop} {
    max-width: 42%;
  }

  ${xDesktop} {
    width: 42%;
    align-items: flex-start;
    text-align: left;
  }
`;

export const Button = styled(ButtonWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  margin-top: 15px;
  height: 50px;
`;


const imageStyleSocialMedia = css`
  position: absolute;
  opacity: 0.7;
`;

export const PinterestImg = styled.img`
  ${imageStyleSocialMedia};
  top: 75%;
  left: 5%;
  width: 20px;
  display: none;
  animation: ${translateAndRotateIn} 10s ease alternate infinite;

  ${tablet} {
    display: block;
  }
`;

export const InstagramImg = styled.img`
  ${imageStyleSocialMedia};
  top: 35%;
  left: 72%;
  width: 32px;
  display: none;
  animation: ${translateAndRotateIn} 10s ease alternate infinite;

  ${tablet} {
    display: block;
    top: 10%;
  }

  ${xDesktop} {
    left: 30%;
  }
`;

export const ToothPasteImg = styled.img`
  ${imageStyleSocialMedia};
  top: 10%;
  left: 25%;
  width: 32px;
  display: none;
  animation: ${translateAndRotateOut} 10s ease alternate infinite;

  ${tablet} {
    display: block;
    top: 20%;
    left: 18%;
  }

  ${xDesktop} {
    top: 75%;
    left: 25%;
  }
`;

export const FaceBookImg = styled.img`
  ${imageStyleSocialMedia};
  top: 10%;
  left: 15%;
  width: 20px;
  display: none;

  ${tablet} {
    display: block;
  }

  ${xDesktop} {
    top: 20%;
  }
`;

export const TikTokImg = styled.img`
  ${imageStyleSocialMedia};
  top: 10%;
  left: 90%;
  width: 20px;
  display: none;

  ${tablet} {
    display: block;
    left: 50%;
  }
`;

