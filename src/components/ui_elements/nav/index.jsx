/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ThemeContext } from '../../get-in-touch'

import { red, white } from '../../styles/colors'
import { transitionPt1, transitionPt2 } from '../../utils/transitions'

import { routes } from './routes'

const StyledLink = styled(Link)`
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
          <li key={route.id} className="elements__nav-links--item">
            <StyledLink to={`/${route.url}/`} theme={context}>
              {route.name}
            </StyledLink>
          </li>
        ))}
        {/* {Config.Flags.IS_PRIVATE_SANDBOX_ENABLED && (
          <li className="elements__nav-links--item" key={4}>
            <StyledLink to={`/${privateSandbox.url}/`} theme={context}>
              {privateSandbox.name}
            </StyledLink>
          </li>
        )} */}
      </ul>
    </nav>
  )
}

export default Nav
