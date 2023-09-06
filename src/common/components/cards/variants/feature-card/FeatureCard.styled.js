import styled from 'styled-components';
import { tablet } from 'application/styles/breakpoints';

export const ContentWrapper = styled.article`
  margin-bottom: 60px;

  ${tablet} {
    margin-bottom: 120px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  section {
    flex: 1;
  }

  img {
    margin-top: 30px;
    min-width: 50%;
    max-width: 100%;
  }

  ${tablet} {
    align-items: center;
    flex-direction: ${({ reverted }) => reverted ? 'row-reverse' : 'row'};

    img {
      margin-top: 0;
    }
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 30px;
`;

export const ImageContainer = styled.div`
  max-width: 100%;
  min-width: 100%;
  text-align: center;
  filter: drop-shadow(2px 4px 4px rgb(0 0 0 / 20%));

  ${tablet} {
    max-width: 62%;
    min-width: 62%;
    padding: ${({ reverted }) => reverted ? '0 30px 0 0' : '0 0 0 30px'};
  }
`;

export const Description = styled.div`
  margin-top: 30px;
  max-width: 400px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Container = styled.div`
  width: 100%;
`;
