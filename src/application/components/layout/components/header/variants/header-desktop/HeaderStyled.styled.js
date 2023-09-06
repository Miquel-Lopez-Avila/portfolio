import styled        from 'styled-components';
import Link          from 'common/components/link';
import ButtonWrapper from 'common/components/button';
import { tablet }    from 'application/styles/breakpoints';
import ContainerStyle     from 'common/components/container';

export const Absolute = styled.header`
  position: absolute;
  z-index: 11;
  top: 0;
  width: 100%;
  padding: 0.5rem 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 3rem;
`;

export const Container = styled(ContainerStyle)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBar = styled.nav`
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  display: none;

  ${tablet} {
    display: flex;
  }
`;

export const WrapperNavigation = styled.div`
  width: 135px;
  display: flex;
  gap: 2.5rem;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled(ButtonWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: ${({ isSelectedTab }) => isSelectedTab ? 'underline' : 'none'};

  &:hover{
    text-decoration: ${({ disableUnderLine }) => disableUnderLine ? 'none' : 'underline !important'};
  }
`;
