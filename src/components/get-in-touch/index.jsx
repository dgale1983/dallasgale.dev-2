import React from 'react'
import styled from 'styled-components'

import Header from '../ui_elements/header'
import Page from '../styled/page'
import { PageTitle } from '../styled/typography'
import Form from './form'

import pxToRem from '../utils/px_to_rem'

import { ScreenWidescreenDown } from '../utils/media'

import { white } from '../styles/colors'

import GitHubIcon from '../../images/icons/github_white.png'
import LinkedInIcon from '../../images/icons/linkedin.png'
import TwitterIcon from '../../images/icons/twitter.png'

const pageName = 'Get In Touch.'

const StyledContent = styled.div`

  color: ${white};
  max-width: ${pxToRem(400)};
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 5%;
`

const StyledTitle = styled(PageTitle)`

  color: ${white};
`

const StyledH2 = styled.h2`

  font-weight: 600;
  font-size: ${pxToRem(25)};

  @media ${ScreenWidescreenDown} {
    font-size: ${pxToRem(20)};
  }
`

const StyledChannelGrid = styled.div`

  display: grid;
  align-items: center;
  grid-gap: 5%;
  justify-items: start;
  grid-template-columns: 10% 75%;

  img {
    max-width: ${pxToRem(30)};
  }
`

const StyledLink = styled.a`

  color: ${white};
`

export const ThemeContext = React.createContext('default')

const Channel = (props) => {
  const {
    url,
    src,
    alt,
    label,
  } = props

  return (
    <StyledChannelGrid>
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img className="spacing__margin-btm--none" src={src} alt={alt} />
        </a>
      </div>
      <div>
        <StyledLink href={url} target="_blank" rel="noopener noreferrer">
          {label}
        </StyledLink>
      </div>
    </StyledChannelGrid>
  )
}

const GetInTouch = () => (
  <ThemeContext.Provider value="dark">
    <Header />
    <StyledTitle>{pageName}</StyledTitle>
    <Page fullWidth>
      <StyledContent>
        <StyledH2>Send me a message</StyledH2>
        <Form />
        <StyledH2>Connect through a channel</StyledH2>
        <Channel url="http://www.github.com/dgale1983" label="github.com/dgale1983" alt="Gitub repositories and code samples" src={GitHubIcon} />
        <Channel url="http://www.linkedin.com/in/dallas-gale" label="linkedin.com/in/dallas-gale" alt="LinkedIn profile" src={LinkedInIcon} />
        <Channel url="http://www.twitter.com/dallascgale" label="twitter.com/dallascgale" alt="Twitter account" src={TwitterIcon} />
      </StyledContent>
    </Page>
  </ThemeContext.Provider>
)

export default GetInTouch
