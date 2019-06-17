import { createSelector } from 'reselect';
import dark from '../../../themes/dark';
import light from '../../../themes/light';

import Carbon from '../../../components/Backgrounds/Carbon';
import Horizontal from '../../../components/Backgrounds/Horizontal';
import Stripes from '../../../components/Backgrounds/Stripes';

export const getUIDomain = state => state.ui;

export const getThemeProp = createSelector(
  getUIDomain,
  ui => ui.theme
);

export const getTheme = createSelector(
  getThemeProp,
  theme => (theme === 'dark' ? dark : light)
);

export const getBackgroundProp = createSelector(
  getUIDomain,
  ui => 'carbon'
);

export const getBackground = createSelector(
  getBackgroundProp,
  background =>
    background === 'stripes'
      ? Stripes
      : background === 'horizontal'
      ? Horizontal
      : Carbon
);
