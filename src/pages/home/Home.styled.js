import styled               from 'styled-components';
import { tablet, xDesktop } from 'application/styles/breakpoints';

export const ContainerVerticalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  ${tablet} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const ContainerClients = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  gap: 30px;

  ${tablet} {
    gap: 10px;
    flex-direction: row;
  }
`;

export const EmptySpace = styled.span`
  ${tablet} {
    height: 150px;
  }
`;

export const ClientSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerFeatures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Wrapper = styled.div`
  overflow-x: hidden;
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
