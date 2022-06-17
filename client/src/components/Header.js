import React, { useState } from 'react';
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import Colors from "../constants/Colors";

const Header = () => {

  const [value, setValue] = useState()

  return (
    <AppBar sx={{background: Colors.DARK}} position="sticky">
        <Toolbar>
            <Typography variant="h5">Lost&Found</Typography>
            <Box display="flex" marginLeft={10}>
                <Tabs 
                    textColor='inherit'
                    value={value} 
                    onChange={(e, val) => setValue(val)}
                >
                    <Tab 
                        style={styles.tabLabel} 
                        LinkComponent={Link}
                        to="/allItems"
                        label="All Items"
                    />
                    <Tab 
                        style={styles.tabLabel} 
                        LinkComponent={Link}
                        to="/foundItems"
                        label="Found by me" 
                    />
                </Tabs>
            </Box>
            <Box display="flex" marginLeft="auto">
                <Button 
                    LinkComponent={Link}
                    to="/auth"
                    sx={{margin: 1, borderRadius: 8}} 
                    variant="contained"
                >
                    SignUp
                </Button>
                <Button 
                    LinkComponent={Link}
                    to="/auth"
                    sx={{margin: 1, borderRadius: 8}} 
                >
                    Login
                </Button>
                <Button 
                    LinkComponent={Link}
                    to="/auth"
                    sx={{margin: 1, borderRadius: 8}} 
                    color='error'
                >
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