import * as React from 'react';
import { Divider, IconButton, Toolbar, Typography, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

const Header = () => {
    return (
        <>
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>

                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsNoneOutlinedIcon />
                    </Badge>
                </IconButton>

                <IconButton color="inherit">
                    <AccountBoxRoundedIcon />
                </IconButton>
            </Toolbar>

            <Divider />

            <Toolbar>
                <Typography sx={{ width: '100%',fontSize: 20,
                    textTransform: "uppercase",
                    justifyContent: "center",
                    fontFamily: "Montserrat", }}>
                    Action is the foundational key to all success.
                </Typography>
            </Toolbar>
        </>
    );
};

export default Header;