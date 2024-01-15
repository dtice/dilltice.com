import { Link } from 'react-router-dom';

import DefaultIcon from '@mui/icons-material/Deblur';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import WaterphoneSound from '@/theme/sounds/spooky/waterphone.mp3';
import HorrorAmbience from '@/theme/sounds/spooky/horror-ambience.mp3';

import routes from '@/routes';
import useSidebar from '@/store/sidebar';
import { Themes } from '@/theme/types';
import { Select, MenuItem, Box } from '@mui/material';
import useTheme from '@/store/theme';

const waterphoneSound = new Audio(WaterphoneSound);
const horrorAmbience = new Audio(HorrorAmbience);

function Sidebar() {
  const [theme, themeActions] = useTheme();
  const [isSidebarOpen, sidebarActions] = useSidebar();

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
    <SwipeableDrawer
      anchor="left"
      open={isSidebarOpen}
      onClose={sidebarActions.close}
      onOpen={sidebarActions.open}
      disableBackdropTransition={false}
      swipeAreaWidth={30}
      data-pw="sidebar"
    >
      <Box p={2}>
        <Select
          fullWidth
          color="info"
          size="small"
          value={theme}
          onChange={(e) => handleChangeTheme(e.target.value as Themes)}
          data-pw="theme-toggle"
        >
          <MenuItem value={Themes.LIGHT}>Light</MenuItem>
          <MenuItem value={Themes.DARK}>Dark</MenuItem>
          <MenuItem value={Themes.SPOOKY}>Spooky</MenuItem>
        </Select>
      </Box>
      <List sx={{ width: 250 }}>
        {Object.values(routes)
          .filter((route) => route.title)
          .map(({ path, title, icon: Icon }) => (
            <ListItem sx={{ p: 0 }} key={path}>
              <ListItemButton component={Link} to={path as string} onClick={sidebarActions.close}>
                <ListItemIcon>{Icon ? <Icon /> : <DefaultIcon />}</ListItemIcon>
                <ListItemText>{title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </SwipeableDrawer>
  );
}

export default Sidebar;
