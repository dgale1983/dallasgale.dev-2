import styled from 'styled-components'

import { black, red } from '../styles/colors'

import { transitionPt1 } from '../utils/transitions'
import pxToRem from '../utils/px_to_rem'
import { ScreenWidescreenDown } from '../utils/media'

export const WorkTile = styled.button`

  background: ${black};
  border: 0;
  margin-bottom: ${pxToRem(20)};
  margin-left: 2px;
  margin-right: 2px;
  ${transitionPt1};

  img {
    filter: invert(1);
    width: 70%;
    display: block;
    margin: 0 auto;
    position: relative;
  }

  @media ${ScreenWidescreenDown} {
    img {
      width: 80%;
    }
  }

  &:hover,
  &:focus {
    background: ${red};
    ${transitionPt1};

    img {
      filter: invert(1);
    }
  }
`
