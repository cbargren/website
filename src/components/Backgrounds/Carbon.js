import React from 'react';

export default ({ theme }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6">
    <rect width="6" height="6" fill={theme.backgroundSecondary} />
    <g id="c">
      <rect width="3" height="3" fill={theme.backgroundPrimary} />
      <rect y="1" width="3" height="2" fill={theme.backgroundTertiary} />
    </g>
    <use href="#c" x="3" y="3" />
  </svg>
);
