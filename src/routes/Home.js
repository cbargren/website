import React from 'react';
import styled from 'styled-components';

import Title from '../components/Title';

const Body = styled.div`
  margin-top: 2em;
  color: ${({ theme }) => theme.textColor};
`;

export default ({ yearsExperience = 8, yearsReactExperience = 4 }) => (
  <>
    <Title>About Me</Title>
    <Body>
      <p>
        I'm a Full-Stack Software Engineer with {yearsExperience} years of
        professional development experience and {yearsReactExperience} years of
        experience working with React. I worked at{' '}
        <a href="https://axosoft.com">Axosoft</a> from Jan 2011 to Mar 2017
        where I worked initially on an ASP.net MVC-based SPA for project
        management and bug tracking and later moved to working on{' '}
        <a href="https://www.gitkraken.com/">GitKraken</a>, an Electron-based
        desktop Git GUI application built using React and Redux.
      </p>
      <p>
        I then went on to work at{' '}
        <a href="https://www.traxtech.com">Trax Technologies</a> from Mar 2017
        to August 2018 where I worked on Freight Audit and Payment management
        applications as the lead Web Architect of a cross-regional team of
        engineers. There, I facilitated the replacement of a group of outdated
        Ember web applications with a performant, modular React/Redux web
        infrastructure that could easily be expanded on as business needs
        changed.
      </p>
      <p>
        Most recently, I was part of a fully remote team at{' '}
        <a href="https://www.vorstella.com">Vorstella</a>, where we worked on a
        machine learning-based infrastructure optimization platform. I was the
        lead front-end engineer there, working to build a performant, responsive
        user experience where users could quickly and easily monitor their
        clusters for anomalies that signal a problem before they began impacting
        users. We parted amicably due to budgetary reasons in June 2019.
      </p>
    </Body>
    <Title>About This Site</Title>
    <Body>
      <p>
        It's built using React, Redux and Material-UI plus some other handy
        tools like styled-components and font-awesome. You might want to ask
        "Chris, isn't Redux way overkill for a simple website like this?" I
        mean, probably... But hey, I'm doing this for funsies, so why not
        overengineer it a little bit? ¯\_(ツ)_/¯
      </p>
      <p>
        You can find the source code on GitHub{' '}
        <a href="https://github.com/cbargren/website">here</a>.
      </p>
    </Body>
  </>
);
