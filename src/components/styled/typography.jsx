import styled from 'styled-components'

import pxToRem from '../utils/px_to_rem'
import { ScreenWidescreenDown } from '../utils/media';
import { black } from '../styles/colors'

export const PageTitle = styled.h1`

  font-size: ${pxToRem(40)};
  color: ${black};
  margin-top: ${pxToRem(50)};
  letter-spacing: ${pxToRem(-2)};
  position: fixed;
  top: 0;
  left: 0;
  padding-left: ${pxToRem(20)};
  z-index: 4;

  @media ${ScreenWidescreenDown} {
    font-size: ${pxToRem(30)};
  }
`

export const BoxLabelJustify = styled.div`

  font-size: ${pxToRem(8)};
`
