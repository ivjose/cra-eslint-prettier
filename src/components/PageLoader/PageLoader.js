import React from 'react';
import { Spin } from 'antd';
import Styled from './styled';

const PageLoader = () => {
  return (
    <Styled.Wrapper>
      <Spin size="large" />
    </Styled.Wrapper>
  );
};

export default PageLoader;
