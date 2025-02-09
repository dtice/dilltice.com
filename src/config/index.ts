import isMobile from '@/utils/is-mobile';

import type { Notifications } from './types';

const title = 'DillTice.com';

const email = 'dillon.tice@gmail.com';

const repository = 'https://github.com/dtice/dilltice.com';

const messages = {
  app: {
    crash: {
      title: 'Oops! Something went wrong',
      options: {
        email: `contact with author by this email - ${email}`,
        reset: 'Press here to reset the application',
      },
    },
  },
  loader: {
    fail: 'Something went wrong with the loader',
  },
  images: {
    failed: 'Image(s) failed to load',
  },
  404: 'The page you are looking for might have been removed, had its name changed or is temporarily unavailable.',
};

const dateFormat = 'MMMM DD, YYYY';

const notifications: Notifications = {
  options: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 6000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/cover.png',
  description: 'The personal website of Dillon Tice',
};

export { loader, notifications, dateFormat, messages, repository, email, title, defaultMetaTags };
