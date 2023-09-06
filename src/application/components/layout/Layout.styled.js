import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  &:before {
    width: 100%;
    height: calc(100% - 400px);
    content: "";
    position: absolute;
    top: 400px;
    z-index: -2;
    left: 0;
    background-image: linear-gradient(180deg,#fff,#f4f6fb,#fff);
  }
`;

