import styled from 'styled-components';
import { xDesktopStartWidth, xxDesktopStartWidth, tablet, xxDesktop } from 'application/styles/breakpoints';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  max-width: ${xDesktopStartWidth}px;

  ${tablet} {
    padding: 0 15px;
  }

  ${xxDesktop} {
    max-width: ${xxDesktopStartWidth}px;
  }
`;
