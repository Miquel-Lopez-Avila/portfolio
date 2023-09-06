import React                        from 'react';
import { NotFound, Wrapper, Title } from './404.styled';

const Custom404 = () => {
  return (
    <Wrapper>
      <NotFound />
      <Title>La página solicitada no se ha encontrado</Title>
    </Wrapper>
  );
};

export default Custom404;
