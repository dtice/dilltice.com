import ForumIcon from '@mui/icons-material/Forum';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    title: 'Welcome',
    icon: HomeIcon,
  },
  [Pages.AboutMe]: {
    component: asyncComponentLoader(() => import('@/pages/AboutMe')),
    path: '/about-me',
    title: 'About Me',
    icon: PersonIcon,
  },
  [Pages.Blog]: {
    component: asyncComponentLoader(() => import('@/pages/Blog')),
    path: '/blog',
    title: 'Blog',
    icon: ForumIcon,
  },
  [Pages.Sandbox]: {
    component: asyncComponentLoader(() => import('@/pages/Sandbox')),
    path: '/sandbox',
    title: 'Sandbox',
    icon: BeachAccessIcon,
  },
  [Pages.Wiki]: {
    component: asyncComponentLoader(() => import('@/pages/Wiki')),
    path: '/wiki',
    title: 'Wiki',
    icon: SchoolIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
