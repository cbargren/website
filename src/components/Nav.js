import styled from 'styled-components';

export const Nav = styled.div`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

export const NavItem = styled.div`
  display: inline-block;

  && a,
  && a:-webkit-any-link {
    color: ${({ theme }) => theme.textColorHeader};
    text-decoration: none;
  }
`;

export const Spacer = styled(NavItem)`
  border-left: 1px solid ${({ theme }) => theme.textColorHeaderAlt};
`;
