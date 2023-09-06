import React                                           from 'react';
import { Description, ImageContainer, Title, Wrapper } from './VerticalCard.styled';

const VerticalCard = ({ title, description, image }) => {
  return (
    <Wrapper data-aos="fade-up">
      <ImageContainer>
        <img src={image} alt={title} />
      </ImageContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default VerticalCard;
