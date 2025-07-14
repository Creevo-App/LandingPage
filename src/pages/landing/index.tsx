import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Container,
  Link,
} from '@mui/material';
import { Bolt } from '@mui/icons-material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useState } from 'react';
import { addEmailToWaitlist } from '../../services/waitlistService';

export const Landing = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleJoinWaitlist = async () => {
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      await addEmailToWaitlist(email);
      setMessage('Successfully joined the waitlist!');
      setEmail('');
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : 'Network error. Please try again.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  const teamMembers = [
    {
      name: 'Amir Tarkian',
      // education: 'Business Development Lead',
      role: 'Technical Producer & Developer Outreach',
      linkedin: 'https://www.linkedin.com/in/amirtarkian',
      github: 'https://github.com/amirtarkian',
      avatar: './amir-headshot.jpeg',
    },
    {
      name: 'Mia Siner',
      // education: 'Finance & Operations Lead',
      role: 'Operations & Pipeline Coordinator',
      linkedin: 'https://www.linkedin.com/in/miasiner',
      github: 'https://github.com/miasiner',
      avatar: './mia-headshot.jpeg',
    },
    {
      name: 'Mikil Foss',
      // education: 'Machine Learning Research Engineer',
      role: 'Gameplay Systems & Tooling Engineer',
      linkedin: 'https://www.linkedin.com/in/mikil-foss/',
      github: 'https://github.com/mikilfoss',
      avatar: './mikil-headshot.jpeg',
    },
    {
      name: 'Owen Ratgen',
      // education: 'Full Stack & Cloud Engineer',
      role: 'UI/UX & Frontend Systems Developer',
      linkedin: 'https://www.linkedin.com/in/owen-ratgen',
      github: 'https://github.com/owenratgen',
      avatar: './owen-headshot.jpeg',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 4,
          minHeight: '60vh',
          mb: 14,
          mt: 6,
        }}
      >
        <Box
          sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Typography variant="h1" sx={{ color: 'text.primary' }}>
            Welcome to Creevo.app
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{ maxWidth: 600, mb: 2, color: 'text.secondary' }}
        >
          Are you a game developer that needs help with creating a demo? Enter
          your email below to get in touch with us within 24 hours!
        </Typography>

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <TextField
            id="email-input"
            label="Enter your email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            sx={{ minWidth: 300 }}
          />
          <Button
            variant="contained"
            onClick={handleJoinWaitlist}
            disabled={isLoading}
          >
            {isLoading ? 'Joining...' : 'Join'}
          </Button>
        </Box>
        {message && (
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              color: message.includes('Successfully') ? 'success.main' : 'error.main'
            }}
          >
            {message}
          </Typography>
        )}
      </Box>

      {/* About Us Section */}
      <Box
        id="about-section"
        sx={{ textAlign: 'center', mt: 12, mb: 20, py: 4 }}
      >
        <Typography variant="h2" sx={{ mb: 4, color: 'text.primary' }}>
          Meet the Team
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            mx: 'auto',
            mb: 6,
            opacity: 0.8,
            color: 'text.secondary',
          }}
        >
          Combined experience of 25+ years in the tech industry with a passion
          for building products to help game developers take their productivity
          to the next level.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
            maxWidth: 1000,
            mx: 'auto',
          }}
        >
          {teamMembers.map((member, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                p: 3,
                borderRadius: 2,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 48px rgba(139, 92, 246, 0.15)',
                },
              }}
            >
              <Avatar
                src={member.avatar}
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 3,
                  background:
                    'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 24px rgba(139, 92, 246, 0.3)',
                }}
              >
                {member.name.charAt(0)}
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: 'text.primary',
                }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  color: 'text.secondary',
                  opacity: 0.8,
                }}
              >
                {member.role}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  mt: 2,
                }}
              >
                <Link
                  href={member.linkedin}
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="6"
                      fill="rgba(139,92,246,0.15)"
                    />
                    <path
                      d="M8.25 9.5V16.25"
                      stroke="#8B5CF6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.25 7.75V7.76"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12.5V16.25"
                      stroke="#8B5CF6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12.5C12 11.2574 13.0074 10.25 14.25 10.25C15.4926 10.25 16.5 11.2574 16.5 12.5V16.25"
                      stroke="#8B5CF6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href={member.github}
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="24"
                      height="24"
                      rx="6"
                      fill="rgba(6,182,212,0.15)"
                    />
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      stroke="#06B6D4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        id="why-creevo-section"
        sx={{ textAlign: 'center', mt: 20, mb: 12, py: 4 }}
      >
        <Typography variant="h2" sx={{ mb: 4, color: 'text.primary' }}>
          Why Creevo?
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            maxWidth: 1000,
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(139,92,246,0.15)',
              boxShadow: '0 4px 24px rgba(139, 92, 246, 0.10)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 48px rgba(139, 92, 246, 0.15)',
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 24px rgba(139, 92, 246, 0.3)',
                }}
              >
                <Bolt sx={{ color: '#fff', fontSize: 24 }} />
              </Box>
            </Box>
            <Typography
              variant="h6"
              sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}
            >
              Lightning Fast
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.8, color: 'text.secondary' }}
            >
              Experience quickly developed demos that are ready to be shared
              with your audience.
            </Typography>
          </Box>

          {/* Card 2 */}
          <Box
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(6,182,212,0.15)',
              boxShadow: '0 4px 24px rgba(6,182,212,0.10)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 48px rgba(6,182,212,0.15)',
              },
            }}
          >
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="url(#funding)" />
                <text
                  x="20"
                  y="22"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="22"
                  fontWeight="bold"
                  fill="#fff"
                  fontFamily="Arial, Helvetica, sans-serif"
                >
                  $
                </text>
                <defs>
                  <linearGradient
                    id="funding"
                    x1="0"
                    y1="0"
                    x2="40"
                    y2="40"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </Box>
            <Typography
              variant="h6"
              sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}
            >
              Affordable + High Quality
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.8, color: 'text.secondary' }}
            >
              Get professional demo development at a fraction of the cost,
              making quality accessible to indie developers.
            </Typography>
          </Box>

          {/* Card 3 */}
          <Box
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(139,92,246,0.15)',
              boxShadow: '0 4px 24px rgba(139, 92, 246, 0.10)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 48px rgba(139, 92, 246, 0.15)',
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 24px rgba(139, 92, 246, 0.3)',
                }}
              >
                <EventAvailableIcon sx={{ color: '#fff', fontSize: 24 }} />
              </Box>
            </Box>
            <Typography
              variant="h6"
              sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}
            >
              Always Available
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.8, color: 'text.secondary' }}
            >
              Schedule calls, share feedback, or get updates anytime. We're here
              when you need us.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Final Join the Waitlist CTA */}
      <Box
        id="waitlist-section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 8,
          mb: 10,
          borderRadius: 4,
          background:
            'linear-gradient(135deg, rgba(139,92,246,0.10) 0%, rgba(6,182,212,0.10) 100%)',
          boxShadow: '0 4px 32px rgba(139,92,246,0.10)',
        }}
      >
        <Typography variant="h2" sx={{ mb: 2, color: 'text.primary' }}>
          Ready to get started?
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, color: 'text.secondary', maxWidth: 500 }}
        >
          Join the waitlist and be the first to experience the future of
          productivity with Creevo.
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            gap: 2,
            width: '100%',
            maxWidth: 420,
            mx: 'auto',
          }}
        >
          <TextField
            id="email-input-bottom"
            label="Enter your email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            sx={{ minWidth: 220 }}
          />
          <Button
            variant="contained"
            size="large"
            onClick={handleJoinWaitlist}
            disabled={isLoading}
          >
            {isLoading ? 'Joining...' : 'Join'}
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          mt: 8,
          py: 3,
          borderTop: '1px solid rgba(255, 255, 255, 0.51)',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 5,
          color: 'rgba(255,255,255,0.7)',
          background: 'transparent',
        }}
      >
        <Typography variant="body2" sx={{ fontSize: '1rem', fontWeight: 500 }}>
          © {new Date().getFullYear()} Creevo. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <a
            href="https://www.linkedin.com/company/creevo-app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="24"
                height="24"
                rx="6"
                fill="rgba(139,92,246,0.15)"
              />
              <path
                d="M8.25 9.5V16.25"
                stroke="#8B5CF6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 7.75V7.76"
                stroke="#8B5CF6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12.5V16.25"
                stroke="#8B5CF6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12.5C12 11.2574 13.0074 10.25 14.25 10.25C15.4926 10.25 16.5 11.2574 16.5 12.5V16.25"
                stroke="#8B5CF6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/creevo.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="6" fill="rgba(6,182,212,0.15)" />
              <rect
                x="7"
                y="7"
                width="10"
                height="10"
                rx="4"
                stroke="#06B6D4"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="2.5"
                stroke="#06B6D4"
                strokeWidth="1.5"
              />
              <circle cx="16" cy="8" r="0.75" fill="#06B6D4" />
            </svg>
          </a>
        </Box>
      </Box>
    </Container>
  );
};
