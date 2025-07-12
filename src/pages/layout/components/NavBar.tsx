import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = [
  { name: 'About', id: 'about-section' },
  { name: 'Why Creevo', id: 'why-creevo-section' },
  { name: 'Waitlist', id: 'waitlist-section' },
];

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    } else {
      scrollToSection('hero-section');
    }
  };

  // If we're on the invest page, show simplified navbar
  if (location.pathname === '/invest') {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: '#f6e0f5',
            color: '#35317c',
            width: '75%',
            display: 'flex',
            borderRadius: '25px',
            boxShadow: '0 0 5px 1px #e79fe0',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
              <Box
                component="img"
                src={'/creevo-logo.png'}
                onClick={() => navigate('/', { replace: true })}
                sx={{
                  height: '64px',
                  marginRight: '8px',
                  ':hover': { cursor: 'pointer' },
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                onClick={() => navigate('/', { replace: true })}
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                CREEVO
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    );
  }

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#f6e0f5',
          color: '#35317c',
          width: '75%',
          display: 'flex',
          borderRadius: '25px',
          boxShadow: '0 0 5px 1px #e79fe0',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component="img"
              src={'/creevo-logo.png'}
              onClick={handleLogoClick}
              sx={{
                height: '64px',
                marginRight: '8px',
                ':hover': { cursor: 'pointer' },
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={handleLogoClick}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              CREEVO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => scrollToSection(page.id)}
                    sx={{ color: '#35317c' }}
                  >
                    <Typography sx={{ textAlign: 'center', color: '#35317c' }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={handleLogoClick}
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              CREEVO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => scrollToSection(page.id)}
                  sx={{ my: 2, color: '#35317c', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
