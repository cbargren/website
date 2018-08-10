import styled from 'styled-components';

export default styled.div`
  padding: 0em 0 1em;
  font-weight: bold;
  font-size: 1.5em;
  border-bottom: 1px solid ${({ theme }) => theme.textColorHeaderAlt};
  text-transform: uppercase;
`;
