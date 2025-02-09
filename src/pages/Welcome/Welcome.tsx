import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import {
  Box,
  Divider,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import Chevron from '@mui/icons-material/ChevronRight';

function Welcome() {
  const dillsBirthday = new Date(1996, 9, 13);
  const curTime = new Date();

  const dillsCurrentAge = () =>
    Math.floor((curTime.getTime() - dillsBirthday.getTime()) / (1000 * 3600 * 24 * 365));

  return (
    <div className="section-container">
      <FullSizeCenteredFlexBox
        className="welcome-hero section"
        flexDirection="column"
        textAlign="center"
      >
        <Box
          className="welcome-hero-inner"
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
          <Meta title="Welcome" />
          <Typography variant="h4">Welcome to DillTice.com</Typography>
          <Typography variant="subtitle1" mb={2}>
            Your one stop shop for everything Dill related
          </Typography>
        </Box>
        <Chevron
          fontSize="large"
          className="scroll-chevron"
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            borderRadius: '50%',
            position: 'absolute',
            bottom: '10%',
            rotate: '90deg',
          }}
        />
      </FullSizeCenteredFlexBox>
      <FullSizeCenteredFlexBox className="section">
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
      </FullSizeCenteredFlexBox>
      <Divider />
      <FullSizeCenteredFlexBox className="section welcome-2" flexDirection="column">
        <Typography variant="h4" mb={2}>
          Interests
        </Typography>
        <List sx={{ width: '75%' }}>
          <ListItem>
            <ListItemText primary="Software Development" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Video Games" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Music" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Outdoors" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Travel" />
          </ListItem>
        </List>
      </FullSizeCenteredFlexBox>
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateX(0);} 
            40% {transform: translateX(-30px);} 
            60% {transform: translateX(-15px);} 
          } 
          .scroll-chevron {
            animation: bounce 2s infinite ease-in-out;
          }
          .welcome-hero {
            background-color: #000;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          .welcome-hero::before {
            content: "";
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-image: url(/images/camping-forest-panorama.jpeg);
            background-size: cover;
            background-position-x: -800px;
            background-attachment: fixed;
            filter: contrast(1.25) brightness(0.5) blur(4px);
          }

          .welcome-hero-inner {
            position: relative;
          }

          .section-container {
            height: 100vh;
            overflow: auto;
            scroll-snap-type: y mandatory;
            scroll-behavior: smooth;
          }

          .section {
            position: relative;
            height: calc(100vh + 12px);
            padding: 12px 24px;
            scroll-snap-align: center center;
          }
        `}
      </style>
    </div>
  );
}

export default Welcome;
