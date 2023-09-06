import React       from 'react';
import { Wrapper } from './WrapperTitleWithUnderline.styled';

const WrapperTitleWithUnderline = ({ children, underline, underlineLeft, paddingBottom, marginBottom }) => {
  return (
    <Wrapper data-underline={underlineLeft ?? underline} data-underline-left={underlineLeft} underlineLeft={underlineLeft} paddingBottom={paddingBottom} marginBottom={marginBottom}>
      {children}
    </Wrapper>
  );
};

export default WrapperTitleWithUnderline;
