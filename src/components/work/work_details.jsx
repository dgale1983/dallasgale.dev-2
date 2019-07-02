import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { red } from '../styles/colors'
import pxToRem from '../utils/px_to_rem'
import { ScreenWidescreenDown, ScreenPhoneDown } from '../utils/media'

const slideUp = keyframes`
  0% {
    margin-top: 20px;
  }

  100% {
    margin-top: 0;
  }
`

const StyledInfo = styled.div`

  margin: 0 auto;
  padding: 0 ${pxToRem(20)};
  width: 50%;
  transition: all 0.3s;
  opacity: ${props => props.opacity};
  visibility: ${props => props.visibility};
  position: relative;
  animation: ${slideUp} 0.5s forwards;

  @media ${ScreenWidescreenDown} {
    width: 70%;
  }

  @media ${ScreenPhoneDown} {
    padding: 0;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 20;
  }
`

const StyledGrid = styled.div`

  display: grid;
  grid-gap: 2%;
  grid-template-columns: 38% 60%;

  @media ${ScreenPhoneDown} {
    display: block;
  }
`

const StyledUl = styled.ul`

  list-style: none;
  margin-left: 0;
`

const StyledLi = styled.li`

  display: inline-block;
  font-size: ${pxToRem(12)};
  font-weight: 600;
  padding-right: ${pxToRem(4)};
  line-height: 0;

  &:after {
    color: ${red};
    content: ' |';
  }
  
  &:last-child {
    &:after {
      content: '';
    }
  }
`

const WorkDetails = (props) => {
  const {
    company,
    location,
    details,
    date,
    tech,
    opacity,
    position,
  } = props

  const [hasMounted, setMount] = useState('hidden')

  useEffect(() => {
    setMount('visibile')
    return () => {
      setMount('hidden')
    }
  }, [])

  return (
    <StyledInfo visibility={hasMounted} opacity={opacity}>
      <StyledGrid>
        <div>
          <h3 className="typography__heading--three">{company}</h3>
          <h4 className="typography__heading--four">{location}</h4>
          <h5 className="typography__heading--five">{position}</h5>
          <h6 className="typography__heading--six">{date}</h6>
        </div>
        <div>
          <p className="typography__paragraph">{details}</p>
          <h5 className="typography__heading--five  typography__color--brand">Tech.</h5>
          <StyledUl>
            {
              tech.map((t, key) => (
                <StyledLi key={key}>{t}</StyledLi>
              ))
            }
          </StyledUl>
        </div>
      </StyledGrid>
    </StyledInfo>
  )
}

WorkDetails.propTypes = {
  company: PropTypes.string,
  location: PropTypes.string,
  details: PropTypes.string,
  date: PropTypes.string,
  tech: PropTypes.arrayOf(
    PropTypes.string,
  ),
  opacity: PropTypes.number,
  position: PropTypes.string,
}

WorkDetails.defaultProps = {
  company: null,
  location: null,
  details: null,
  date: null,
  tech: [''],
  opacity: 0,
  position: null,
}

export default WorkDetails
