// src/theme/index.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8B5CF6', // Purple accent
      light: '#A78BFA',
      dark: '#7C3AED',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#06B6D4', // Cyan accent
      light: '#67E8F9',
      dark: '#0891B2',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#1E1B4B', // Deep purple background
      paper: 'rgba(255, 255, 255, 0.05)', // Glassmorphism effect
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(255, 255, 255, 0.1)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      background: 'linear-gradient(135deg, #FFFFFF 0%, #A78BFA 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#FFFFFF',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#FFFFFF',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1rem',
      color: 'rgba(255, 255, 255, 0.8)',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #1E1B4B 100%)',
          minHeight: '100vh',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 48px rgba(139, 92, 246, 0.15)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          transition: 'all 0.3s ease',
        },
        contained: {
          background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
          boxShadow: '0 4px 24px rgba(139, 92, 246, 0.3)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)',
            background: 'linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)',
          },
        },
        outlined: {
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          '&:hover': {
            border: '1px solid rgba(139, 92, 246, 0.5)',
            background: 'rgba(139, 92, 246, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: 12,
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(139, 92, 246, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#8B5CF6',
              borderWidth: 2,
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-focused': {
              color: '#8B5CF6',
            },
          },
          '& .MuiOutlinedInput-input': {
            color: '#FFFFFF',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'rgba(139, 92, 246, 0.2)',
          color: '#FFFFFF',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          '&:hover': {
            background: 'rgba(139, 92, 246, 0.3)',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTab-root': {
            color: 'rgba(255, 255, 255, 0.7)',
            textTransform: 'none',
            fontWeight: 500,
            '&.Mui-selected': {
              color: '#8B5CF6',
            },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#8B5CF6',
            height: 3,
            borderRadius: 2,
          },
        },
      },
    },
  },
});

export default theme;
