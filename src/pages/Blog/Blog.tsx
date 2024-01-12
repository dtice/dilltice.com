import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Blog() {
  return (
    <>
      <Meta title="Blog" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Blog</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Blog;
