import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { ThemeContext } from '../../get-in-touch'

import pxToRem from '../../utils/px_to_rem'
import { white } from '../../styles/colors'

import { ThinBox } from '../thin_box'
import { BoxLabelJustify } from '../../styled/typography'

const date = new Date()

const StyledNumbers = styled.div`

  text-align: center;
  letter-spacing: ${pxToRem(4)};
`

const StyledThinBox = styled(ThinBox)`

  border-color: ${props => (props.borderColor === 'dark' && white)};
  color: ${props => (props.color === 'dark' && white)};
`

const label = 'T I M E'

const Time = () => {
  const context = useContext(ThemeContext)
  const [hours, setHours] = useState(date.getHours())
  // useEffect(() => {
  //   setHours(hoursNow)
  // })

  const [mins, setMinute] = useState(date.getMinutes())
  // useEffect(() => {
  //   setMinute(minutesNow)
  // })

  const [secs, setSeconds] = useState(date.getSeconds())
  // useEffect(() => {
  //   setInterval(() => {
  //     setSeconds(date.getSeconds())
  //     console.log(date.getSeconds())
  //   }, 1000)
  // })

  return (
    <StyledThinBox color={context} borderColor={context}>
      <BoxLabelJustify>{label}</BoxLabelJustify>
      <StyledNumbers>{hours}</StyledNumbers>
      <StyledNumbers>{mins}</StyledNumbers>
      <StyledNumbers>{secs}</StyledNumbers>
    </StyledThinBox>
  )
}

export default Time
