import React from 'react'
import styled from 'styled-components'

import Header from '../ui_elements/header'

import Page from '../styled/page'
import { PageTitle } from '../styled/typography'

import pxToRem from '../utils/px_to_rem'

const pageName = 'Thanks.'

const StyledTitle = styled(PageTitle)`

  width: 100%;
  position: relative;
  margin-top: 25%;
  text-align: center;
  font-size: ${pxToRem(70)};
`

const GetInTouch = () => (
  <>
    <Header />
    <Page>
      <StyledTitle>{pageName}</StyledTitle>
    </Page>
  </>
)

export default GetInTouch
