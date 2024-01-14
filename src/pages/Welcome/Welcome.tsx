import Meta from '@/components/Meta';
import { Page } from '@/components/styled';
import { Typography } from '@mui/material';

function Welcome() {
  // const isPortrait = useOrientation();

  // const width = isPortrait ? '40%' : '30%';
  // const height = isPortrait ? '30%' : '40%';
  const dillsBirthday = new Date(1996, 9, 13);
  const curTime = new Date();

  const dillsCurrentAge = () =>
    Math.floor((curTime.getTime() - dillsBirthday.getTime()) / (1000 * 3600 * 24 * 365));

  return (
    <Page pb={20}>
      <Meta title="Welcome" />
      <Typography variant="h4" mb={2}>
        Welcome to DillTice.com
      </Typography>
      <Typography variant="body1">Hello internet traveller,</Typography>
      <Typography variant="body2">
        My name is Dillon Tice. I am a {dillsCurrentAge()} year old software developer from Spokane,
        WA.
      </Typography>
    </Page>
  );
}

export default Welcome;
