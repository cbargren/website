import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import styled from 'styled-components';

// import Carbon from '../Backgrounds/Carbon';
// import Horizontal from '../Backgrounds/Horizontal';
// import Stripes from '../Backgrounds/Stripes';

// const Background = Carbon;
// const Background = Horizontal;
// const Background = Stripes;

export default styled.div`
  background: url("data:image/svg+xml,${({ theme, Background }) => {
    return encodeURIComponent(
      renderToStaticMarkup(<Background theme={theme} />)
    );
  }}");
  min-height: 100vh;
  color: ${({ theme }) => theme.textColor};
  transition: ease 200ms;

  & a:-webkit-any-link {
    color: ${({ theme }) => theme.textColorLink};

    &:hover {
      color: ${({ theme }) => theme.textColorLinkHover};
    }
  }
`;
