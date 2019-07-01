import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { ThemeContext } from '../get-in-touch'

import { pageLoadContentAppear } from '../utils/transitions'
import pxToRem from '../utils/px_to_rem'
import { ScreenTabletLandscapeDown, ScreenSmallDeviceDown } from '../utils/media'

import { fadedBlack } from '../styles/colors'
import ContentWrapper from './content_wrapper'


const StyledPage = styled.div`

  opacity: 0;
  background: ${props => (props.theme === 'dark' ? fadedBlack : 'transparent')};
  animation: ${pageLoadContentAppear} 0.5s ease forwards;
  padding: 0 ${pxToRem(60)};
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  max-width: ${props => (props.fullWidth ? '100%' : '1850px')};
  margin: 0 auto;
  z-index: 2;

  @media ${ScreenTabletLandscapeDown} {
    padding: 0 ${pxToRem(60)};
    position: relative;
    min-height: auto;
  }

  @media ${ScreenSmallDeviceDown} {
    padding: 0 ${pxToRem(20)};
  }
`

const Page = (props) => {
  const { as: Element, children, fullWidth } = props
  const context = useContext(ThemeContext)

  const [mounting, setMounting] = useState()

  useEffect(() => {
    setMounting(true)
  })

  return (
    <StyledPage isMounting={mounting} fullWidth={fullWidth} theme={context}>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </StyledPage>
  )
}

Page.propTypes = {
  as: PropTypes.element,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  fullWidth: PropTypes.bool,
}

Page.defaultProps = {
  as: 'div',
  fullWidth: false,
}

export default Page
