// import React from 'react'
// import PropTypes from 'prop-types'

// import styled from 'styled-components'

// import { ScreenTabletLandscapeDown } from '../../utils/media'
// import pxToRem from '../../utils/px_to_rem'

// const StyledPageBottom = styled.div`

//   background-color: ${props => props.bg};
//   bottom: 0;
//   display: block;
//   height: 30vh;
//   position: relative;
//   width: 100%;

//   @media ${ScreenTabletLandscapeDown} {
//     height: 50vh;
//   }
// `

// const StyledPageBottomFixed = styled(StyledPageBottom)`

//   position: fixed;

//   @media ${ScreenTabletLandscapeDown} {
//     position: relative;
//   }
// `

// const StyledContent = styled.div`

//   max-width: 1850px;
//   padding: 0 ${pxToRem(60)};
//   margin: 0 auto;
// `

// const Footer = (props) => {
//   const { bg, children, fixed } = props

//   if (fixed) {
//     return (
//       <StyledPageBottomFixed bg={bg}>
//         <StyledContent>
//           {children}
//         </StyledContent>
//       </StyledPageBottomFixed>
//     )
//   }

//   return (
//     <StyledPageBottom bg={bg}>
//       <StyledContent>
//         {children}
//       </StyledContent>
//     </StyledPageBottom>
//   )
// }

// Footer.propTypes = {
//   bg: PropTypes.string,
//   // eslint-disable-next-line react/forbid-prop-types
//   children: PropTypes.any,
//   fixed: PropTypes.bool,
// }

// Footer.defaultProps = {
//   bg: '',
//   children: '',
//   position: 'relative',
//   fixed: false,
// }


// export default Footer
