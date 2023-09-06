import styled from 'styled-components';
import { changeThemeTime } from 'application/config/variables';
import { device } from 'application/style/breakpoint';

export const Wrapper = styled.div`
  z-index: 6;
  display: block;

  @media ${device.tablet} {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 5px;
  margin-top: 12px;
  padding: 0;
  list-style: none;
  justify-content: center;
`;

export const Item = styled.li`
  cursor: pointer;
`;

export const Link = styled.a`
  cursor: pointer;
`;
