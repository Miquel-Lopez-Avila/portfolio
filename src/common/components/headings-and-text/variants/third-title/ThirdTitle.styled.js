import styled from 'styled-components';

export const ThirdTitleStyled = styled.h3`
  color: ${({ theme, color }) => color ? color : theme.colors.gray};
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 400};
  font-size: ${({ fontSize }) => fontSize ? fontSize : '1.1rem'};
  margin-bottom: 15px;
`;
