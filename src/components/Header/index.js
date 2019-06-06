import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Nav, NavItem, Spacer } from '../Nav';

const NavWrapper = styled(Nav)`
  padding: 10px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

export default () => (
  <NavWrapper>
    <NavItem>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </NavItem>
    <Spacer />
    <NavItem>
      <Link to="/about">ABOUT</Link>
    </NavItem>
    <Spacer />
    <NavItem>
      <Link to="/resume">RESUME</Link>
    </NavItem>
    <Spacer />
    <NavItem>
      <Link to="/stats">STATS</Link>
    </NavItem>
  </NavWrapper>
);
