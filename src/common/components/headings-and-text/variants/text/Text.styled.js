import styled from 'styled-components';

export const TextStyle = styled.p`
  color: ${({ theme, color }) => color ? color : theme.colors.gray};
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 400};
  font-size: ${({ fontSize }) => fontSize ? fontSize : '0.9rem'};
`;
