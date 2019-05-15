import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import AppLayout from './components/AppLayout';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Routes from './routes';
import light from './themes/light';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 1200px;
  margin: 0 auto;
  align-items: flex-start;
`;

const CardWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.cardBoxShadow};
`;

const HeaderWrapper = styled(CardWrapper)`
  flex: 0 0 calc(100% - 20px);
  margin: 10px 10px 0 10px;
  box-sizing: border-box;
`;

const SidebarWrapper = styled(CardWrapper)`
  flex: 0 0 250px;
  margin: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

const ContentWrapper = styled(CardWrapper)`
  flex: 1 1;
  margin: 10px;
  padding: 3em;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

export default () => (
  <ThemeProvider theme={light}>
    <Router>
      <AppLayout>
        <AppWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <SidebarWrapper>
            <Sidebar />
          </SidebarWrapper>
          <ContentWrapper>
            <Routes />
          </ContentWrapper>
        </AppWrapper>
      </AppLayout>
    </Router>
  </ThemeProvider>
);
