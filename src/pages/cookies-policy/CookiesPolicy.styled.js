import styled                             from 'styled-components';
import { colors }                         from 'application/styles/utils';
import { tablet }                         from 'application/styles/breakpoints';
import Section                            from 'common/components/section-wrapper';
import { ReactComponent as QuestionsImg } from 'application/assets/svg/cookie.svg';

export const Wrapper = styled(Section)`
  display: flex;
  flex-direction: row;
  text-align: left;
`;

export const Title = styled.h1`
  color: ${colors.black};
  font-weight: 800;
  text-align: left;
  font-size: 1.5rem;

  ${tablet} {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  color: ${colors.gray};
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  margin-bottom: 15px;
`;

export const Primary = styled.span`
  color: ${colors.primary};
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 80%;
`;

export const PageImage = styled(QuestionsImg)`
  max-height: 500px;
  max-width: 500px;
`;

export const TitleItem = styled.h1`
  color: ${colors.black};
  text-align: left;
  font-size: 1.2rem;

  ${tablet} {
    font-size: 1.4rem;
  }
`;

export const TitleDescription = styled.p`
  color: ${colors.gray};
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  margin-bottom: 15px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  ${tablet} {
    align-items: start;
    flex-direction: row;
  }
 `;
