import styled                           from 'styled-components';
import { mobileOnly, tablet, xDesktop } from 'application/styles/breakpoints';
import { ReactComponent as Arrow }      from 'application/assets/svg/chevron-forward-outline.svg';
import Container                        from "../container";

export const BannerContainer = styled.section`
  min-height: 392px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-top: 50px;
  width: 100%;

  ${mobileOnly} {
    padding: 45px 10px;
  }

  ${xDesktop} {
    padding-top: 0;
    position: relative;
    min-height: 500px;
  }
`;

export const Frame = styled.div`
  display: block;
  z-index: -1;
  background-color: ${({ theme }) => theme.backgroundColors.secondaryBanner};
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 800px;
  top: 0;
  left: 0;
  clip-path: polygon(0 0,100% 0,100% 50%,0 95%);

  ${tablet} {
    clip-path: polygon(0 0,100% 0,100% 40%,0 95%);
  }
`;

export const Flex = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 85%;

  ${tablet} {
    width: 60%;
  }
`;

export const Check = styled(Arrow)`
  color: ${({ theme }) => theme.colors.secondary};
  height: 30px;

  ${tablet} {
    height: 50px;
  }

  ${xDesktop} {
    height: 80px;
  }
`;

