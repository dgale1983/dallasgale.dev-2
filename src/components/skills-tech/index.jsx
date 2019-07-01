import React from 'react'
import styled from 'styled-components'

import { PageTitle } from '../styled/typography'

import Header from '../ui_elements/header'
import Page from '../styled/page'
import Skills from './skills'
import Tech from './tech'

const pageName = 'Tools & Tech.'

const StyledContent = styled.div`

  max-width: 1200px;
  margin: 0 auto;
  margin-top: 10%;
`

const SkillsTech = () => (
  <>
    <Header />
    <PageTitle>{pageName}</PageTitle>
    <Page>
      <StyledContent>
        <div>
          <Tech />
        </div>
        <div>
          <Skills />
        </div>
      </StyledContent>
    </Page>
  </>
)

export default SkillsTech
