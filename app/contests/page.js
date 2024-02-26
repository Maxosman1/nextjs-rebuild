import { Grid, Typography, Card, CardContent, CardMedia, Paper } from "@mui/material";
import { FaOpencart, FaLaptop, FaHome, FaHeart, FaCar, FaBook, FaTshirt, FaBicycle, FaGamepad, FaGem, FaMicrochip, FaPalette } from 'react-icons/fa';

import Link from "next/link";
import Slider from "react-slick";
import { styled } from "@mui/system";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const contestsData = [
  {
    id: "bronze-category-contests",
    label: "Bronze (100pts)",
    contests: [
      {
        id: "2a4dd854-186a-4a46-a150-d97b8ade9f8f",
        label: "Opinions",
        icon: <FaHeart />,
        description: "Share your thoughts and engage in meaningful debates.",
      },
      {
        id: "f62df48b-eb05-4fe8-950a-c0d6267d5a0f",
        label: "Tech & Gadgets",
        icon: <FaLaptop />,
        description: "Explore, review, and discuss the latest in technology.",
      },
      {
        id: "8b5c1868-6e6f-4221-8b73-1a70c0bad430",
        label: "Home & Kitchen",
        icon: <FaHome />,
        description: "Share insights about essential domestic items.",
      },
    ],
  },
  {
    id: "silver-category-contests",
    label: "Silver (200pts)",
    contests: [
      {
        id: "8732fa01-9e7b-4ddd-b114-fa99ae610746",
        label: "Beauty & Health",
        icon: <FaOpencart />,
        description: "Experience wellness with superior products.",
      },
      {
        id: "868e3e9e-6af0-4607-bd14-ddf57ded1222",
        label: "Auto & Travel",
        icon: <FaCar />,
        description: "Navigate the world, one review at a time.",
      },
      {
        id: "02ebb63e-2e9d-40ac-acfe-f0e9bd8080e1",
        label: "Books & Media",
        icon: <FaBook />,
        description: "Unveil literary gems and entertainment.",
      },
    ],
  },
  {
    id: "gold-category-contests",
    label: "Gold (500pts)",
    contests: [
      {
        id: "5d74efe8-e15f-4d9c-9b7f-4c531cdae13d",
        label: "Fashion",
        icon: <FaTshirt />,
        description: "Stay trendy with stylish updates.",
      },
      {
        id: "67e6c2d4-bcf1-4686-be0a-61fc40a1c9cf",
        label: "Sports & Outdoors",
        icon: <FaBicycle />,
        description: "Join in athletic gear showdowns.",
      },
      {
        id: "683ce9e4-5212-4560-bfc4-4d39973be8c7",
        label: "Toys & Games",
        icon: <FaGamepad />,
        description: "Share the fun with toy and game showdowns.",
      },
    ],
  },
  {
    id: "platinum-category-contests",
    label: "Platinum (1000pts)",
    contests: [
      {
        id: "0697422c-d511-4e09-a6a2-3b1f47723f50",
        label: "Luxury Items",
        icon: <FaGem />,
        description: "Review and rate the finest luxuries.",
      },
      {
        id: "48ff86f0-79f4-41ff-8e04-cc226a6f8485",
        label: "High-End Tech",
        icon: <FaMicrochip />,
        description: "Experience technological innovation.",
      },
      {
        id: "48f3598a-8c2d-42de-ac66-7bbab658295a",
        label: "Fine Art",
        icon: <FaPalette />,
        description: "Appraise and discuss exquisite art pieces.",
      },
    ],
  },
];

// Custom styled components using Material-UI styling
const StyledSection = styled("section")({
  margin: "20px 0",
});

const StyledPaper = styled(Paper)({
  padding: "20px",
  textAlign: "center",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
});

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: "0 10px",
});

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  objectFit: "contain",
});

// Contest Card Component
const ContestCard = ({ contest }) => (
  <StyledCard>
    <StyledCardMedia component="img" image={contest.icon} alt={contest.label} />
    <StyledCardContent>
      <Typography gutterBottom variant="h5" component="div">
        {contest.label}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {contest.description}
      </Typography>
    </StyledCardContent>
  </StyledCard>
);

// Main Contests Page Component
const Contests = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {contestsData.map((category) => (
        <StyledSection key={category.id}>
          <StyledPaper elevation={3}>
            <Typography variant="h4" gutterBottom>
              {category.label}
            </Typography>
            <Slider {...sliderSettings}>
              {category.contests.map((contest) => (
                <Link
                  href={`/contests/${contest.id}`}
                  key={contest.id}
                  style={{ textDecoration: "none" }}
                >
                  <ContestCard contest={contest} />
                </Link>
              ))}
            </Slider>
          </StyledPaper>
        </StyledSection>
      ))}
    </div>
  );
};

export default Contests;