import styled     from 'styled-components';
import { ReactComponent as NotFoundSVG } from 'application/assets/svg/logo-instagram.svg';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  min-height: calc(100vh - 64px - 233px - 50px);
`;

export const NotFound = styled(NotFoundSVG)`
  width: 20%;
  object-fit: cover;
  height: 20%;
`;

export const Title = styled.h1`

`;
