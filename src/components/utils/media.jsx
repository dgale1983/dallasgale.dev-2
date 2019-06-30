const onlyScreen = 'only screen and'

const breakpoints = {
  widescreen_down: 'max-width: 1800px',
  desktop_down: 'max-width: 1440px',
  tablet_landscape_down: 'max-width: 1200px',
  tablet_down: 'max-width: 768px',
}

export const tabletWidth = 769
export const laptopWidth = 1441
export const ScreenWidescreenDown = `${onlyScreen} (${breakpoints.widescreen_down})`
export const ScreenDesktopDown = `${onlyScreen} (${breakpoints.desktop_down})`
export const ScreenTabletDown = `${onlyScreen} (${breakpoints.tablet_down})`
export const ScreenTabletLandscapeDown = `${onlyScreen} (${breakpoints.tablet_landscape_down})`
