import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import { Box, Divider, Grid2 as Grid, SxProps, Theme, Typography } from '@mui/material';
import Chevron from '@mui/icons-material/ChevronRight';
import { PropsWithChildren } from 'react';

function WelcomeHero({ children }: PropsWithChildren) {
  return (
    <Section sx={{ justifyContent: 'center' }}>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          paddingX: 4,
          paddingY: 2,
          borderRadius: 2,
          border: 1,
          borderColor: (theme) => theme.palette.text.primary,
          boxShadow: 4,
        }}
      >
        {children}
      </Box>
      <Chevron
        fontSize="large"
        sx={{
          position: 'absolute',
          bottom: '10%',
          rotate: '90deg',
          animation: 'bounce 2s infinite ease-in-out',
        }}
      />
    </Section>
  );
}

function SectionContainer({ children, sx }: PropsWithChildren<{ sx?: SxProps<Theme> }>) {
  return (
    <Box
      height="100vh"
      width="100vw"
      sx={{
        overflow: 'auto',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

function Section({ children, sx }: PropsWithChildren<{ sx?: SxProps<Theme> }>) {
  return (
    <FullSizeCenteredFlexBox
      position="relative"
      height="calc(100vh + 12px)"
      padding={2}
      sx={{ scrollSnapAlign: 'center center', ...sx }}
    >
      {children}
    </FullSizeCenteredFlexBox>
  );
}

function FileTree({ children }: PropsWithChildren) {
  return (
    <Box sx={{ fontFamily: 'monospace', color: 'text.secondary' }}>
      <FileTreeFolder isRoot={true}>{children}</FileTreeFolder>
    </Box>
  );
}

function FileTreeFolder({
  children,
  name,
  isRoot,
}: PropsWithChildren<{ name?: string; isRoot?: boolean }>) {
  return (
    <Box>
      <FileTreeFile name={name} isRoot={isRoot} />
      <Box sx={{ borderLeft: 2, borderColor: 'text.secondary', pl: 2, ml: 1 }}>{children}</Box>
    </Box>
  );
}

function FileTreeFile({ name, isRoot }: { name?: string; isRoot?: boolean }) {
  const beforeStyles = isRoot
    ? {}
    : {
        content: `''`,
        width: '24px',
        height: '1px',
        backgroundColor: 'white',
        marginLeft: '-16px',
        marginRight: 1,
      };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: 1,
        marginTop: -1.5,
        '&::before': beforeStyles,
      }}
    >
      {name && (
        <Typography variant="body1" sx={{ fontFamily: 'monospace', color: 'text.secondary' }}>
          {name}
        </Typography>
      )}
    </Box>
  );
}

function Welcome() {
  const dillsBirthday = new Date(1996, 9, 13);
  const curTime = new Date();

  const dillsCurrentAge = () =>
    Math.floor((curTime.getTime() - dillsBirthday.getTime()) / (1000 * 3600 * 24 * 365));

  return (
    <SectionContainer>
      <WelcomeHero>
        <Meta title="Welcome" />
        <Typography variant="h4">Welcome to DillTice.com</Typography>
        <Typography variant="subtitle1" mb={2}>
          Your one stop shop for everything Dill related
        </Typography>
      </WelcomeHero>
      <Section>
        <Grid container>
          <Grid textAlign="center" size={4}>
            <Typography variant="h4" mb={2}>
              About Me
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="body1">Hello internet traveller,</Typography>
            <Typography variant="body1">
              My name is Dillon Tice. I am a {dillsCurrentAge()} year old software developer from
              Spokane, WA.
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Divider />
      <Section>
        <Box>
          <FileTree>
            <FileTreeFolder name="projects">
              <FileTreeFile name="dilltice.com" />
              <FileTreeFile name="bonemash" />
              <FileTreeFolder name="subprojects">
                <FileTreeFile name="dilltice.com" />
                <FileTreeFile name="bonemash" />
              </FileTreeFolder>
            </FileTreeFolder>
            <FileTreeFolder name="personal">
              <FileTreeFile name="resume" />
              <FileTreeFile name="cover-letter" />
            </FileTreeFolder>
          </FileTree>
        </Box>
      </Section>
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateX(0);} 
            40% {transform: translateX(-30px);} 
            60% {transform: translateX(-15px);} 
          }
        `}
      </style>
    </SectionContainer>
  );
}

export default Welcome;
