import styled from 'styled-components';

export const Wrapper = styled.ul`
  overflow: auto;
  margin-top: ${({ small }) => small ? 15 : 25}px;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const Item = styled.li`
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  padding-left: 50px;
  line-height: 30px;
  min-height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: ${({ small }) => small ? 0 : 8}px;
`;

export const Bullet = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  background: ${({ theme, small }) => !small ? theme.colors.secondary : 'none'};
  padding: 12px 16px;
  padding-left: ${({ small }) => small ? 10 : 16}px;
  border-radius: 50%;
  line-height: 20px;

  span {
    border-color: ${({ theme, small }) => small ? theme.colors.secondary : 'white'};
  }
`;
