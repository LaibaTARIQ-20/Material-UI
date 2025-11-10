import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Nav() {
  // STEP 1: menu items array
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'For Students', path: '/students' },
    { name: 'For Recruiters', path: '/recruiters' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    // STEP 2: AppBar with styling
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        boxShadow: 'none',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* STEP 3: Toolbar with styling */}
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 40px',
        }}
      >
        {/* STEP 4: Logo (Typography) styled */}
        <Typography
          sx={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            cursor: 'pointer',
          }}
        >
          Career Launchpad
        </Typography>

        {/* STEP 5: Center menu box */}
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          {/* STEP 6: Map through menuItems */}
          {menuItems.map((item, index) => (
            <Button
              key={index}
              sx={{
                color: 'white',
                textTransform: 'none',
                fontSize: '0.95rem',
                '&:hover': { color: '#FF5722' }, // STEP 7: button hover style
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>

        {/* STEP 8: Right side actions box */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* STEP 9: Search icon */}
          <IconButton sx={{ color: 'white' }}>
            <SearchIcon />
          </IconButton>

          {/* STEP 10: Join CLP button */}
          <Button
            sx={{
              backgroundColor: '#FF5722',
              color: 'white',
              padding: '8px 24px',
              borderRadius: '5px',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#E64A19' },
            }}
          >
            Join CLP
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}