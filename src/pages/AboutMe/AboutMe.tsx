import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function AboutMe() {
  return (
    <>
      <Meta title="About Me" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Typography variant="h3">About Me</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default AboutMe;
