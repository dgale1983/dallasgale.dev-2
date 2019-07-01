import styled from 'styled-components'

import { red, grayLight } from '../styles/colors'

import { transitionPt1 } from '../utils/transitions'
import pxToRem from '../utils/px_to_rem'
import { ScreenWidescreenDown, ScreenSmallDeviceDown } from '../utils/media'

export const WorkTile = styled.button`

  background: ${grayLight};
  border: 0;
  margin-bottom: ${pxToRem(20)};
  // margin-left: ${pxToRem(2)};
  // margin-right: ${pxToRem(2)};
  ${transitionPt1};

  img {
    filter: invert(0);
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

  @media ${ScreenSmallDeviceDown} {
    // margin-left: ${pxToRem(1)};
    // margin-right: ${pxToRem(1)};
    // margin-bottom: ${pxToRem(1)};
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
