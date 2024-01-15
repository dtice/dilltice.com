import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import BloodBar from '../../theme/images/spooky/BloodBar.gif';

import { FlexBox } from '@/components/styled';
import { repository } from '@/config';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';

import { Themes } from '@/theme/types';

function Header() {
  const [, sidebarActions] = useSidebar();
  const [theme] = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }} data-pw={`theme-${theme}`}>
      <AppBar elevation={1} style={{ top: 0 }} position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="start"
              color="info"
              aria-label="menu"
              sx={{ mr: 1, position: 'sticky', top: 0 }}
            >
              <MenuIcon />
            </IconButton>
          </FlexBox>
          <FlexBox>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="It's open source" arrow>
              <IconButton color="info" size="large" component="a" href={repository} target="_blank">
                <GitHubIcon />
              </IconButton>
            </Tooltip>
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
