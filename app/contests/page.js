User
'use client' // 
import Link from 'next/link'
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
`;

const contestsData = [
  {
    id: 'bronze-category-contests',
    label: 'Bronze (100pts)',
    contests: [
      {
        id: '2a4dd854-186a-4a46-a150-d97b8ade9f8f',
        label: 'Opinions',
        description: 'Broadcast your thoughts, engage in debate.',
        icon: 'Opinions',
      },
      {
        id: 'f62df48b-eb05-4fe8-950a-c0d6267d5a0f',
        label: 'Tech & Gadgets',
        description: 'Explore, review, discuss the latest technology.',
        icon: 'Tech & Gadgets',
      },
      {
        id: '8b5c1868-6e6f-4221-8b73-1a70c0bad430',
        label: 'Home & Kitchen',
        description: 'Share insights on domestic essentials.',
        icon: 'Home & Kitchen',
      },
    ],
  },
  {
    id: 'silver-category-contests',
    label: 'Silver (200pts)',
    contests: [
      {
        id: '8732fa01-9e7b-4ddd-b114-fa99ae610746',
        label: 'Beauty & Health',
        description: 'Experience wellness with superior products.',
        icon: 'Beauty & Health',
      },
      {
        id: '868e3e9e-6af0-4607-bd14-ddf57ded1222',
        label: 'Auto & Travel',
        description: 'Navigate the world, one review at a time.',
        icon: 'Auto & Travel',
      },
      {
        id: '02ebb63e-2e9d-40ac-acfe-f0e9bd8080e1',
        label: 'Books & Media',
        description: 'Unveil literary gems and entertainment.',
        icon: 'Books & Media',
      },
    ],
  },
  {
    id: 'gold-category-contests',
    label: 'Gold (500pts)',
    contests: [
      {
        id: '5d74efe8-e15f-4d9c-9b7f-4c531cdae13d',
        label: 'Fashion',
        description: 'Stay trendy with stylish updates.',
        icon: 'Fashion',
      },
      {
        id: '67e6c2d4-bcf1-4686-be0a-61fc40a1c9cf',
        label: 'Sports & Outdoors',
        description: 'Join in athletic gear showdowns.',
        icon: 'Sports & Outdoors',
      },
      {
        id: '683ce9e4-5212-4560-bfc4-4d39973be8c7',
        label: 'Toys & Games',
        description: 'Share the fun with toy and game showdowns.',
        icon: 'Toys & Games',
      },
    ],
  },
  {
    id: 'platinum-category-contests',
    label: 'Platinum (1000pts)',
    contests: [
      {
        id: '0697422c-d511-4e09-a6a2-3b1f47723f50',
        label: 'Luxury Items',
        description: 'Review and rate the finest luxuries.',
        icon: 'Luxury Items',
      },
      {
        id: '48ff86f0-79f4-41ff-8e04-cc226a6f8485',
        label: 'High-End Tech',
        description: 'Experience technological innovation.',
        icon: 'High-End Tech',
      },
      {
        id: '48f3598a-8c2d-42de-ac66-7bbab658295a',
        label: 'Fine Art',
        description: 'Appraise and discuss exquisite art pieces.',
        icon: 'Fine Art',
      },
    ],
  },
  // Add more categories if needed
];

const contestIcons = {
  'Opinions': <FavoriteIcon />,
  'Tech & Gadgets': <LaptopIcon />,
  'Home & Kitchen': <KitchenIcon />,
  'Beauty & Health': <OpencartIcon />,
  'Auto & Travel': <CarIcon />,
  'Books & Media': <BookIcon />,
  'Fashion': <FashionIcon />,
  'Sports & Outdoors': <BicycleIcon />,
  'Toys & Games': <GamepadIcon />,
  'Luxury Items': <GemIcon />,
  'High-End Tech': <MicrochipIcon />,
  'Fine Art': <PaletteIcon />,
  // Add more icons as needed
};

const ContestCard = ({ contest }) => (
  <Card sx={{ maxWidth: 345, m: 2 }}>
    <CardMedia
      component="img"
      height="200"
      src={contestIcons[contest.icon]}
      alt={contest.label}
      sx={{ objectFit: 'contain' }}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {contest.label}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {contest.description}
      </Typography>
    </CardContent>
  </Card>
);

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
        <RankExplanation />
      </AnimatedContainer>
    </ThemeProvider>
  );
}