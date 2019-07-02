import React, { useState } from 'react'
import styled from 'styled-components'

import { black, white, red } from '../../styles/colors'
import { transitionPt1, transitionPt2 } from '../../utils/transitions'
import pxToRem from '../../utils/px_to_rem'
import {
  ScreenWidescreenDown,
  ScreenDesktopDown,
  ScreenTabletDown,
  ScreenPhoneDown,
} from '../../utils/media'


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
    grid-gap: 1px;
    margin-bottom: ${pxToRem(10)};
  }
`

const StyledIconBox = styled.button`

  background: ${white};
  border: none;
  max-height: ${pxToRem(largeIcon)};
  max-width: ${pxToRem(largeIcon)};
  ${transitionPt1};

  &:focus {
    outline-color: $red;
  }

  @media ${ScreenWidescreenDown} {
    max-height: ${pxToRem(largeIcon)};
    max-width: ${pxToRem(largeIcon)};
  }


  img {
    width: 100%;
    margin-bottom: 0;
    padding: ${pxToRem(15)};
    ${transitionPt2};
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

  background: ${red};
  min-height: ${pxToRem(50)};
  height: auto;
  display: grid;
  align-items: center;
  color: ${white};
  font-size: ${pxToRem(20)};
  font-weight: 400;
  line-height: ${pxToRem(20)};
  opacity: ${props => (props.hovered ? 1 : 0)};
  position: fixed;
  transition: all  ease 0.3s;
  padding: 0 ${pxToRem(20)};
  top: ${pxToRem(100)};
  left: ${pxToRem(20)};
  
  @media ${ScreenDesktopDown} {
    font-size: ${pxToRem(16)};
    min-height: ${pxToRem(30)};
  }

  @media ${ScreenPhoneDown} {
    width: 100%;
    top: 0;
    left: 0;
    font-size: ${pxToRem(15)};
    position: relative;
  }
`

const Tech = () => {
  const [techName, setTechName] = useState(' ')
  const [isHovered, setIsHovered] = useState(false)

  const handleDisplayDetails = (e) => {
    setTimeout(() => {
      setTechName(e.description)
      setIsHovered(true)
    }, 0)
    return null
  }

  const handleHideDetails = () => {
    setTimeout(() => {
      setIsHovered(false)
      setTechName(null)
    }, 0)
    return null
  }

  return (
    <>
      <StyledIconGrid>
        {
          data.techIcons.map(tech => (
            <StyledIconBox
              key={tech.name}
              onMouseEnter={() => handleDisplayDetails(tech)}
              onMouseLeave={() => handleHideDetails()}
              onFocus={() => handleDisplayDetails(tech)}
              onBlur={() => handleDisplayDetails(tech)}
              onClick={() => handleDisplayDetails(tech)}
            >
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
