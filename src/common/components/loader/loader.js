import React               from 'react';
import { Space, Spin }     from 'antd';
import { LoaderContainer } from "./loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
        <Spin size="large" />
    </LoaderContainer>
  );
};

export default Loader;
