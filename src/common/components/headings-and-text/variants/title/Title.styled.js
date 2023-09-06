import styled               from 'styled-components';
import { tablet, xDesktop } from 'application/styles/breakpoints';

export const TitleStyle = styled.h1`
  color: ${({ theme, color }) => color ? color : theme.colors.black};
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 800};
  font-size: 1.5rem;
  margin-bottom: ${({ disableMarginBottom }) => disableMarginBottom ? 'unset': '10px'};

  ${tablet} {
    font-size: 1.7rem;
  }

  ${xDesktop} {
    font-size: ${({ fontSize }) => fontSize ? fontSize : '2rem'};
  }
`;
