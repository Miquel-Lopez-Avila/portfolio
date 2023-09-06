import styled     from 'styled-components';
import Link       from 'common/components/link';
import { tablet } from 'application/styles/breakpoints';
import Container  from 'common/components/container';

export const Footer = styled.footer`
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  border-top: 1px solid #DDDDDD;
  border-bottom: 1px solid #DDDDDD;
  position: sticky;
  z-index: 12;
  bottom: 0;
  padding: 0.9rem 0;
  display: none;

  ${tablet} {
    display: block;
  }
`;

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  position: relative;
`;

export const CopyRight = styled.p`
  font-size: 0.8rem;
`;

export const ContainerTerms = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Item = styled.li`
  list-style: none;
`;

export const Point = styled.span`
  font-weight: 200;
`;

export const FooterLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;
