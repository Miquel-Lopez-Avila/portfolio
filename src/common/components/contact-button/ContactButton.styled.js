import styled, { css, keyframes }           from 'styled-components';
import { ReactComponent as PaperPlaneIcon } from 'application/assets/svg/paper-plane.svg';
import { tablet }                 from 'application/styles/breakpoints';
import Link                                 from '../link';

const OutIn = keyframes`
  0% {
    bottom: 80px;
    left: calc(50% - 105px);
  }
  100% {
    bottom: calc(100vh - 70px);
    left: calc(20% - 20px);
  }
`;

const inOut = keyframes`
  0% {
    left: calc(20% - 20px);
    bottom: calc(100vh - 70px);
  }
  100% {
    bottom: 80px;
    left: calc(50% - 105px);
  }
`;

export const Wrapper = styled.span`
  position: relative;
  height: 50px;
  padding: 20px 0;
  box-sizing: border-box;
  text-align: center;
  width: ${({ isFloating }) => !isFloating ? '126px': '210px' };
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100vh
`;

export const FixedButtonStyle = css`
  position: fixed;
  z-index: 9;
  height: 50px;
  padding: 22px 17px;
  visibility: visible;
  border-radius: 9999px;
  width: 210px;
  transform: translateZ(0);
  bottom: 15px;
  left: calc(50% - 105px);
  transition: all .5s ease-in-out;
  background-color: ${({ theme }) => theme.colors.secondary};

  color: ${({ theme }) => theme.colors.white} !important;
  background: ${({ theme }) => theme.colors.secondary};

  &:hover {
    transition: -ms-transform 0.25s ease,-webkit-transform 0.25s ease,transform 0.25s ease !important;
    color: ${({ theme }) => theme.colors.white} !important;
    transform: scale(1.04) !important;
    box-shadow: 0 0 0 1px transparent, 0 0 0 4px transparent, 0 6px 16px rgba(0,0,0,0.12) !important;
  }
`;

export const Button = styled(Link)`
  position: absolute;
  width: 126px;
  margin: 0 auto;
  bottom: calc(100vh - 70px);
  left: 0;
  transition: all .5s ease-in-out;
  visibility: visible;
  overflow: hidden;

  font-size: 0.9rem;
  font-weight: 500;
  outline: none;
  text-decoration: none !important;
  transform: translateZ(0);

  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  padding: 14px 19px !important;

  color: ${({ theme }) => theme.colors.black} !important;
  background: ${({ theme }) => theme.colors.white};

  &:focus {
    color: ${({ theme }) => theme.colors.primary} !important;
  }

  &:hover {
    transition: unset;
    color: ${({ theme }) => theme.colors.primary} !important;
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary} !important;
  }

  ${tablet} {
    ${({ isFloating }) => isFloating && FixedButtonStyle}
  }
`;

export const PaperPlane = styled(PaperPlaneIcon)`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.white};
  height: 20px;
  width: 20px;
  flex: 1;
  margin-left: 8px;
`;
