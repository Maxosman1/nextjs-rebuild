// Contests.js
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
      height="200" // Increased height
      image={contestIcons[contest.label]}
      alt={contest.label}
      sx={{ objectFit: 'contain' }} // Ensures the icon is contained within the bounds
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
          {categories.map((category, index) => (
            <Tab key={index} label={category.label} />
          ))}
        </Tabs>
        {categories.map((category, index) => (
          <TabPanel key={index} value={value} index={index}>
            <Grid container justifyContent="center">
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
          </TabPanel>
        ))}
      </Container>
    </>
  );
}
