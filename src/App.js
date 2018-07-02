import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import AppLayout from './components/AppLayout';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Routes from './routes';
import theme from './themes/light';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div`
  flex: 0 0 100%;
  padding: 10px 10px 0 10px;
  box-sizing: border-box;
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
                <Header />
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
