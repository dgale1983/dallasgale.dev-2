import React from 'react'
import styled from 'styled-components'

import Header from '../ui_elements/header'

import Page from '../styled/page'
import { PageTitle } from '../styled/typography'

import pxToRem from '../utils/px_to_rem'

const pageName = 'Thanks.'

const StyledTable = styled.div`

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  height: 100vh;
`

const StyledTitle = styled(PageTitle)`

  align-self: center;
  justify-self: center;
  text-align: center;
  font-size: ${pxToRem(70)};
`

const GetInTouch = () => (
  <>
    <Header />
    <Page>
      <StyledTable>
        <StyledTitle>{pageName}</StyledTitle>
      </StyledTable>
    </Page>
  </>
)

export default GetInTouch
