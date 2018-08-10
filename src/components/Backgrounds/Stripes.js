import React from 'react';

export default ({ theme }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
    <rect width="10" height="10" fill={theme.backgroundPrimary} />
    <path
      d="M0 0L10 10ZM10 0L0 10Z"
      strokeWidth="1"
      stroke={theme.backgroundSecondary}
    />
  </svg>
);
