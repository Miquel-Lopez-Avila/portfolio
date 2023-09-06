import React          from 'react';
import { TitleStyle } from './Title.styled';

const Title = ({ children, color, fontSize, fontWeight, disableMarginBottom, ...rest }) => {
  return (
    <TitleStyle color={color} fontWeight={fontWeight} fontSize={fontSize} disableMarginBottom={disableMarginBottom} {...rest}>
      {children}
    </TitleStyle>
  );
};

export default Title;
