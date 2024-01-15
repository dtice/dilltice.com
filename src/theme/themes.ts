import { ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

// Spooky
import BoneCursor from './images/spooky/BoneCursor32.png';
import BoneCursorPointer from './images/spooky/BoneCursor32Pointer.png';
import BlackBG from './images/spooky/BlackRockTileBG.png';
import BlackBrickBG from './images/spooky/BlackWallTileBG.png';
import GhostSkeleton from './fonts/GhostSkeleton.ttf';

import { Themes } from './types';

const sharedTheme = {
  palette: {
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
        // TODO: open issue for missing "horizontal" CSS rule
        // in Divider API - https://mui.com/material-ui/api/divider/#css
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: '80%',
        },
      },
    },
  },
} as ThemeOptions; // the reason for this casting is deepmerge return type
// TODO (Suren): replace mui-utils-deepmerge with lodash or ramda deepmerge

const themes: Record<Themes, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: '#fafafa',
        paper: '#fff',
      },
      primary: {
        main: '#3f51b5',
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: '#111',
        paper: '#171717',
      },
      primary: {
        main: '#333',
      },
    },
  }),

  spooky: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: '#111',
        paper: '#171717',
      },
      primary: {
        main: '#333',
      },
      info: {
        main: '#F00',
      },
      text: {
        primary: '#F00',
      },
    },
    typography: {
      fontFamily: '"Ghost Skeleton", Regular',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: `URL(${BlackBG})`,
            backgroundRepeat: 'repeat',
            cursor: `URL('${BoneCursor}'), auto`,
            FontFace: [GhostSkeleton],
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: `URL(${BlackBrickBG})`,
            backgroundRepeat: 'repeat',
            cursor: `URL(${BoneCursorPointer}), auto`,
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            cursor: `URL(${BoneCursorPointer}), auto`,
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            cursor: `URL(${BoneCursorPointer}), auto`,
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: '#F00',
          },
        },
      },
    },
  } as ThemeOptions),
};

export default themes;
