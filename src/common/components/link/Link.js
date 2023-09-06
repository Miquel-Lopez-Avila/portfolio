import NextLink    from 'next/link';
import { Wrapper } from './Link.styled';

const Content = ({ children, ...props }) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
);

const Link = ({ children, className, onClick, ...props }) => {
  const handleClick = (event) => {
    if (onClick) onClick(event);
  };

  return (
    <NextLink {...props} passHref onClick={handleClick}>
      <Content className={className}>
        {children}
      </Content>
    </NextLink>
  );
};

export default Link;
