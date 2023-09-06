import styled                          from "styled-components";

export const ColoredText = styled.span`
  color: ${({ theme, primary }) => primary ? theme.colors.primary : theme.colors.secondary};
`;
