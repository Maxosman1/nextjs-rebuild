// Contests.js
import { AppBar, Container, CssBaseline, Grid, Toolbar, Typography, Card, CardContent, Tab, Tabs } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import {
  FaHeart,
  FaLaptop,
  FaHome,
  FaOpencart,
  FaCar,
  FaBook,
  FaTshirt,
  FaBicycle,
  FaGamepad,
  FaGem,
  FaMicrochip,
  FaPalette,
} from 'react-icons/fa';

const iconMap = {
  Opinions: FaHeart,
  'Tech & Gadgets': FaLaptop,
  'Home & Kitchen': FaHome,
  'Beauty & Health': FaOpencart,
  'Auto & Travel': FaCar,
  'Books & Media': FaBook,
  Fashion: FaTshirt,
  'Sports & Outdoors': FaBicycle,
  'Toys & Games': FaGamepad,
  'Luxury Items': FaGem,
  'High-End Tech': FaMicrochip,
  'Fine Art': FaPalette,
  // Add more icons as needed
};

const ContestCard = ({ contest }) => {
  const IconComponent = iconMap[contest.label] || FaHeart; // Default to FaHeart if the icon is not found

  return (
    <Card>
      <CardContent>
        <div className="icon-container">
          <IconComponent size={80} />
        </div>
        <Typography variant="h5" component="div" gutterBottom>
          {contest.label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {contest.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const ContestsCarousel = ({ contests }) => (
  <Slider {...carouselSettings}>
    {contests.map((contest) => (
      <ContestCard key={contest.id} contest={contest} />
    ))}
  </Slider>
);

const ContestsGrid = () => (
  <Grid container spacing={3}>
    {contestsData.map((category) => (
      <Grid item xs={12} key={category.id}>
        <Typography variant="h4" gutterBottom>
          {category.label}
        </Typography>
        <Grid container spacing={2}>
          {category.contests.map((contest) => (
            <Grid item key={contest.id}>
              <ContestCard contest={contest} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    ))}
  </Grid>
);

const ContestsTabs = () => (
  <>
    <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
      {contestsData.map((category) => (
        <Tab key={category.id} label={category.label} />
      ))}
    </Tabs>
    {contestsData.map((category, index) => (
      <TabPanel key={category.id} value={value} index={index}>
        {category.contests.map((contest) => (
          <ContestCard key={contest.id} contest={contest} />
        ))}
      </TabPanel>
    ))}
  </>
);

const InteractiveTile = ({ contest }) => (
  <div className="interactive-tile">
    <IconComponent size={80} />
    <div className="tile-content">
      <Typography variant="h5" component="div" gutterBottom>
        {contest.label}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {contest.description}
      </Typography>
    </div>
  </div>
);

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const categories = [
  { label: 'Card Layout', component: <ContestsGrid /> },
  { label: 'Carousel', component: <ContestsCarousel contests={contestsData[0].contests} /> },
  { label: 'Grid Layout', component: <ContestsGrid /> },
  { label: 'Tabbed Navigation', component: <ContestsTabs /> },
  { label: 'Interactive Tiles', component: <InteractiveTile contest={contestsData[0].contests[0]} /> },
];

export default function Contests() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
Curatrs          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom textAlign="center">
          Contest Categories
        </Typography>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
          {categories.map((category, index) => (
            <Tab key={index} label={category.label} />
          ))}
        </Tabs>
        <TabPanel value={value} index={0}>
          {categories[0].component}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {categories[1].component}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {categories[2].component}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {categories[3].component}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {categories[4].component}
        </TabPanel>
      </Container>
    </>
  );
}
