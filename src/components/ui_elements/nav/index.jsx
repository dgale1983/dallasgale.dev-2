/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ThemeContext } from '../../get-in-touch'

import pxToRem from '../../utils/px_to_rem'
import { ScreenTabletLandscapeDown } from '../../utils/media'
import { black, red, white } from '../../styles/colors'
import { borderBottomRed } from '../borders'
import { transitionPt1, transitionPt2 } from '../../utils/transitions'

import { routes } from './routes'
// import Time from '../time'

const StyledNav = styled.nav`
  text-align: right;
`

const StyledUl = styled.ul`
  display: inline-block;
  list-style: none;
`

const StyledLi = styled.li`
  display: inline-block;
  font-size: ${pxToRem(10)};
  font-weight: 600;
  width: ${pxToRem(80)};
  text-align: left;
  margin-right: ${pxToRem(12)};
  padding-bottom: ${pxToRem(4)};
  ${borderBottomRed};

  @media ${ScreenTabletLandscapeDown} {
    display: block;
  }
`

const StyledLink = styled(Link)`

  color: ${props => (props.theme === 'dark' ? white : black)};
  text-decoration: none;
  ${transitionPt1};
  &:hover {
    color: ${red};
    ${transitionPt2};
  }
`

const Nav = () => {
  const context = useContext(ThemeContext)

  return (
    <StyledNav>
      <StyledUl className="nav__links">
        {routes.map(route => (
          <StyledLi key={route.name}>
            <StyledLink to={`/${route.url}/`} theme={context}>
              {route.name}
            </StyledLink>
          </StyledLi>
        ))
        }
      </StyledUl>
      {/* <Time /> */}
    </StyledNav>
  )
}


export default Nav
