import styled from 'styled-components';
import { tablet, desktop } from 'application/styles/breakpoints';

export const Wrapper = styled.div`
  flex: 1;
  margin-bottom: 70px;

  ${tablet} {
    margin-right: 90px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const ImageContainer = styled.div`
  img {
    max-width: 100%;
    height: 200px;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 25px;
  margin: 16px 0;

  ${desktop} {
    margin: 30px 0;
  }
`;

export const Description = styled.p`
  line-height: 24px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray};
`;
