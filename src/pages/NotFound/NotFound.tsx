import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox, FullSizeCenteredFlexBox } from '@/components/styled';
import { messages } from '@/config';

function NotFound() {
  return (
    <Container sx={{ height: '100%' }}>
      <FullSizeCenteredFlexBox flexDirection="column">
        <CenteredFlexBox flexDirection="column">
          <Typography sx={{ mt: 2 }} variant="h4">
            404 Not Found
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: (theme) => theme.palette.info.main, textAlign: 'center' }}
          >
            {messages[404]}
          </Typography>
        </CenteredFlexBox>
      </FullSizeCenteredFlexBox>
    </Container>
  );
}

export default NotFound;
