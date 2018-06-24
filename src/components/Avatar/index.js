import styled from 'styled-components';

import picture from './profile.png';

export default styled.img.attrs({
  src: picture
})`
  border-radius: 50%;
  margin: 0 auto;
  width: 200px;
`;
