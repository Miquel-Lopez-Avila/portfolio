import { css }    from 'styled-components';
import { colors } from 'application/styles/utils';

export const InputGlobals = css`
  .ant-picker-ranges {
    text-align: center;
    display: flex;
    justify-content: center;

    li {
      margin: 0;
      button {
        padding: 0 10px;
        border-color: ${() => colors.primary};
        background: ${() => colors.primary};
      }
    }
  }

  .ant-input:hover {
    border-color: ${() => colors.primary} !important;
  }

  .ant-input:focus {
    border-color: ${() => colors.primary} !important;
  }

  .ant-input-affix-wrapper:hover {
    border-color: ${() => colors.primary};
  }

  .ant-input-prefix .anticon {
    font-size: 16px;
    margin-right: 2px;
  }

  .ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-focused {
    border-color: ${() => colors.primary};
  }
`;
