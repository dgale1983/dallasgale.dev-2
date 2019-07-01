import { keyframes } from 'styled-components'

export const transitionPt1 = `
  transition: all 0.1s ease-in-out;
`
export const transitionPt2 = `
  transition: all 0.2s ease-in-out;
`

export const pageLoadContentAppear = keyframes`
  0% {
    opacity: 0;
    top: -20px;
  }

  100% {
    opacity: 1;
    top: 0;
  }
`

export const pageLoadContentDisappear = keyframes`
  100% {
    opacity: 0;
    top: 0;
  }

  0% {
    opacity: 1;
    top: -20px;
  }
`

export const statsAppear = keyframes`
  0% {
    bottom: -100px;
  }
  100% {
    bottom: 0;
  }
`

export const boxWidthExpand = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`
