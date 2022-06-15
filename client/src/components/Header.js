import React from 'react';
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import Colors from "../constants/Colors";

const Header = () => {
  return (
    <AppBar sx={{background: Colors.DARK}} position="sticky">
        <Toolbar>
            <Typography variant="h5">Lost&Found</Typography>
            <Box display="flex" marginLeft={10}>
                <Tabs value={0}>
                    <Tab style={styles.tabLabel} label="All Items" />
                    <Tab style={styles.tabLabel} label="Found Items" />
                </Tabs>
            </Box>
            <Box display="flex" marginLeft="auto">
                <Button sx={{margin: 1, borderRadius: 8}} variant="contained">
                    SignUp
                </Button>
                <Button sx={{margin: 1, borderRadius: 8}}>
                    Login
                </Button>
                <Button sx={{margin: 1, borderRadius: 8}} color='error'>
                    Logout
                </Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header

const styles = {
    tabLabel: {
        color: Colors.WHITESMOKE
    }
}