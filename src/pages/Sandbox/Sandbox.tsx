import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Sandbox() {
  return (
    <>
      <Meta title="Sandbox" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Sandbox</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Sandbox;
