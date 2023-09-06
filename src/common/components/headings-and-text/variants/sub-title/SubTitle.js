import React             from 'react';
import { SubTitleStyle } from './SubTitle.styled';

const SubTitle = ({ children, color, fontSize, fontWeight, disableMarginBottom, ...rest }) => {
  return (
    <SubTitleStyle color={color} fontWeight={fontWeight} disableMarginBottom={disableMarginBottom} fontSize={fontSize} {...rest}>
      { children }
    </SubTitleStyle>
  );
};

export default SubTitle;
