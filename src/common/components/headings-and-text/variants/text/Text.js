import React         from 'react';
import { TextStyle } from './Text.styled';

const Text = ({ children, color, fontSize, fontWeight, ...rest }) => {
  return (
    <TextStyle color={color} fontWeight={fontWeight} fontSize={fontSize} {...rest}>
      { children }
    </TextStyle>
  );
};

export default Text;
