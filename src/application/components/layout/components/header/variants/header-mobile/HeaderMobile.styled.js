import styled                                 from 'styled-components';
import {
  HomeOutlined,
}                                             from '@ant-design/icons';
import { ReactComponent as BusinessOutlined } from 'application/assets/svg/business-outline.svg';
import { ReactComponent as PaperPlaneIcon }   from 'application/assets/svg/paper-plane-outline.svg';
import Link                                   from 'common/components/link';
import { tablet }                             from 'application/styles/breakpoints';
import ContainerStyle                         from 'common/components/container';

export const Wrapper = styled.header`
  position: sticky;
  z-index: 11;
  bottom: 0;
  width: 100%;
  padding: 0.6rem 0;
  background-color: ${({ theme }) => theme.backgroundColors.white};
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  display: block;

  ${tablet} {
    display: none;
  }
`;

export const Container = styled(ContainerStyle)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0px !important;
  justify-content: center;
  align-items: center;
  max-width: 20%;
`;

export const HomeIcon = styled(HomeOutlined)`
  width: 24px;
  height: 24px;
  font-size: 24px;
  font-weight: 800;
`;

export const PaperPlane = styled(PaperPlaneIcon)`
  width: 24px;
  height: 24px;
  font-size: 24px;
  font-weight: 800;
`;

export const BusinessIcon = styled(BusinessOutlined)`
  width: 26px;
  height: 26px;
  font-size: 26px;
  font-weight: 800;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.7rem;
  font-weight: 600;
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    text-decoration: none;
  }

  & * {
    color: ${({ $isSelectedTab, theme }) => $isSelectedTab ? theme.colors.primary : theme.colors.black};
  }

  &:hover * {
    color: ${({ $isSelectedTab, theme}) => $isSelectedTab ? theme.colors.primary : theme.colors.gray};
  }
`;
