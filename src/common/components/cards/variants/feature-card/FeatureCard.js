import React                                                                              from 'react';
import CheckList                                                                          from 'common/components/check-list';
import { Container, ContentWrapper, Description, ImageContainer, Title, Wrapper } from './FeatureCard.styled';

const FeatureCard = ({
   title,
   description,
   image,
   checks,
   reverted,
   actionTrackingEvent,
   ...rest
}) => {
  return (
    <Container {...rest}>
      <ContentWrapper>
        <Wrapper reverted={reverted}>
          <section>
            <Title>{title}</Title>
            <Description>{description}</Description>
            {checks && <CheckList checks={checks} />}
          </section>
          <ImageContainer reverted={reverted}>
            <img src={image} alt={title} />
          </ImageContainer>
        </Wrapper>
      </ContentWrapper>
    </Container>
  );
};

export default FeatureCard;
