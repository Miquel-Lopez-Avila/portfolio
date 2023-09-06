import styled from 'styled-components';

const Check = styled.span`
  display: inline-block;
  transform: rotate(45deg);
  height: 13px;
  width: 7px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
  border-right: 3px solid ${({ theme }) => theme.colors.secondary};
`;

export default Check;
