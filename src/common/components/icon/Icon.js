import React from 'react';

const Icon = ({ type, ...rest }) => {
  const IconComponent = type;

  return (
    <IconComponent {...rest} />
  );
};

export default Icon;
