import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
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
    <>
      <AppBar color="transparent" style={{ top: 0, boxShadow: 'none' }}>
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
        {theme === Themes.SPOOKY && (
          <img
            src={BloodBar}
            draggable="false"
            width="100%"
            style={{
              position: 'absolute',
              top: '100%',
              userSelect: 'none',
              pointerEvents: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              zIndex: 99999,
            }}
          />
        )}
      </AppBar>
    </>
  );
}

export default Header;
