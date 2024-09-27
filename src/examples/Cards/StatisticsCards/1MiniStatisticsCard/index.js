import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import { styled, keyframes } from '@mui/system';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";

// Keyframe for continuous green border animation
const greenLine = keyframes`
  0% {
    border-color: transparent;
    box-shadow: 0 0 5px green;
  }
  25% {
    border-color: green;
    box-shadow: 0 0 10px green;
  }
  50% {
    border-color: transparent;
    box-shadow: 0 0 5px green;
  }
  75% {
    border-color: green;
    box-shadow: 0 0 10px green;
  }
  100% {
    border-color: transparent;
    box-shadow: 0 0 5px green;
  }
`;

// Keyframe for continuous red border animation
const redLine = keyframes`
  0% {
    border-color: transparent;
    box-shadow: 0 0 5px red;
  }
  25% {
    border-color: red;
    box-shadow: 0 0 10px red;
  }
  50% {
    border-color: transparent;
    box-shadow: 0 0 5px red;
  }
  75% {
    border-color: red;
    box-shadow: 0 0 10px red;
  }
  100% {
    border-color: transparent;
    box-shadow: 0 0 5px red;
  }
`;

// Keyframe for arrow animation
const arrowPulse = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
`;

const StyledCard = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '24px', // Increased border radius
  width: '100%', // Full width within the grid
  maxWidth: '300px', // Set a maximum width for larger screens
  backgroundColor: '#ffffff', // Set the background color to white
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%', // Full width for small screens
  },
}));

const AnimatedArrowIcon = styled(MdKeyboardArrowRight)(({ theme, color }) => ({
  animation: `${arrowPulse} 1s infinite ease-in-out`,
  fontSize: '2rem',
  color: color === 'success' ? 'green' : 'red',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem', // Smaller font size for small screens
  },
}));

function MiniStatisticsCard({ bgColor, title, count, percentage, icon, route }) {
  const navigate = useNavigate();

  const defaultTitle = {
    fontWeight: 'medium',
    text: '',
  };

  const titleText = title?.text || defaultTitle.text;
  const titleFontWeight = title?.fontWeight || defaultTitle.fontWeight;

  // Determine animation and border color based on percentage color
  let animation, borderColor;
  if (percentage.color === 'success') {
    animation = `${greenLine} 8s linear infinite`;
    borderColor = 'green';
  } else if (percentage.color === 'error') {
    animation = `${redLine} 8s linear infinite`;
    borderColor = 'red';
  } else {
    animation = 'none';
    borderColor = 'transparent';
  }

  return (
    <StyledCard onClick={() => navigate(route)}>
      <SoftBox
        bgColor="white" // Ensure bg color is white
        variant="gradient"
        p={2}
        borderRadius="24px" // Increased border radius
        sx={{
          backgroundColor: '#ffffff', // Set the background color to white
          borderRadius: '24px',
          boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Grid container alignItems="center">
          <Grid item>
            <SoftBox
              variant="gradient"
              bgColor={bgColor === 'white' ? icon.color : 'white'}
              color={bgColor === 'white' ? 'white' : 'dark'}
              width="3rem"
              height="3rem"
              borderRadius="14px" // Increased border radius
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={1}
              sx={{
                animation: animation,
                border: '2px solid',
                borderColor: borderColor,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
                '@media (max-width: 600px)': {
                  width: '3rem', // Smaller width for small screens
                  height: '3rem', // Smaller height for small screens
                },
              }}
            >
              <Icon fontSize="large" color="inherit">
                {icon.component}
              </Icon>
            </SoftBox>
          </Grid>
          <Grid item xs style={{ marginLeft: '1rem' }}> {/* Added margin to create spacing */}
            <SoftBox lineHeight={1}>
              <SoftTypography
                variant="body1"
                color={bgColor === 'white' ? 'text' : 'dark'}
                fontWeight={titleFontWeight}
                sx={{
                  '@media (max-width: 600px)': {
                    fontSize: '0.875rem', // Smaller font size for small screens
                  },
                }}
              >
                {titleText}
              </SoftTypography>
              <SoftTypography
                variant="h4"
                fontWeight="bold"
                color="#1E3A8A" // Set the color of the count to dark blue
                sx={{
                  '@media (max-width: 600px)': {
                    fontSize: '1.25rem', // Smaller font size for small screens
                  },
                }}
              >
                {count}
              </SoftTypography>
              <SoftTypography
                variant="body2"
                color={percentage.color}
                fontWeight="normal"
                sx={{
                  '@media (max-width: 600px)': {
                    fontSize: '0.75rem', // Smaller font size for small screens
                  },
                }}
              >
                {percentage.text}
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item>
            <AnimatedArrowIcon color={percentage.color} style={{ marginLeft: 'auto' }} />
          </Grid>
        </Grid>
      </SoftBox>
    </StyledCard>
  );
}

MiniStatisticsCard.defaultProps = {
  bgColor: 'info',
  title: {
    fontWeight: 'medium',
    text: '',
  },
  percentage: {
    color: 'success',
    text: '',
  },
};

MiniStatisticsCard.propTypes = {
  bgColor: PropTypes.oneOf([
    'white',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'dark',
  ]),
  title: PropTypes.shape({
    fontWeight: PropTypes.oneOf(['light', 'regular', 'medium', 'bold']),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
      'dark',
    ]),
    text: PropTypes.string,
  }),
  icon: PropTypes.shape({
    color: PropTypes.oneOf([
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
      'dark',
    ]),
    component: PropTypes.node.isRequired,
  }).isRequired,
  route: PropTypes.string.isRequired,
};

export default MiniStatisticsCard;
