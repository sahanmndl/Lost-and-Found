import React, { useState } from 'react';
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import Colors from "../constants/Colors";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {

  const [value, setValue] = useState()
  const dispatch = useDispatch()

  const isLoggedIn = useSelector(state => state.isLoggedIn)

  return (
    <AppBar sx={{background: Colors.DARK}} position="sticky">
        <Toolbar>
            <Typography variant="h5">Lost&Found</Typography>
            {isLoggedIn && (
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
                        <Tab 
                            style={styles.tabLabel} 
                            LinkComponent={Link}
                            to="/allItems/addItem"
                            label="Add new item" 
                        />
                    </Tabs>
                </Box>
            )}
            <Box display="flex" marginLeft="auto">
                {!isLoggedIn && (
                    <>
                        {" "}
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
                    </>
                )}
                {isLoggedIn && (
                    <Button 
                        LinkComponent={Link}
                        to="/auth"
                        sx={{margin: 1, borderRadius: 8}} 
                        color='error'
                        onClick={() => dispatch(authActions.logout())}
                    >
                        Logout
                    </Button>
                )}
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