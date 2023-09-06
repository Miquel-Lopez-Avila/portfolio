import styled, { css }          from 'styled-components';
import { mobile }               from 'application/styles/breakpoints';
import Link                     from '../link';

const primaryStyles = css`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};

  &:focus {
    background: ${({ theme }) => theme.colors.primaryLighten};
    border-color: ${({ theme }) => theme.colors.primaryLighten};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLighten};
    border-color: ${({ theme }) => theme.colors.primaryLighten};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primaryLighten};
    border-color: ${({ theme }) => theme.colors.primaryLighten};
  }
`;

const lightStyles = css`
  color: ${({ theme }) => theme.colors.black} !important;
  background: ${({ theme }) => theme.colors.white};

  &:focus {
    color: ${({ theme }) => theme.colors.primary} !important;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary} !important;
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`;

const lightSecondaryStyles = css`
  color: ${({ theme }) => theme.colors.white} !important;
  background: ${({ theme }) => theme.colors.secondary};
  transition: all .5s ease-in-out;
  transition: -ms-transform 0.25s ease,-webkit-transform 0.25s ease,transform 0.25s ease !important;

  &:hover {
    transform: scale(1.04) !important;
    box-shadow: 0 0 0 1px transparent, 0 0 0 4px transparent, 0 6px 16px rgba(0,0,0,0.12) !important;
  }
`;


const getColorStyles = (type, disabled) => {
  if (disabled) return '';
  if (type === 'light') return lightStyles;
  if (type === 'lightSecondary') return lightSecondaryStyles;
  return primaryStyles;
};

export const LinkWrapper = styled(Link)`
  padding: 0.3rem 1.4rem;
  border-radius: 4px;
  width: ${({ mobileFullWidth }) => mobileFullWidth === 'true' ? '100%' : 'auto'};
  ${({ type, disabled }) => getColorStyles(type, disabled)}
  border: ${({ disableBorder }) => disableBorder && 'none'};
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
  outline: none;
  text-decoration: none !important;

  ${mobile} {
    width: auto;
  }
`;

export const ButtonWrapper = styled.button`
  min-width: ${({ size }) => size === 'large' ? 150 : 100}px;
  padding: 0.3rem 1.4rem;
  border-radius: 4px;
  width: ${({ mobileFullWidth }) => mobileFullWidth === 'true' ? '100%' : 'auto'};
  ${({ type, disabled }) => getColorStyles(type, disabled)}
  border: ${({ disableBorder }) => disableBorder && 'none'};
  margin: 0;
  font-weight: 500;
  font-size: 0.9rem;
  outline: none;
  text-decoration: none !important;

  ${mobile} {
    width: auto;
  }
`;
