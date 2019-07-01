import React from 'react'
import styled from 'styled-components'

import pxToRem from '../../utils/px_to_rem'
import { black, white, grayLight } from '../../styles/colors'
import { ScreenDesktopDown, ScreenTabletDown } from '../../utils/media'

import * as data from './data'

const StyledGrid = styled.div`

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  grid-gap: ${pxToRem(10)};

  @media ${ScreenDesktopDown} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${ScreenTabletDown} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StyledCategory = styled.div`

  background: ${grayLight};
  // border: 2px solid ${black};
  padding: 20px;

  &:hover {
    background: ${black};
    color: ${white};
  }
`

const Skills = () => (
  <>
    <StyledGrid>
      {
        data.categories.map((category) => {
          const skillList = category.skills
          return (
            <StyledCategory>
              <h3 className="typography__color--red  typography__list--title">{category.name}</h3>
              <ul className="spacing__margin-left--none">
                {skillList.map(skill => <li className="elements__li--no-style  typography__list--items">{skill.name}</li>)}
              </ul>
            </StyledCategory>
          )
        })
      }
    </StyledGrid>
  </>
)

export default Skills
