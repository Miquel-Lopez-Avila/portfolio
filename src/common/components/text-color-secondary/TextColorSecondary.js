import React              from 'react';
import { SecondaryColor } from './TextColorSecondary.styled';

const TextColorSecondary = ({ children }) => {
  return (
    <SecondaryColor>
      {children}
    </SecondaryColor>
  );
};

export default TextColorSecondary;
