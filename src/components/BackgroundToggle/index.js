import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import styled from 'styled-components';
import Stripes from '../Backgrounds/Stripes';
import Carbon from '../Backgrounds/Carbon';
import Horizontal from '../Backgrounds/Horizontal';

const BackgroundButton = styled(ToggleButton)`
  background: url("data:image/svg+xml,${({ theme, Background }) => {
    return encodeURIComponent(
      renderToStaticMarkup(<Background theme={theme} />)
    );
  }}");
  && {
    border-width: 2px;
    min-width: 50px;
    opacity: 0.6;
    &:hover {
      opacity: 0.8;
    }

    &.Mui-selected {
      opacity: 1;
    }
  }
`;

export default ({
  background = 'stripes',
  setBackground = (...args) => console.log(args)
}) => (
  <ToggleButtonGroup
    value={background}
    exclusive
    onChange={(e, value) => setBackground(value)}
  >
    <BackgroundButton Background={Stripes} value="stripes" />
    <BackgroundButton Background={Horizontal} value="horizontal" />
    <BackgroundButton Background={Carbon} value="carbon" />
  </ToggleButtonGroup>
);
