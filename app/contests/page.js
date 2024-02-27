'use client'; // Assuming this is a comment

import Link from 'next/link';
import { useState } from 'react';
import { AppBar, Container, CssBaseline, Grid, Toolbar, Typography, Card, CardContent, CardMedia, Tab, Tabs, Paper } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import Switch from 'react-switch';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { isMobile } from 'react-device-detect';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LaptopIcon from '@mui/icons-material/Laptop';
import KitchenIcon from '@mui/icons-material/Kitchen';
import OpencartIcon from '@mui/icons-material/ShoppingCart';
import CarIcon from '@mui/icons-material/DriveEta';
import BookIcon from '@mui/icons-material/MenuBook';
import FashionIcon from '@mui/icons-material/EmojiPeople';
import BicycleIcon from '@mui/icons-material/DirectionsBike';
import GamepadIcon from '@mui/icons-material/SportsEsports';
import GemIcon from '@mui/icons-material/Stars';
import MicrochipIcon from '@mui/icons-material/Computer';
import PaletteIcon from '@mui/icons-material/Palette';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.5s, color 0.5s;
  }
`;

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
};

const darkTheme = {
  background: '#121212',
  text: '#ffffff',
};

const AnimatedContainer = styled(animated(Container))`
  margin-top: ${isMobile ? '2rem' : '4rem'};
`;

const AnimatedPaper = styled(animated(Paper))`
  padding: 20px;
  margin-top: 20px;
`;

const StyledTabs = styled(Tabs)`
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.primary};

  & .MuiTabs-indicator {
    background-color: ${(props) => props.theme.secondary};
  }

  & .Mui-selected,
  & .Mui-selected:hover {
    background-color: ${(props) => {
      switch (props.value) {
        case 0: // Bronze
          return '#cd7f32'; // Replace with bronze color
        case 1: // Silver
          return '#c0c0c0'; // Replace with silver color
        case 2: // Gold
          return '#ffd700'; // Replace with gold color
        case 3: // Platinum
          return '#e5e4e2'; // Replace with platinum color
        default:
          return 'purple'; // Default color for other cases
      }
    }};
  }
`;

const RankExplanation = () => (
  <AnimatedPaper elevation={3}>
    <Typography variant="h5" gutterBottom>
      How Curator Ranks Work:
    </Typography>
    <Typography variant="body1">
      Curator ranks are based on the points earned by participating in contests. There are four ranks:
    </Typography>
    <ul>
      <li><strong>Bronze (0 pts required)</strong>: Entry-level rank with basic contests.</li>
      <li><strong>Silver (500 pts required)</strong>: Intermediate rank with more challenging contests.</li>
      <li><strong>Gold (1000 pts required)</strong>: Advanced rank for experienced curators.</li>
      <li><strong>Platinum (5000 pts required)</strong>: Top-tier rank for elite curators.</li>
    </ul>
    <Typography variant="body2">
      Keep participating, winning, and leveling up to reach higher ranks!
    </Typography>
  </AnimatedPaper>
);

export default function Contests() {
  const [value, setValue] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const containerProps = useSpring({
    marginTop: isMobile ? '2rem' : '4rem',
  });

  const paperProps = useSpring({
    opacity: 1,
    marginTop: '20px',
    from: { opacity: 0, marginTop: '0px' },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <GlobalStyle />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rank Up and Win
          </Typography>
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            offColor="#61dafb"
            onColor="#282c34"
            offHandleColor="#ffffff"
            onHandleColor="#ffffff"
            height={24}
            width={48}
          />
        </Toolbar>
      </AppBar>
      <AnimatedContainer style={containerProps} maxWidth="lg">
        <RankExplanation />
        <Typography variant="h3" gutterBottom textAlign="center">
          Contest Categories
        </Typography>
        <StyledTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {contestsData.map((category, index) => (
            <Tab key={index} label={category.label} />
          ))}
        </StyledTabs>
        {contestsData.map((category, index) => (
          <Grid
            key={index}
            container
            justifyContent="center"
            style={{ display: value === index ? 'flex' : 'none' }}
          >
            {category.contests.map((contest) => (
              <Link
                href={`/contests/${contest.id}`}
                key={contest.id}
                style={{ textDecoration: 'none' }}
              >
                <ContestCard contest={contest} />
              </Link>
            ))}
          </Grid>
        ))}
      </AnimatedContainer>
    </ThemeProvider>
  );
}
