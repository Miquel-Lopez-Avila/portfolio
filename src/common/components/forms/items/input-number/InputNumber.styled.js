import styled from 'styled-components';
import { InputNumber } from 'antd';

export const InputNumberWrapper = styled(InputNumber)`
  width: 100%;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus, &.ant-input-number-focused {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
