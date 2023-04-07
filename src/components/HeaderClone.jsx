import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AppBar, Toolbar, styled, Typography, InputBase, Box, Button, Slide } from '@mui/material';
import Logo1 from '../IMAGES/logo1.png';

import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Flag from '../IMAGES/Flag.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { NavLink } from 'react-router-dom';

const HeaderStyle = styled(AppBar)`
    background:#131921;
    
`;
const LogoStyle = styled('img')({
    width: '6%',
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
    return (
        <div>
            <HeaderStyle position='static'>
                <Toolbar>
                    <LogoStyle src={Logo1} style={{ marginLeft: 10 }} />
                    <DivOnestyle style={{ display: 'flex', marginLeft: 15 }}>
                        <LocationOnIcon style={{ marginTop: 12 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 0 }}>
                            <p style={{ marginBottom: 0, fontSize: 12 }}>Hello</p>
                            <p style={{ marginBottom: 0, fontSize: 12, marginTop: 0, fontWeight: 500 }}>Select your address</p>
                        </div>
                    </DivOnestyle>
                    <InputBase style={{ backgroundColor: 'whitesmoke', width: '50%', padding: 5, borderRadius: 6, marginLeft: 5 }}
                        placeholder='Search Amazon.in'
                        startAdornment={<>
                            <Typography variant='body2'>All</Typography>
                            <ArrowDropDownIcon />
                        </>}
                        endAdornment={<SearchIcon />} />
                    <FlagBoxStyle >
                        <FlagStyle src={Flag} />
                        <h4 style={{ display: 'flex', marginTop: 5 }}>EN <ArrowDropDownIcon /></h4>
                    </FlagBoxStyle>
                    <NavLink to="/signin">
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

        </div>
    )
}

export default Header
