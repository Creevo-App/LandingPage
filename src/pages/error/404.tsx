import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          py: 8,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '6rem', md: '8rem' },
            fontWeight: 700,
            color: 'primary.main',
            mb: 2,
            textShadow: '0 4px 32px rgba(139,92,246,0.3)',
          }}
        >
          404
        </Typography>
        
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 600,
            color: 'text.primary',
            mb: 2,
          }}
        >
          Page Not Found
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.125rem' },
            color: 'text.secondary',
            mb: 4,
            maxWidth: 500,
            lineHeight: 1.6,
          }}
        >
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/')}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            Go Home
          </Button>
          
          {/* TODO: Add back in when we have more pages */}
          {/* <Button
            variant="outlined"
            size="large"
            onClick={() => navigate(-1)}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              borderColor: 'rgba(139,92,246,0.5)',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.main',
                backgroundColor: 'rgba(139,92,246,0.05)',
              },
            }}
          >
            Go Back
          </Button> */}
        </Box>
      </Box>
    </Container>
  );
}
