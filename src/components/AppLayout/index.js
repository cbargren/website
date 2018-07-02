import styled from 'styled-components';

export default styled.div`
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
