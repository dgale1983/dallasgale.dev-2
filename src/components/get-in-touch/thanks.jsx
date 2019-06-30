import React, { useState } from 'react'
import styled from 'styled-components'

import Page from '../styled/page'
import { PageTitle } from '../styled/typography'
import Form from './form'

import pxToRem from '../utils/px_to_rem'

const pageName = 'Thanks.'

const StyledTitle = styled(PageTitle)`

  text-align: center;
  font-size: ${pxToRem(70)};
`

const StyledGrid = styled.div`

  display: grid;
  grid-template-columns: 50% 50%;
`

const GetInTouch = () => (
  <Page>
    <StyledTitle>{pageName}</StyledTitle>
  </Page>
)

export default GetInTouch
