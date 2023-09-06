import styled               from 'styled-components';
import { tablet, xDesktop } from 'application/styles/breakpoints';

export const Wrapper = styled.div`
  margin-bottom: 60px;

  ${tablet} {
    margin-bottom: 120px;
  }
`;

export const ContainerVerticalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  flex-wrap: wrap;

  ${tablet} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Content = styled.div`
  padding: 25px 0;

  ${tablet} {
    padding: 50px 0;

  }
  ${xDesktop} {
    padding: 100px 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${tablet} {
    flex-direction: row;
  }
`;

