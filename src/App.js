import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import theme from './themes/light';
import { Nav, NavItem, Spacer } from './components/Nav';
import Routes from './routes';
import Sidebar from './components/Sidebar';

const AppLayout = styled.div`
  background-color: ${({ theme }) => theme.backgroundPrimary};
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

const AppWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div`
  flex: 0 0 100%;
  padding: 10px 10px 0 10px;
`;

const NavWrapper = styled(Nav)`
  padding: 10px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

const SidebarWrapper = styled(Sidebar)`
  flex: 0 0 250px;
  margin: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

const ContentWrapper = styled.main`
  flex: 1 1;
  margin: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <AppLayout>
            <AppWrapper>
              <HeaderWrapper>
                <NavWrapper>
                  <NavItem>
                    <Link to="/">HOME</Link>
                  </NavItem>
                  <Spacer />
                  <NavItem>
                    <Link to="/About">ABOUT</Link>
                  </NavItem>
                </NavWrapper>
              </HeaderWrapper>
              <SidebarWrapper />
              <ContentWrapper>
                <Routes />
              </ContentWrapper>
            </AppWrapper>
          </AppLayout>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
