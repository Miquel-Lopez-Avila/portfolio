import styled, { css } from 'styled-components';
import { Form } from 'antd';

const horizontalLayout = css`
  flex-direction: row !important;
  width: 100%;

  .ant-form-item-label, .ant-form-item-control {
    display: flex;
    align-items: center;
    flex-basis: auto !important;
  }
`;

export const FormItemStyled = styled(Form.Item)`
  ${({ inline }) => inline && horizontalLayout};
`;
