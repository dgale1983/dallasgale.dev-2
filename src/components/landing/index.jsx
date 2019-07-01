import React from 'react'
import styled from 'styled-components'

import pxToRem from '../utils/px_to_rem'
import { black, red, white } from '../styles/colors'

import Header from '../ui_elements/header'
import PageBottom from './page_bottom'
import FeatureImage from './feature_image'
import Page from '../styled/page'
import { LargeCtaLink } from '../styled/buttons'
import {
  ScreenWidescreenDown,
  ScreenTabletLandscapeDown,
  ScreenTabletDown,
  ScreenPhoneDown,
  ScreenDesktopDown,
} from '../utils/media'

const StyledContent = styled.div`

  position: relative;
  padding-top: 5%;
  width: 90%;

  @media ${ScreenWidescreenDown} {
    padding-top: 6%;
    padding-bottom: ${pxToRem(200)};
    width: 80%;
  }

  @media ${ScreenDesktopDown} {
    padding-top: 0%;
    width: 70%;
  }

  @media ${ScreenTabletLandscapeDown} {
    padding-bottom: ${pxToRem(200)};
    width: 45%;
  }

  @media ${ScreenTabletDown} {
    width: 100%;
  }

  @media ${ScreenPhoneDown} {
    padding-top: 22%;
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
  bottom: 20px;
  left: 20px;
  position: relative;
  letter-spacing: ${pxToRem(-2)};
  width: auto;
  z-index: 10;

  // @media ${ScreenTabletDown} {
  //   position: relative;
  // }

  div {
    color: ${white};
    display: inline-block;
    margin-right: ${pxToRem(20)};
    line-height: 58px;

    @media ${ScreenTabletDown} {
      display: block;
      margin-bottom: ${pxToRem(20)};
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
          I make<br />
          <StyledCode>&nbsp;&#60;</StyledCode>web sites<StyledCode>/&#62;</StyledCode>
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
      </StyledContent>
    </Page>
    <PageBottom>
      <FeatureImage />
      <StyledHireCta>
        <div>
          Looking to hire?
        </div>
        <StyledLink href="https://drive.google.com/file/d/1SOfvB2-V5fBzHFcJlK2xnubdqP6UYBVi/view?usp=sharing" rel="noopener" target="_blank">
          Download CV &amp; Folio
        </StyledLink>
      </StyledHireCta>
    </PageBottom>
  </>
)

export default Landing
