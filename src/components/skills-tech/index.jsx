import React from 'react'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

import { PageTitle } from '../styled/typography'

import { tabletWidth } from '../utils/media'
import pxToRem from '../utils/px_to_rem'

import Header from '../ui_elements/header'
import Page from '../styled/page'
import Skills from './skills'
import Tech from './tech'
// import Footer from '../footer'

const pageName = 'Tools & Technology.'

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
    {/* <Footer /> */}
  </>
)

export default SkillsTech
