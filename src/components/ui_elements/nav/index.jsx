/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ThemeContext } from '../../get-in-touch'

import { black, red, white } from '../../styles/colors'
import { transitionPt1, transitionPt2 } from '../../utils/transitions'

import { routes } from './routes'

const StyledLink = styled(Link)`

  // color: ${props => (props.theme === 'dark' ? white : black)};
  color: ${white};
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
    <nav className="elements__nav">
      <ul className="elements__nav-links">
        {routes.map(route => (
          <li className="elements__nav-links--item" key={route.name}>
            <StyledLink to={`/${route.url}/`} theme={context}>
              {route.name}
            </StyledLink>
          </li>
        ))
        }
      </ul>
    </nav>
  )
}


export default Nav
