import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AppBar, Toolbar, styled, Typography, InputBase, Box, Button, Dialog, DialogContent, DialogTitle, Divider, Menu, MenuItem } from '@mui/material';
import Logo1 from '../../IMAGES/logo1.png';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Flag from '../../IMAGES/Flag.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Header2 from './Header2';
import ProductsData from '../ProductsData';
import Slides from '../Slides';
import { NavLink } from 'react-router-dom';


const HeaderStyle = styled(AppBar)`
    background:#131921;
    
`;
const LogoStyle = styled('img')({
    width: 70,
    height: 20,
    cursor: 'pointer'
})
const DivOnestyle = styled('div')({
    border: '2px solid transparent',
    transition: 'border-color 0.5s ease',
    width: '150px',
    height: '50px',
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    '&:hover': {
        borderColor: 'white'
    }
});

const FlagBoxStyle = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    width: 70,
    padding: 5,
    marginLeft: 15,
    height: 30,
    cursor: 'pointer',
    border: '2px solid transparent',
    transition: 'border-color 0.5s ease',
    '&:hover': {
        borderColor: 'white'
    }

})

const FlagStyle = styled('img')({
    width: 25,
    height: 20,
    marginTop: 7,
    cursor: 'pointer'
})

const SignStyle = styled('div')({
    width: 120,
    height: 40,
    marginLeft: 5,
    marginTop: 5,
    padding: 5,
    cursor: 'pointer',
    border: '2px solid transparent',
    transition: 'border-color 0.3s ease',
    '&:hover': {
        borderColor: 'white',
    },
})
const OrderStyle = styled('div')({
    width: 80,
    height: 40,
    marginLeft: 5,
    padding: 5,
    marginTop: 5,
    cursor: 'pointer',
    border: '2px solid transparent',
    transition: 'border-color 0.3s ease',
    '&:hover': {
        borderColor: 'white',
    },
})




const Header = () => {
    const [open, Setopen] = useState(false)
    const handleOpen = () => {
        Setopen(true)
    }
    const handleClose = () => {
        Setopen(false)
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleclick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleclose = () => {
        setAnchorEl(null)
    }
    return (
        <div>
            <HeaderStyle position='static'>
                <Toolbar>
                    <NavLink to='/'>
                        <LogoStyle src={Logo1} style={{ marginLeft: 10 }} />
                    </NavLink>
                    <div>
                        <Button style={{ color: 'white', width: 200 }} onClick={handleOpen}>
                            <DivOnestyle style={{ display: 'flex', marginLeft: 15 }}>
                                <LocationOnIcon style={{ marginTop: 12 }} />
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 0 }}>
                                    <p style={{ marginBottom: 0, fontSize: 12 }}>Hello</p>
                                    <p style={{ marginBottom: 0, fontSize: 10, marginTop: 0, fontWeight: 500 }}>Select your address</p>
                                </div>
                            </DivOnestyle>
                        </Button>
                        <Dialog open={open} onClose={handleClose} style={{ width: 500, height: 500, marginLeft: '30%' }}>
                            <DialogTitle style={{ background: '#F0F2F2' }}>Choose your location</DialogTitle>
                            <DialogContent  >
                                <Box style={{ padding: 10 }}>Select a delivery location to see product availability and delivery options</Box>
                                <Button style={{ background: '#FFD814', padding: 10, fontSize: 12, color: 'black', width: 250, marginBottom: 20, marginTop: 10 }}>Sign in to see your address</Button>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Divider sx={{ flex: 1 }} />
                                    <Typography variant="body1" sx={{ px: 2 }} style={{ fontWeight: 400, fontSize: '12px', color: '#565959' }}>or enter and Indian pincode</Typography>
                                    <Divider sx={{ flex: 1 }} />
                                </div>

                                <div style={{ padding: 10 }}>
                                    <InputBase style={{ width: '60%', padding: 5, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}></InputBase>
                                    <Button style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', marginLeft: 15, color: 'black', width: 100, borderRadius: 10 }}>Apply</Button>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Divider sx={{ flex: 1 }} />
                                    <Typography variant="body1" sx={{ px: 2 }} style={{ fontWeight: 400, fontSize: '12px', color: '#565959' }}>or </Typography>
                                    <Divider sx={{ flex: 1 }} />
                                </div>

                                <Button variant='contained' onClick={handleclick} style={{ background: '#F0F2F2', color: 'black', fontSize: 10, width: 250, marginTop: 10 }}>
                                    Deliver outside India<ArrowDropDownIcon style={{ marginLeft: 50 }} />
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleclose}>
                                    <MenuItem onClick={handleclose} style={{ width: 250 }}>Bangladesh</MenuItem>
                                    <MenuItem onClick={handleclose} style={{ width: 250 }}>Sri Lanka</MenuItem>
                                </Menu>
                            </DialogContent>

                        </Dialog>
                    </div>
                    <InputBase style={{ backgroundColor: 'whitesmoke', width: '50%', padding: 5, borderRadius: 6, marginLeft: 5 }}
                        placeholder='Search Amazon.in'
                        startAdornment={<>
                            <Typography variant='body2'>All</Typography>
                            <ArrowDropDownIcon />
                        </>}
                        endAdornment={<SearchIcon />} />
                    <div>
                        <Button style={{ color: 'white' }}>
                            <FlagBoxStyle >
                                <FlagStyle src={Flag} />
                                <h4 style={{ display: 'flex', marginTop: 5 }}>EN <ArrowDropDownIcon /></h4>
                            </FlagBoxStyle>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleclose}>
                                <MenuItem onClick={handleclose} style={{ width: 250 }}>Bangladesh</MenuItem>
                                <MenuItem onClick={handleclose} style={{ width: 250 }}>Sri Lanka</MenuItem>
                            </Menu>
                        </Button>
                    </div>
                    <NavLink to="/signin" style={{ textDecoration: 'none' }}>
                        <SignStyle >
                            <p style={{ marginTop: 0, marginRight: 20, marginBottom: 0, fontSize: 12, color: 'white' }}>Hello,sign in </p>
                            <p style={{ marginTop: 0, marginRight: 10, marginBottom: 0, fontSize: 12, color: 'white' }}>Account & List<ArrowDropDownIcon style={{ marginLeft: 2, fontSize: 10 }} /></p>
                        </SignStyle>
                    </NavLink>

                    <OrderStyle >
                        <p style={{ marginTop: 0, marginRight: 10, marginBottom: 0, fontSize: 12 }}>Returns & </p>
                        <p style={{ marginTop: 0, marginRight: 10, marginBottom: 0, fontSize: 12 }}>Orders<ArrowDropDownIcon style={{ marginLeft: 2, fontSize: 10 }} /></p>
                    </OrderStyle>
                    <ShoppingCartIcon style={{ fontSize: 30, marginLeft: 20, cursor: 'pointer' }} />
                </Toolbar>
            </HeaderStyle>
            <Header2 />
            <Slides />
            <ProductsData />

        </div>
    )
}

export default Header
