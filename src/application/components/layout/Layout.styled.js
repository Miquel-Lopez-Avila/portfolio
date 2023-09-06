import styled from 'styled-components';
import { device } from 'application/style/breakpoint';
import { changeThemeTime } from 'application/config/variables';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 5;

  @media ${device.tablet} {
    flex-direction: row;
    overflow: hidden;
  }

  & > * {
    transition: background-color ${changeThemeTime}s;
  }
`;
