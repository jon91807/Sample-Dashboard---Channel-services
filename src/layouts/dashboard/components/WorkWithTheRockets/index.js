import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

// Styled component for the main card
const MainCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(3),
  borderRadius: '12px',
  boxShadow: theme.shadows[5],
  background: 'radial-gradient(circle, white, #ADD8E6, white)', // Changed to radial gradient white-blue-white
  backdropFilter: 'blur(10px)',
  width: '100%',
  margin: '20px 0', // Added margin for spacing
  height: 'auto', // Adjust height to match content
  position: 'relative', // For positioning child elements absolutely
  overflow: 'hidden', // Ensure bubbles stay within the card
}));

// Styled component for the text container
const TextContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '65%', // Ensure text container doesn't take too much space
  paddingRight: theme.spacing(4), // Added padding to the right side
  position: 'relative', // For positioning elements within this container
  zIndex: 1, // Ensure text appears above the bubble animation
}));

const Bubble = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  borderRadius: '50%',
  animation: 'rise 5s infinite ease-in',
  '@keyframes rise': {
    '0%': {
      transform: 'translateY(100%)',
      opacity: 0,
    },
    '50%': {
      opacity: 1,
    },
    '100%': {
      transform: 'translateY(-100%)',
      opacity: 0,
    },
  },
}));

const wordsPrimary = [
  { text: "efficiency", color: "#FF5733" },
  { text: "speed", color: "#3498DB" },
  { text: "reach", color: "#2ECC71" },
  { text: "engagement", color: "#9B59B6" },
  { text: "impact", color: "#E74C3C" },
  { text: "performance", color: "#1ABC9C" },
  { text: "growth", color: "#F39C12" },
  { text: "influence", color: "#D35400" },
  { text: "success", color: "#8E44AD" },
  { text: "momentum", color: "#2980B9" },
  { text: "results", color: "#27AE60" },
  { text: "visibility", color: "#E67E22" },
  { text: "connection", color: "#34495E" },
  { text: "outreach", color: "#16A085" },
  { text: "expansion", color: "#7F8C8D" },
  { text: "advancement", color: "#BDC3C7" },
  { text: "presence", color: "#C0392B" }
];

const wordsSecondary = [
  { text: "boost your performance", color: "#3498DB" },
  { text: "achieve your goals", color: "#2ECC71" },
  { text: "expand your influence", color: "#9B59B6" },
  { text: "increase your engagement", color: "#E74C3C" },
  { text: "maximize your results", color: "#1ABC9C" },
  { text: "optimize your reach", color: "#F39C12" },
  { text: "enhance your visibility", color: "#D35400" },
  { text: "drive success", color: "#8E44AD" },
  { text: "grow exponentially", color: "#2980B9" }
];

const CreditText = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  fontFamily: 'Roboto, sans-serif',
  background: 'linear-gradient(90deg, #8E2DE2, #4A00E0)', // Changed gradient color
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  marginRight: '20px',
  whiteSpace: 'nowrap',
  zIndex: 1, // Ensure text appears above the bubble animation
}));

const generateBubbles = (numBubbles) => {
  const colors = ['#FF5733', '#F39C12', '#27AE60', '#2980B9', '#8E44AD', '#D35400', '#E74C3C', '#2ECC71', '#3498DB', '#9B59B6'];
  const bubbles = [];
  for (let i = 0; i < numBubbles; i++) {
    const size = Math.random() * 20 + 10; // Random bubble size between 10px and 30px
    const left = Math.random() * 100; // Random position across the width of the card
    const delay = Math.random() * 5; // Random delay to stagger animations
    const color = colors[Math.floor(Math.random() * colors.length)]; // Random color
    bubbles.push(
      <Bubble key={i} style={{
        width: size,
        height: size,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        background: color,
      }} />
    );
  }
  return bubbles;
};

function WorkWithTheRocketsContent() {
  const textRefPrimary = useRef(null);
  const textRefSecondary = useRef(null);
  const creditBalanceRef = useRef(null);

  useEffect(() => {
    if (!textRefPrimary.current || !textRefSecondary.current || !creditBalanceRef.current) return;

    let wordIndexPrimary = 0;
    let wordIndexSecondary = 0;

    const updateTextPrimary = () => {
      gsap.to(textRefPrimary.current, {
        duration: 2,
        text: wordsPrimary[wordIndexPrimary].text,
        color: wordsPrimary[wordIndexPrimary].color, // Change color for sliding text
        ease: "power2.inOut",
        onComplete: () => {
          wordIndexPrimary = (wordIndexPrimary + 1) % wordsPrimary.length;
          gsap.to(textRefPrimary.current, { duration: 2, text: wordsPrimary[wordIndexPrimary].text, color: wordsPrimary[wordIndexPrimary].color, ease: "power2.inOut", delay: 4 });
        },
      });
    };

    const updateTextSecondary = () => {
      gsap.to(textRefSecondary.current, {
        duration: 2,
        text: wordsSecondary[wordIndexSecondary].text,
        color: wordsSecondary[wordIndexSecondary].color, // Change color for sliding text
        ease: "power2.inOut",
        onComplete: () => {
          wordIndexSecondary = (wordIndexSecondary + 1) % wordsSecondary.length;
          gsap.to(textRefSecondary.current, { duration: 2, text: wordsSecondary[wordIndexSecondary].text, color: wordsSecondary[wordIndexSecondary].color, ease: "power2.inOut", delay: 4 });
        },
      });
    };

    const animateCreditBalance = () => {
      const obj = { value: 0 };
      gsap.to(obj, {
        value: 1000,
        duration: 13,
        ease: "power2.inOut",
        onUpdate: () => {
          if (creditBalanceRef.current) {
            creditBalanceRef.current.textContent = `Credit Balance: ${Math.floor(obj.value)}`;
          }
        }
      });
    };

    updateTextPrimary();
    updateTextSecondary();
    animateCreditBalance();

    const intervalPrimary = setInterval(updateTextPrimary, 8000); // Change text every 8 seconds
    const intervalSecondary = setInterval(updateTextSecondary, 8000); // Change text every 8 seconds

    return () => {
      clearInterval(intervalPrimary);
      clearInterval(intervalSecondary);
    };
  }, []);

  return (
    <MainCard>
      <CreditText ref={creditBalanceRef}>
        Credit Balance: 0
      </CreditText>
      <TextContainer>
        <Typography variant="h4" fontWeight="bold" color="text.primary" sx={{ display: 'inline-block', fontSize: '1.5rem' }}>
          Grow with the maximum <span ref={textRefPrimary}></span>.
          Use your credits to <span ref={textRefSecondary}></span>.
        </Typography>
      </TextContainer>
      {generateBubbles(10)}
    </MainCard>
  );
}

export default WorkWithTheRocketsContent;
