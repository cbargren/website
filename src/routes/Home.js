import React, { Fragment } from 'react';
import styled from 'styled-components';

import Title from '../components/Title';

const Body = styled.div`
  margin-top: 2em;
  color: ${({ theme }) => theme.textColorHeaderAlt};
`;

export default ({ yearsExperience = 7, yearsReactExperience = 3 }) => (
  <Fragment>
    <Title>About This Site</Title>
    <Body>
      <p>
        Welcome to my website. It's built using React and Redux. You might want
        to ask: "Isn't Redux way overkill for a simple website like this?" Yes,
        yes it is. But I like Redux so I'm using it anyway. ¯\_(ツ)_/¯
      </p>
      <p>
        I'm a Full-Stack Software Engineer with {yearsExperience} years of
        experience and {yearsReactExperience} years of experience working with
        React. I worked at <a href="https://axosoft.com">Axosoft</a> from Jan
        2011 to Mar 2017 where I worked initially on an ASP.net MVC-based SPA
        for project management and bug tracking and later moved to working on
        <a href="https://www.gitkraken.com/">GitKraken</a>, an Electron-based
        desktop Git GUI application built using React and Redux.
      </p>
      <p>
        I then began working at
        <a href="https://www.traxtech.com">Trax Technologies</a>
        from Mar 2017 to the present where I work on Freight Audit and Payment
        management applications.
      </p>
    </Body>
  </Fragment>
);
