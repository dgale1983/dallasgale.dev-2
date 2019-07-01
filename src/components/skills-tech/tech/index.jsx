import React, { useState } from 'react'
import styled from 'styled-components'

import { black, white, grayLight } from '../../styles/colors'
import { transitionPt1 } from '../../utils/transitions'
import pxToRem from '../../utils/px_to_rem'
import { ScreenWidescreenDown, ScreenDesktopDown, ScreenTabletDown } from '../../utils/media'


import * as data from './data'

const largeIcon = 84
const mediumIcon = 60

const StyledIconGrid = styled.div`

  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: ${pxToRem(10)};
  grid-template-columns: repeat(10, 1fr);
  margin-bottom: ${pxToRem(50)};

  @media ${ScreenWidescreenDown} {
    grid-template-columns: repeat(8, 1fr);
  }

  @media ${ScreenDesktopDown} {
    grid-template-columns: repeat(7, 1fr);
  }

  @media ${ScreenTabletDown} {
    grid-template-columns: repeat(5, 1fr);
  }
`

const StyledIconBox = styled.div`

  max-height: ${pxToRem(largeIcon)};
  max-width: ${pxToRem(largeIcon)};
  ${transitionPt1};

  @media ${ScreenWidescreenDown} {
    max-height: ${pxToRem(largeIcon)};
    max-width: ${pxToRem(largeIcon)};
  }


  img {
    width: 100%;
    padding: ${pxToRem(15)};
  }

  &:hover {
    background: ${grayLight};
    ${transitionPt1};

    img {
      ${transitionPt1};
    }
  }

  @media ${ScreenWidescreenDown} {
    max-height: ${pxToRem(mediumIcon)};
    max-width: ${pxToRem(mediumIcon)};

    img {
      padding: ${pxToRem(5)};
    }
  }
`

const StyledTechName = styled.h4`
  background: ${black};
  height: 50px;
  border-radius: 20px;
  display: grid;
  align-items: center;
  color: ${white};
  font-size: ${pxToRem(20)};
  font-weight: 400;
  line-height: 10px;
  opacity: ${props => (props.hovered ? 1 : 0)};
  position: fixed;
  min-width: 300px;
  transition: all  ease 0.3s;
  padding: 0 20px;
  top: ${pxToRem(100)};
  left: ${pxToRem(20)};
`

const Tech = () => {
  const [techName, setTechName] = useState(' ')
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = (e) => {
    setTechName(e.description)
    setIsHovered(true)
    return null
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTechName(null)
    return null
  }

  return (
    <>
      <StyledIconGrid>
        {
          data.techIcons.map(tech => (
            <StyledIconBox onMouseEnter={() => handleMouseEnter(tech)} onMouseLeave={() => handleMouseLeave()}>
              <img src={tech.src} alt={tech.name} />
            </StyledIconBox>
          ))
        }
      </StyledIconGrid>
      <StyledTechName hovered={isHovered}>{techName}</StyledTechName>
    </>
  )
}

export default Tech
