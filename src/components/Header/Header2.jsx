import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography, Drawer, List, ListItem, ListItemText, MenuItem } from '@mui/material';
import styled from '@emotion/styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Menu } from '@mui/material';
import Prime from '../../IMAGES/prime.jpg'
import { NavLink } from 'react-router-dom';

const MyBox = styled(Box)({
    display: 'flex',
    width: '50px',
    height: '22px',
    padding: 5,
    border: '1px solid transparent ',
    marginLeft: 10,
    cursor: 'pointer',
    '&:hover': {
        borderColor: 'white',
    },
});
const MiniTVStyle = styled(Box)({
    width: '120px',
    height: '22px',
    padding: 5,
    border: '1px solid transparent ',
    marginLeft: 10,
    cursor: 'pointer',
    '&:hover': {
        borderColor: 'white',
    },
})
const SellStyle = styled(Box)({
    width: '40px',
    height: '22px',
    padding: 5,
    border: '1px solid transparent ',
    marginLeft: 10,
    cursor: 'pointer',
    '&:hover': {
        borderColor: 'white',
    },
})
const BestSellStyle = styled(Box)({
    width: '100px',
    height: '22px',
    padding: 5,
    border: '1px solid transparent ',
    marginLeft: 10,
    cursor: 'pointer',
    '&:hover': {
        borderColor: 'white',
    },
})
const MobileStyle = styled(Box)({
    width: '70px',
    height: '22px',
    padding: 5,
    border: '1px solid transparent ',
    marginLeft: 10,
    cursor: 'pointer',
    '&:hover': {
        borderColor: 'white',
    },
})
const TodaysStyle = styled(Box)({
    width: '100px',
    height: '22px',
    padding: 5,
    border: '1px solid transparent ',
    marginLeft: 10,
    cursor: 'pointer',
    '&:hover': {
        borderColor: 'white',
    },
})
const CustomerStyle = styled(Box)({
    width: '140px',
    height: '22px',
    padding: 5,
    border: '1px solid transparent ',
    marginLeft: 10,
    cursor: 'pointer',
    '&:hover': {
        borderColor: 'white',
    },
})
const ElectronicStyle = styled(Box)({
    width: '90px',
    height: '22px',
    padding: 5,
    border: '1px solid transparent ',
    marginLeft: 10,
    cursor: 'pointer',
    '&:hover': {
        borderColor: 'white',
    },
})
const PrimeStyle = styled(Box)({
    display: 'flex',
    width: '70px',
    height: '22px',
    padding: 5,
    border: '1px solid transparent ',
    marginLeft: 10,
    cursor: 'pointer',
    '&:hover': {
        borderColor: 'white',
    },
})

