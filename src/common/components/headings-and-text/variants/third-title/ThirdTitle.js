import React                from 'react';
import { ThirdTitleStyled } from './ThirdTitle.styled';

const ThirdTitle = ({ children, color, fontSize, fontWeight, ...rest }) => {
  return (
    <ThirdTitleStyled color={color} fontWeight={fontWeight} fontSize={fontSize} {...rest}>
      {children}
    </ThirdTitleStyled>
  );
};

export default ThirdTitle;
