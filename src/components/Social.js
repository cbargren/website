import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
      <FontAwesomeIcon size="xs" icon={faGithub} />
    </SocialLinkWrapper>
    {/* <SocialLinkWrapper href="https://twitter.com/cbargren">
      <FontAwesomeIcon size="xs" icon={faTwitter} />
    </SocialLinkWrapper> */}
    <SocialLinkWrapper href="https://linkedin.com/cbargren">
      <FontAwesomeIcon size="xs" icon={faLinkedin} />
    </SocialLinkWrapper>
    <SocialLinkWrapper href="mailto:cbargren@gmail.com">
      <FontAwesomeIcon size="xs" icon={faEnvelope} />
    </SocialLinkWrapper>
  </SocialWrapper>
);
