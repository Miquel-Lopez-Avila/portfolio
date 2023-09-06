import React       from 'react';
import { Section } from './SectionWrapper.styled';

const SectionWrapper = ({ children, ...rest }) => {
  return (
    <Section {...rest}>
      {children}
    </Section>
  );
};

export default SectionWrapper;