const Header2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setIsOpen(open);
    };
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ width: '100%', height: 35, background: '#232F3E', color: 'whitesmoke', padding: 2, cursor: 'pointer', display: 'flex' }}>
            <>
                <MyBox onClick={toggleDrawer(true)}  >
                    <MenuIcon />
                    <h5 style={{ marginTop: 4, marginLeft: 2 }}>All</h5>
                </MyBox>
                <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
                    <List style={{ width: 350, color: 'white' }}>
                        <Box style={{ padding: 10 }}>
                            <ListItem onClick={toggleDrawer(false)} style={{ cursor: 'pointer', background: '#232F3E', marginTop: 0, fontWeight: 500 }}>
                                <ListItemText  >
                                    <NavLink to='/signin' style={{ textDecoration: 'none', color: 'white' }}>
                                        <Box style={{ display: 'flex' }}>
                                            <AccountCircleIcon style={{ fontSize: 30 }} />
                                            <Typography variant='h6'>&nbsp;Hello, Sign In</Typography>
                                        </Box>
                                    </NavLink>
                                </ListItemText>
                            </ListItem>
                            <ListItem onClick={toggleDrawer(false)}>
                                <ListItemText style={{ color: 'black', cursor: 'pointer' }}>
                                    <NavLink to='/best-seller' style={{ textDecoration: 'none', color: 'black' }}>
                                        <Typography variant='h6' style={{ fontWeight: 700 }}>Trending</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15, marginTop: 10 }}>Best Seller</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>New Releases</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>Movers ans Shakers</Typography>
                                        <hr />
                                    </NavLink>
                                </ListItemText>
                            </ListItem>
                            <ListItem onClick={toggleDrawer(false)}>
                                <ListItemText style={{ color: 'black', cursor: 'pointer' }}>
                                    <NavLink to='/miniTv' style={{ textDecoration: 'none', color: 'black' }}>
                                        <Typography variant='h6' style={{ fontWeight: 700 }}>Digital Content And Devices</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15, marginTop: 10 }}>Amazon miniTV-FREE entertaiment</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>Echo & Alexa</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>Fire Tv</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>Kindle E-Readers & eBooks</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>Audible Audiobooks</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>Amazon Prime Video</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>Amazon Prime Music</Typography>
                                        <hr />
                                    </NavLink>
                                </ListItemText>
                            </ListItem>
                            <ListItem onClick={toggleDrawer(false)}>
                                <ListItemText style={{ color: 'black', cursor: 'pointer' }}>
                                    <NavLink to='/electronic' style={{ textDecoration: 'none', color: 'black' }}>
                                        <Typography variant='h6' style={{ fontWeight: 700 }}>Shop By Category</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15, marginTop: 10 }}>Mobiles ,Computers</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>Tv,Appilances,Electronics</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>Men's Fashion</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>Women's Fashion</Typography>
                                        <hr />
                                    </NavLink>
                                </ListItemText>
                            </ListItem>
                            <ListItem onClick={toggleDrawer(false)}>
                                <ListItemText style={{ color: 'black', cursor: 'pointer' }}>
                                    <NavLink to='/today-deals' style={{ textDecoration: 'none', color: 'black' }}>
                                        <Typography variant='h6' style={{ fontWeight: 700 }}>Programs & Features</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15, marginTop: 10 }}>Gift Card's & Mobile Recharges</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>Flight Tickets</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>Clearance Store</Typography>
                                        <hr />
                                    </NavLink>
                                </ListItemText>
                            </ListItem>
                            <ListItem onClick={toggleDrawer(false)}>
                                <ListItemText style={{ color: 'black', cursor: 'pointer' }}>
                                    <NavLink to='/service' style={{ textDecoration: 'none', color: 'black' }}>
                                        <Typography variant='h6' style={{ fontWeight: 700 }}>Help & Setting</Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15, marginTop: 10 }}>Customers's Service </Typography>
                                        <Typography variant='h5' style={{ fontSize: 14, fontWeight: 400, marginBottom: 15 }}>Sign in</Typography>
                                        <hr />
                                    </NavLink>
                                </ListItemText>
                            </ListItem>

                        </Box>
                    </List>
                </Drawer>
            </>
            <MiniTVStyle>
                <NavLink to='/miniTv' style={{ textDecoration: 'none', color: 'white' }}>
                    <Typography>Amazon MiniTV</Typography>
                </NavLink>
            </MiniTVStyle>
            <SellStyle>
                <NavLink to='/sell' style={{ textDecoration: 'none', color: 'white' }}>
                    <Typography>Sell</Typography>
                </NavLink>
            </SellStyle>
            <BestSellStyle>
                <NavLink to='/best-seller' style={{ color: 'white', textDecoration: 'none' }}>
                    <Typography>Best Sellers</Typography>
                </NavLink>
            </BestSellStyle>
            <MobileStyle>
                <NavLink to='/accessories' style={{ color: 'white', textDecoration: 'none' }}>
                    <Typography>Mobiles</Typography>
                </NavLink>
            </MobileStyle>
            <TodaysStyle>
                <NavLink to='/today-deals' style={{ textDecoration: 'none', color: 'white' }}>
                    <Typography>Today's Deals</Typography>
                </NavLink>
            </TodaysStyle>
            <CustomerStyle>
                <NavLink to='/service' style={{ textDecoration: 'none', color: 'white' }}>
                    <Typography>Customer Service</Typography>
                </NavLink>
            </CustomerStyle>
            <ElectronicStyle>
                <NavLink to='/electronic' style={{ textDecoration: 'none', color: 'white' }}>
                    <Typography>Electronics</Typography>
                </NavLink>
            </ElectronicStyle>
            <PrimeStyle >
                <NavLink to='/prime' style={{ textDecoration: 'none', color: 'white' }}>
                    <div style={{ display: 'flex' }}>
                        <Typography>Prime</Typography>
                        <ArrowDropDownIcon />
                    </div>

                </NavLink>
            </PrimeStyle>
        </div >
    )
}

export default Header2
