import React from 'react'
import styled from 'styled-components'

import pxToRem from '../utils/px_to_rem'
import { boxWidthExpand, statsAppear } from '../utils/transitions'
import { ScreenWidescreenDown, ScreenTabletDown, ScreenPhoneDown } from '../utils/media'

import { ThinBox } from '../ui_elements/thin_box'
import { BoxLabelJustify } from '../styled/typography'
import { red, white } from '../styles/colors'

const StyledGrid = styled.div`

  align-items: center;
  text-align: center;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  width: 850px;
  justify-items: center;
  position: fixed;
  bottom: ${pxToRem(20)};
  left: 0;
  margin: 0 auto;
  right: 0;
  transform: scale(0.8);
  padding: 20px 20px 20px 0;
  z-index: 10;

  @media ${ScreenWidescreenDown} {
    left: 0;
    transform: scale(0.8);
  }

  @media ${ScreenTabletDown} {
    width: 100%;
  }

  @media ${ScreenPhoneDown} {
    display: none;
    visibility: hidden;
  }
`

const StyledBox = styled(ThinBox)`

  bottom: ${pxToRem(-100)};
  border-color: ${white};
  width: 100%;
  color: ${white};
  line-height: ${pxToRem(12)};
  padding: ${pxToRem(8)};
  position: relative;
  animation: ${statsAppear} 0.5s ease forwards;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
  &:nth-child(6) {
    animation-delay: 0.5s;
  }
`

const StyledTitle = styled.h5`

  bottom: -100px;
  color: ${red};
  animation: ${statsAppear} 0.5s ease forwards;
  display: inline-block;
  font-size: ${pxToRem(20)};
  position: relative;
  margin-top: ${pxToRem(5)};
  margin-bottom: ${pxToRem(5)};
`

const StyledBottomBorder = styled.div`

  background: ${red};
  height:${pxToRem(2)};
  width: 0;
  animation: ${boxWidthExpand} 0.5s forwards;
  animation-delay: 1s;
  
`

const stats = [
  { number: 'O N E', thing: 'C O N S U L T A N C Y' },
  { number: 'T W O', thing: 'C O U N T R I E S' },
  { number: 'T W O', thing: 'A G E N C I E S' },
  { number: 'T H R E E', thing: 'C I T I E S' },
  { number: 'F O U R', thing: 'S T A R T - U P S' },
]

const Stats = () => (
  <StyledGrid>
    <div>
      <StyledTitle>Stats.</StyledTitle>
      <StyledBottomBorder />
    </div>
    {
      stats.map((stat, key) => (
        <StyledBox key={key}>
          <div>{stat.number}</div>
          <BoxLabelJustify>{stat.thing}</BoxLabelJustify>
        </StyledBox>
      ))
    }
  </StyledGrid>
)

export default Stats
