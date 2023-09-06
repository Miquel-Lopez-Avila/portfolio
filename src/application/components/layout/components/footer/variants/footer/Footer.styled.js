import styled                              from 'styled-components';
import { ReactComponent as InstagramIcon } from 'application/assets/svg/logo-instagram.svg';
import { ReactComponent as FaceBookIcon }  from 'application/assets/svg/logo-facebook.svg';
import { ReactComponent as GmailIcon }     from 'application/assets/svg/mail-outline.svg';
import { mobile, tablet }                  from 'application/styles/breakpoints';
import ButtonWrapper                       from 'common/components/button';
import Link                                from 'common/components/link';
import Container                           from 'common/components/container';

export const Footer = styled.footer`
  width: 100%;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 20px;
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColors.footer};
`;

export const Wrapper = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;

  ${tablet} {
    display: flex;
    justify-content: space-between;
    flex-direction: row !important;
  }
`;

export const ResourcesContainer = styled.div`
`;

export const LeftInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;


export const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${({ theme }) => `1px solid ${theme.colors.white}`};
  padding-top: 1.5rem;
`;

export const FooterSentence = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Sentence = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 0.6rem;
`;

export const Instagram = styled(InstagramIcon)`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.white};
  width: 25px;
`;

export const Button = styled(ButtonWrapper)`
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FacebookIcon = styled(FaceBookIcon)`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.white};
  width: 25px;
`;

export const Gmail = styled(GmailIcon)`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  width: 30px;
`;

export const ContainerResources = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  ${mobile} {
    flex-direction: row;
  }
`;

export const ListResources = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${tablet} {
    width: 200px;
  }
`;

export const TitleResources = styled.li`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ItemResources = styled.li`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterStickyInMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.white};

  ${tablet} {
    display: none;
  }
`;

export const CopyRight = styled.p`
  font-size: 0.8rem;
`;

export const ContainerTerms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;

  ${tablet} {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  ${tablet} {
    flex-direction: row;
  }
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 5px;
  text-align: left;
  width: 100%;
`;

export const FooterLink = styled(Link)`
  font-size: 0.8rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  &:hover{
    text-decoration: ${({ disableUnderLine }) => disableUnderLine ? 'none' : 'underline !important'};
  }
`;

export const Point = styled.span`
  font-weight: 200;
`;

export const ContainerLink = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
