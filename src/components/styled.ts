import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';

const FlexBox = styled(Box)({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: '100%',
});

const Page = styled(FullSizeCenteredFlexBox)({
  flexDirection: 'column',
  overflow: 'hidden',
});

const IconSelect = styled(Select)({
  border: 0,
  outline: 0,
});

export { FlexBox, CenteredFlexBox, FullSizeCenteredFlexBox, IconSelect, Page };
