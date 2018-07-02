import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import styled from 'styled-components';

const Stripes = ({ theme }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
    <rect width="10" height="10" fill={theme.backgroundPrimary} />
    <path
      d="M0 0L10 10ZM10 0L0 10Z"
      strokeWidth="1"
      stroke={theme.backgroundSecondary}
    />
  </svg>
);

const Carbon = ({ theme }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6">
    <rect width="6" height="6" fill="#eee" />
    <g id="c">
      <rect width="3" height="3" fill="#e6e6e6" />
      <rect y="1" width="3" height="2" fill="#d8d8d8" />
    </g>
    <use href="#c" x="3" y="3" />
  </svg>
);

export default styled.div`
  background: url("data:image/svg+xml,${({ theme }) =>
    encodeURIComponent(renderToStaticMarkup(<Carbon theme={theme} />))}");
  height: 100vh;
  width: 100vw;
  color: ${({ theme }) => theme.textColor};
  transition: ease 200ms;

  & a:-webkit-any-link {
    color: ${({ theme }) => theme.textColorLink};

    &:hover {
      color: ${({ theme }) => theme.textColorLinkHover};
    }
  }
`;
