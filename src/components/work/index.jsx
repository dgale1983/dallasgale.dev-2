import React, { useState } from 'react'

import styled from 'styled-components'

import Page from '../styled/page'
import { PageTitle } from '../styled/typography'
import WorkDetails from './work_details'

import { workHistoryData } from './data'

import Header from '../ui_elements/header'
import { WorkTile } from './work_tile'
import Stats from '../stats'
import {
  ScreenWidescreenDown,
  ScreenTabletLandscapeDown,
  ScreenPhoneDown,
  ScreenDesktopDown,
} from '../utils/media'

const pageName = 'Work History.'

const StyledGrid = styled.div`

  display: grid;
  align-items: start;
  grid-gap: 2px;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 5%;

  @media ${ScreenWidescreenDown} {
    margin-top: 10%;
  }

  @media ${ScreenDesktopDown} {
    grid-template-columns: repeat(9, 1fr);
  }

  @media ${ScreenTabletLandscapeDown} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${ScreenPhoneDown} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1px;
  }
`

const entireList = workHistoryData[0].list
const defaultTech = entireList[0].tech


const WorkHistory = () => {
  const [allEmployees] = useState(entireList)
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [details, setDetails] = useState('')
  const [tech, setTech] = useState(defaultTech)
  const [position, setPosition] = useState('')
  const [isOpacity, setIsOpacity] = useState(0)

  const handleShowDetails = (e) => {
    setCompany(e.name)
    setLocation(e.location)
    setDate(e.date)
    setDetails(e.details)
    setTech(e.tech)
    setPosition(e.position)
    setIsOpacity(1)
  }

  const handleHideDetails = () => {
    setIsOpacity(0)
  }

  return (
    <>
      <Header />
      <PageTitle>{pageName}</PageTitle>
      <Page>
        <StyledGrid>
          {
            allEmployees.map(e => (
              <WorkTile
                aria-describedby={e.details}
                key={e.name}
                onMouseEnter={() => handleShowDetails(e)}
                onFocus={() => handleShowDetails(e)}
                onMouseLeave={() => handleHideDetails()}
                onBlur={() => handleHideDetails()}
                onClick={() => handleShowDetails(e)}
              >
                <img src={e.logo} alt={e.name} />
              </WorkTile>
            ))
          }
        </StyledGrid>
        {company !== null && (
          <WorkDetails
            opacity={isOpacity}
            company={company}
            location={location}
            date={date}
            details={details}
            tech={tech}
            position={position}
          />
        )
        }
      </Page>

      <Stats />
    </>
  )
}

export default WorkHistory
