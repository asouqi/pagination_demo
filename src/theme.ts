/*!
 * © 2020 Atypon Systems LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { createGlobalStyle, DefaultTheme } from 'styled-components'

import * as colors from './colors'

export const theme: DefaultTheme = {
  name: 'Dashboard',
  custom: {
    colors: {
      background: {
        muted: colors.greyMuted,
        warning: colors.wheatYellow,
        error: colors.mandysRed,
      },
      text: {
        muted: colors.greyMutedText,
      },
    },
    criticality: {
      color: {
        ON_SCHEDULE: colors.killarneyGreen,
        DUE_TODAY: colors.jellyBeanBlue,
        OVERDUE: colors.punchRed,
        AT_RISK: colors.zestOrange,
      },
    },
    pill: {
      background: colors.seashellGrey,
    },
  },
  colors: {
    background: {
      primary: colors.white,
      secondary: colors.alabasterGrey,
      tertiary: colors.mercuryGrey,
      fifth: colors.manuscriptsXLight2,
      dark: 'rgba(0,0,0,0.5)',
      error: colors.chablisRed,
      info: colors.manuscriptsXLight2,
      success: colors.peppermintGreen,
      warning: colors.butteryYellow,
    },
    border: {
      error: colors.mandysRed,
      info: colors.manuscriptsBlue,
      success: colors.springGreen,
      warning: colors.wheatYellow,
      primary: colors.manuscriptsLight, // 2
      secondary: colors.mercuryGrey, // 2
      tertiary: colors.seashellGrey, // 1
      field: {
        active: colors.manuscriptsLight,
        default: colors.mercuryGrey,
        hover: colors.manuscriptsLight,
      },
    },
    brand: {
      dark: colors.manuscriptsBlueDark,
      medium: colors.manuscriptsIcons,
      default: colors.manuscriptsBlue,
      light: colors.manuscriptsLight,
      xlight: colors.manuscriptsXLight,
      secondary: colors.manuscriptsSecondary,
    },
    button: {
      default: {
        background: {
          active: 'transparent',
          default: 'transparent',
          hover: colors.manuscriptsXLight2,
        },
        border: {
          active: 'transparent',
          default: 'transparent',
          hover: colors.manuscriptsXLight2,
        },
        color: {
          active: colors.manuscriptsBlue,
          default: colors.manuscriptsBlue,
          hover: colors.manuscriptsBlue,
        },
      },
      primary: {
        background: {
          active: colors.manuscriptsBlueDark,
          default: colors.manuscriptsBlue,
          hover: colors.manuscriptsBlueDark,
        },
        border: {
          active: colors.manuscriptsBlueDark,
          default: colors.manuscriptsBlue,
          hover: colors.manuscriptsBlueDark,
        },
        color: {
          active: colors.white,
          default: colors.white,
          hover: colors.white,
        },
      },
      secondary: {
        background: {
          active: colors.white,
          default: colors.white,
          hover: colors.white,
        },
        border: {
          active: colors.mercuryGrey,
          default: colors.mercuryGrey,
          hover: colors.mercuryGrey,
        },
        color: {
          active: colors.manuscriptsBlue,
          default: colors.greyDark,
          hover: colors.manuscriptsBlue,
        },
      },
      error: {
        background: {
          active: colors.punchRed,
          default: colors.punchRed,
          hover: colors.darkRed,
        },
        border: {
          active: colors.punchRed,
          default: colors.punchRed,
          hover: colors.darkRed,
        },
        color: {
          active: colors.white,
          default: colors.white,
          hover: colors.white,
        },
      },
    },
    text: {
      primary: colors.greyDark,
      secondary: colors.greyMuted,
      tertiary: colors.manuscriptsBlue, // 0
      muted: colors.mercuryGrey, // 0
      onDark: colors.white,
      onLight: colors.greyMuted,
      error: colors.punchRed,
      info: colors.jellyBeanBlue,
      success: colors.killarneyGreen,
      warning: colors.zestOrange,
    },
  },
  font: {
    family: {
      sans: '"Lato", sans-serif',
      serif: 'serif',
      Lato: 'Lato',
    },
    size: {
      xlarge: '24px',
      large: '18px',
      medium: '16px',
      normal: '14px',
      small: '12px',
    },
    lineHeight: {
      large: '24px',
      normal: '16px',
      small: '14px',
    },
    weight: {
      xbold: 900,
      bold: 700,
      semibold: 600,
      medium: 500,
      normal: 400,
      light: 300,
      xlight: 200,
    },
  },
  grid: {
    radius: {
      default: '6px',
      small: '4px',
      rounder: '16px',
    },
    unit: 4,
    mobile: 360,
    tablet: 768,
    smallDesktop: 1024,
    desktop: 1280,
    largeDesktop: 1920,
  },
  shadow: {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',
    dropShadow: '0 4px 9px 0 rgba(0, 0, 0, 0.3)',
  },
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
