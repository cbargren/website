import React from 'react';

export default ({ theme }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="90" height="9">
    <rect width="90" height="9" fill={theme.backgroundSecondary} />
    <rect width="90" height="2" fill={theme.backgroundPrimary} />
    <rect y="2" width="90" height="3" fill={theme.backgroundTertiary} />
  </svg>
);
