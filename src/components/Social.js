import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled from 'styled-components';

const SocialWrapper = styled.div`
  &,
  & a {
    font-size: 1.5em;
  }
`;

const SocialLinkWrapper = styled.a`
  transition: ease 400ms;
  margin-right: 12px;

  &&&& {
    color: ${({ theme }) => theme.textColor};

    &:hover {
      color: ${({ theme }) => theme.textColorLink};
    }
  }
  &:last-child: {
    margin-right: 0;
  }
`;

export default () => (
  <SocialWrapper>
    <SocialLinkWrapper href="https://github.com/cbargren">
      <FontAwesomeIcon icon={faGithub} />
    </SocialLinkWrapper>
    <SocialLinkWrapper href="https://twitter.com/cbargren">
      <FontAwesomeIcon icon={faTwitter} />
    </SocialLinkWrapper>
  </SocialWrapper>
);
