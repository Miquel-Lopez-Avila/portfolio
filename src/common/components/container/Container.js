import { Wrapper } from './Container.styled';

const Container = ({ children, ...props }) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
);

export default Container;
