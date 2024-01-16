import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import Chevron from '@mui/icons-material/ChevronRight';

function Welcome() {
  const dillsBirthday = new Date(1996, 9, 13);
  const curTime = new Date();

  const dillsCurrentAge = () =>
    Math.floor((curTime.getTime() - dillsBirthday.getTime()) / (1000 * 3600 * 24 * 365));

  return (
    <>
      <FullSizeCenteredFlexBox
        className="welcome-hero"
        flexDirection="column"
        textAlign="center"
        color="white"
      >
        <div className="welcome-hero-inner">
          <Meta title="Welcome" />
          <Typography variant="h4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Welcome to DillTice.com
          </Typography>
          <Typography
            variant="subtitle1"
            mb={2}
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Your one stop shop for everything Dill related
          </Typography>
        </div>
        <Chevron
          fontSize="large"
          className="scroll-chevron"
          sx={{
            position: 'absolute',
            bottom: '10%',
            rotate: '90deg',
          }}
        />
      </FullSizeCenteredFlexBox>
      <FullSizeCenteredFlexBox flexDirection="column" className="section welcome-1" width="100%">
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <div
              style={{
                margin: 'auto',
                width: '480px',
                height: '480px',
                backgroundImage: 'url(/images/dill.jpeg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                filter: 'grayscale(100%) contrast(1.25) brightness(0.75)',
              }}
            ></div>
          </Grid>
          <Grid item xs={12} md={6} alignSelf="center">
            <Typography variant="h4" textAlign="left" mb={2}>
              Hello internet traveller,
            </Typography>
            <Typography variant="body1" maxWidth="600px">
              My name is Dillon Tice. I am a {dillsCurrentAge()} year old software developer from
              Spokane, WA. <br />
              Keep scrolling to learn more about me, or use the sidebar to navigate to other pages
              such as my resume, blog, or the sandbox!
            </Typography>
          </Grid>
        </Grid>
      </FullSizeCenteredFlexBox>
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
            position: relative;
            min-height: 100vh;
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

          .section {
            width: 100%;
            position: relative;
            height: calc(100vh + 24px);
          }

          .welcome-2 {
            background-color: #000;
            color: #fff;
          }
        `}
      </style>
    </>
  );
}

export default Welcome;
