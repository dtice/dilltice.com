import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import BloodBar from '../../theme/images/spooky/BloodBar.gif';
import WaterphoneSound from '../../theme/sounds/spooky/waterphone.mp3';
import HorrorAmbience from '../../theme/sounds/spooky/horror-ambience.mp3';

import { FlexBox } from '@/components/styled';
import { repository, title } from '@/config';
import useHotKeysDialog from '@/store/hotkeys';
import useNotifications from '@/store/notifications';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';
import useOrientation from '@/hooks/useOrientation';

import { HotKeysButton } from './styled';
import { getRandomJoke } from './utils';
import { Themes } from '@/theme/types';
import { MenuItem, Select } from '@mui/material';

const waterphoneSound = new Audio(WaterphoneSound);
const horrorAmbience = new Audio(HorrorAmbience);

function Header() {
  const isPortrait = useOrientation();
  const [, sidebarActions] = useSidebar();
  const [theme, themeActions] = useTheme();
  const [, notificationsActions] = useNotifications();
  const [, hotKeysDialogActions] = useHotKeysDialog();

  // SFX for theme switch

  function showNotification() {
    notificationsActions.push({
      options: {
        // Show fully customized notification
        // Usually, to show a notification, you'll use something like this:
        // notificationsActions.push({ message: ... })
        // `message` accepts string as well as ReactNode
        // If you want to show a fully customized notification, you can define
        // your own `variant`s, see @/sections/Notifications/Notifications.tsx
        variant: 'customNotification',
      },
      message: getRandomJoke(),
    });
  }

  function handleChangeTheme(themes: Themes) {
    themeActions.setTheme(themes);
    if (themes === Themes.SPOOKY) {
      // Play spooky sound
      waterphoneSound.play();
      horrorAmbience.loop = true;
      horrorAmbience.play();
    } else {
      horrorAmbience.loop = false;
      horrorAmbience.pause();
      waterphoneSound.pause();
      horrorAmbience.currentTime = 0;
      waterphoneSound.currentTime = 0;
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }} data-pw={`theme-${theme}`}>
      <AppBar color="transparent" elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="start"
              color="info"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Button onClick={showNotification} color="info">
              {title}
            </Button>
          </FlexBox>
          <FlexBox>
            <FlexBox>
              <Tooltip title="Hot keys" arrow>
                {isPortrait === false ? (
                  <HotKeysButton
                    size="small"
                    variant="outlined"
                    aria-label="open hotkeys dialog"
                    onClick={hotKeysDialogActions.open}
                  >
                    alt + k
                  </HotKeysButton>
                ) : (
                  <></>
                )}
              </Tooltip>
            </FlexBox>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="It's open source" arrow>
              <IconButton color="info" size="large" component="a" href={repository} target="_blank">
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
            <Select
              color="info"
              value={theme}
              onChange={(e) => handleChangeTheme(e.target.value as Themes)}
              data-pw="theme-toggle"
            >
              <MenuItem value={Themes.LIGHT}>Light</MenuItem>
              <MenuItem value={Themes.DARK}>Dark</MenuItem>
              <MenuItem value={Themes.SPOOKY}>Spooky</MenuItem>
            </Select>
          </FlexBox>
        </Toolbar>
      </AppBar>
      {theme === Themes.SPOOKY && (
        <img
          src={BloodBar}
          draggable="false"
          width="100%"
          style={{
            position: 'absolute',
            userSelect: 'none',
            pointerEvents: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
          }}
        />
      )}
    </Box>
  );
}

export default Header;
