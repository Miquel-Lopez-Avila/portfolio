import React           from 'react';
import { ColoredText } from './Textcolored.styled';

const TextColored = ({ children, ...rest }) => {
  return (
    <ColoredText {...rest}>
      {children}
    </ColoredText>
  );
};

export default TextColored;
