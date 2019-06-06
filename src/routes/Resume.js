import React from 'react';
import styled from 'styled-components';

const ResumeWrapper = styled.iframe`
  width: 100%;
  height: 900px;
`;

export default () => (
  <ResumeWrapper src="https://docs.google.com/document/d/e/2PACX-1vQIaPoB1jWcpFfgLv4LRvbp9Qyrw2dCCYdHT6qUggeT6nTqpPASIu_MpC7fvRydG1_LbK3JE2Tm4QXQ/pub?embedded=true" />
);
