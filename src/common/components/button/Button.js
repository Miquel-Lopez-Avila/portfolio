import { ButtonWrapper, LinkWrapper } from './Button.styled';

const Button = ({ children, type, size, href, ...rest }) => (
  href
    ? (
      <LinkWrapper
        type={type}
        size={size}
        href={href}
        {...rest}
      >
        {children}
      </LinkWrapper>

    )
    : (
      <ButtonWrapper
        type={type}
        size={size}
        href={href}
        {...rest}
      >
        {children}
      </ButtonWrapper>
    )
);

export default Button;
