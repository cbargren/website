import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Avatar from './Avatar';
import { Nav, NavItem } from './Nav';
import Social from './Social';
import ThemeToggle from '../containers/ThemeToggle';

const SidebarWrapper = styled.div`
  text-align: center;
`;

const AvatarWrapper = styled(Avatar)`
  margin-bottom: 8px;
`;

const NameWrapper = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: ${({ theme }) => theme.textColorHeader};
  margin-bottom: 8px;
`;

const Description = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: ${({ theme }) => theme.textColorHeaderAlt};
  margin-bottom: 8px;
`;

const NavWrapper = styled(Nav)`
  text-align: right;
`;

export default ({ className }) => (
  <SidebarWrapper className={className}>
    <AvatarWrapper />
    <NameWrapper>Chris Bargren</NameWrapper>
    <Description>Full Stack Web Developer/Architect</Description>
    <NavWrapper>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/about">About</Link>
      </NavItem>
    </NavWrapper>
    <hr />
    <div>
      <div>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        &nbsp;&nbsp;Gilbert, Arizona
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
        &nbsp;&nbsp;
        <a href="mailto:cbargren@gmail.com">cbargren@gmail.com</a>
      </div>
    </div>
    <hr />
    <Social />
    <p>
      <ThemeToggle />
    </p>
  </SidebarWrapper>
);
