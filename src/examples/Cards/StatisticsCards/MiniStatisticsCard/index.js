import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import { styled } from '@mui/system';
import SoftBox from '../../../../components/SoftBox';
import SoftTypography from '../../../../components/SoftTypography';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

function MiniStatisticsCard({ bgColor, title, count, percentage, icon, route }) {
  const navigate = useNavigate();

  // Default values for title object properties
  const defaultTitle = {
    fontWeight: 'medium',
    text: '',
  };

  // Handle possible undefined title properties
  const titleText = title?.text || defaultTitle.text;
  const titleFontWeight = title?.fontWeight || defaultTitle.fontWeight;

  return (
    <StyledCard onClick={() => navigate(route)}>
      <SoftBox bgColor={bgColor} variant="gradient" p={2} borderRadius="md">
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <SoftBox
              variant="gradient"
              bgColor={bgColor === 'white' ? icon.color : 'white'}
              color={bgColor === 'white' ? 'white' : 'dark'}
              width="4rem"
              height="4rem"
              borderRadius="md"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={1}
            >
              <Icon fontSize="large" color="inherit">
                {icon.component}
              </Icon>
            </SoftBox>
          </Grid>
          <Grid item xs={12}>
            <SoftBox lineHeight={1}>
              <SoftTypography
                variant="body1"
                color={bgColor === 'white' ? 'text' : 'white'}
                fontWeight={titleFontWeight}
              >
                {titleText}
              </SoftTypography>
              <SoftTypography
                variant="h4"
                fontWeight="bold"
                color={bgColor === 'white' ? 'dark' : 'white'}
              >
                {count}
              </SoftTypography>
              <SoftTypography
                variant="body2"
                color={percentage.color}
                fontWeight="normal"
              >
                {percentage.text}
              </SoftTypography>
            </SoftBox>
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
