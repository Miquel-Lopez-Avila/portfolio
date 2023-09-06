import styled from 'styled-components';
import ButtonWrapper   from 'common/components/button';
import { tablet }                         from 'application/styles/breakpoints';
import { ReactComponent as PaperPlaneIcon } from 'application/assets/svg/paper-plane.svg';

export const Wrapper = styled.div`
  position: sticky;
  bottom: 130px;
  left: 50%;
  z-index: 15;
  transform: translateX(-50%);
  width: fit-content;
  display: none;
  height: 0;

  ${tablet} {
    display: ${({ hideButton }) => hideButton ? 'none !important' : 'block'};
  }
`;

export const Button = styled(ButtonWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  padding: 14px 19px !important;
  gap: 8px;
`;

export const PaperPlane = styled(PaperPlaneIcon)`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.white};
  width: 20px;
`;
