import { useState } from 'react';
import { AppBar, Container, CssBaseline, Grid, Toolbar, Typography, Card, CardContent, CardMedia, Tab, Tabs } from '@mui/material';
import IconButton from '@mui/material/IconButton';
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
import Link from 'next/link';

const contestsData = [
  {
    id: 'bronze-category-contests',
    label: 'Bronze (100pts)',
    contests: [
      {
        id: '2a4dd854-186a-4a46-a150-d97b8ade9f8f',
        label: 'Opinions',
        description: 'Broadcast your thoughts, engage in debate.',
      },
      {
        id: 'f62df48b-eb05-4fe8-950a-c0d6267d5a0f',
        label: 'Tech & Gadgets',
        description: 'Explore, review, discuss latest technology.',
      },
      {
        id: '8b5c1868-6e6f-4221-8b73-1a70c0bad430',
        label: 'Home & Kitchen',
        description: 'Share insights on domestic essentials.',
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
      },
      {
        id: '868e3e9e-6af0-4607-bd14-ddf57ded1222',
        label: 'Auto & Travel',
        description: 'Navigate the world, one review at a time.',
      },
      {
        id: '02ebb63e-2e9d-40ac-acfe-f0e9bd8080e1',
        label: 'Books & Media',
        description: 'Unveil literary gems and entertainment.',
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
      },
      {
        id: '67e6c2d4-bcf1-4686-be0a-61fc40a1c9cf',
        label: 'Sports & Outdoors',
        description: 'Join in athletic gear showdowns.',
      },
      {
        id: '683ce9e4-5212-4560-bfc4-4d39973be8c7',
        label: 'Toys & Games',
        description: 'Share the fun with toy and game showdowns.',
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
      },
      {
        id: '48ff86f0-79f4-41ff-8e04-cc226a6f8485',
        label: 'High-End Tech',
        description: 'Experience technological innovation.',
      },
      {
        id: '48f3598a-8c2d-42de-ac66-7bbab658295a',
        label: 'Fine Art',
        description: 'Appraise and discuss exquisite art pieces.',
      },
    ],
  },
  // Add more categories if needed
];

const contestIcons = {
  Opinions: <FavoriteIcon />,
  'Tech & Gadgets': <LaptopIcon />,
  'Home & Kitchen': <KitchenIcon />,
  'Beauty & Health': <OpencartIcon />,
  'Auto & Travel': <CarIcon />,
  'Books & Media': <BookIcon />,
  Fashion: <FashionIcon />,
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
      image={contestIcons[contest.label]}
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

export default function Contests() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom textAlign="center">
          Contest Categories
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {contestsData.map((category, index) => (
            <Tab key={index} label={category.label} />
          ))}
        </Tabs>
        {contestsData.map((category, index) => (
          <Grid key={index} container justifyContent="center">
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
      </Container>
    </>
  );
}
