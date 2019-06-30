import React from 'react'
import styled from 'styled-components'

import pxToRem from '../utils/px_to_rem'
import { black, red } from '../styles/colors'

import Header from '../ui_elements/header'
import PageBottom from './page_bottom'
import FeatureImage from './feature_image'
import Page from '../styled/page'
import { LargeCtaLink } from '../styled/buttons'
import { ScreenWidescreenDown, ScreenTabletLandscapeDown } from '../utils/media'

const StyledContent = styled.div`

  position: relative;
  padding-top: 12%;
  width: 90%;

  @media ${ScreenWidescreenDown} {
    padding-top: 6%;
    padding-bottom: ${pxToRem(200)};
    width: 80%;
  }
`

const StyledCode = styled.span`

  color: ${red};
  font-weight: 100;
`

const StyledHireCta = styled.div`

  color: ${black};
  font-size: ${pxToRem(35)};
  font-weight: 100;
  left: ${pxToRem(0)};
  margin-top: ${pxToRem(40)};
  position: relative;
  letter-spacing: ${pxToRem(-2)};
  width: auto;

  div {
    display: inline-block;
    line-height: 58px;
    border-bottom: 10px solid ${red};

    @media ${ScreenTabletLandscapeDown} {
      border-bottom: none;
      display: block;
      width: auto;
      margin-bottom: ${pxToRem(40)};
    }
  }
`

const StyledLink = styled(LargeCtaLink)`
  @media ${ScreenTabletLandscapeDown} {
    margin-left: 0;
    width: 100%;
  }
`

const Landing = () => (
  <>
    <Header />
    <Page>
      <StyledContent>
        <h1 className="typography__heading--one">
          I make
          <StyledCode>&nbsp;&#60;</StyledCode>
          web sites
          <StyledCode>/&#62;</StyledCode>
          .
        </h1>
        <p className="typography__paragraph--hero">
          Hi! I’m Dallas Gale, a&nbsp;
          <strong>front-end dev </strong>
          and
          <strong> designer </strong>
          with over 8 years experience working in both
          <strong> Australia &amp; the USA. </strong>
          I specialize in building modern responsive UI using
          <strong> JavaScript, CSS &amp; HTML.</strong>
        </p>
        <StyledHireCta>
          <div>
            Looking to hire?
          </div>
          <StyledLink href="https://drive.google.com/file/d/1SOfvB2-V5fBzHFcJlK2xnubdqP6UYBVi/view?usp=sharing" target="_blank">
            Download CV &amp; Folio
          </StyledLink>
        </StyledHireCta>
      </StyledContent>
    </Page>
    <PageBottom>
      <FeatureImage />
    </PageBottom>
  </>
)

export default Landing
