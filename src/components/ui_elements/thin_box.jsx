import styled from 'styled-components'

import { borderThinBlack } from './borders'
import pxToRem from '../utils/px_to_rem'

export const ThinBox = styled.div`
  ${borderThinBlack}
  font-size: ${pxToRem(12)};
  font-weight: 600;
  float: right;
  line-height: ${pxToRem(17)};
  padding: ${pxToRem(3)} ${pxToRem(4)};
  text-align: justify;
  text-transform: uppercase;
  width: ${pxToRem(35)};
`
