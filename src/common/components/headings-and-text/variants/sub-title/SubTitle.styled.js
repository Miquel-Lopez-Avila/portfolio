import styled               from 'styled-components';
import { tablet, xDesktop } from 'application/styles/breakpoints';

export const SubTitleStyle = styled.h2`
  color: ${({ theme, color }) => color ? color : theme.colors.gray};
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 500};
  font-size: 1rem;
  margin-bottom: ${({ disableMarginBottom }) => disableMarginBottom ? '0' : '15px'};

  ${tablet} {
    font-size: 1.1rem;
  }

  ${xDesktop} {
    font-size: ${({ fontSize }) => fontSize ? fontSize : '1.2rem'};
  }
`;
