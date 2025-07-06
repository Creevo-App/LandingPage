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

const pages = [
  { name: 'About', id: 'about-section' },
  { name: 'Why Creevo', id: 'why-creevo-section' },
  { name: 'Waitlist', id: 'waitlist-section' },
];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              onClick={() => scrollToSection('hero-section')}
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
              onClick={() => scrollToSection('hero-section')}
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
              onClick={() => scrollToSection('hero-section')}
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
