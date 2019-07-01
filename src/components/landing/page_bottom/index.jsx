import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { red } from '../../styles/colors'

import { ScreenTabletDown } from '../../utils/media'

const StyledPageBottom = styled.div`

  background-color: ${red};
  bottom: 0;
  display: block;
  height: auto;
  width: 100%;
  position: fixed;

  @media ${ScreenTabletDown} {
    height: auto;
  }
`

const PageBottom = (props) => {
  const { children } = props

  return (
    <StyledPageBottom>
      {children}
    </StyledPageBottom>
  )
}

PageBottom.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
}

PageBottom.defaultProps = {
  children: '',
}


export default PageBottom
