import React from 'react';
import logo1 from '../IMAGES/logo1.png'
import styled from '@emotion/styled';
import { Box, InputBase } from '@mui/material';
import { Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom';



const ImageStyle = styled('img')({
    width: '10%',
    marginTop: '20px',
    marginLeft: '45%'
})

const BoxStyle = styled(Box)({
    width: '32%',
    height: '52%',
    marginLeft: '34%',
    marginTop: 15,
    padding: 20,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    marginBottom: 20
})
const InputStyle = styled(InputBase)({
    width: '90%',
    padding: 5,
    boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
    borderRadius: 10,
    margin: 5
})
const AccountSignIn = () => {
    return (
        <div>
            <NavLink to='/'>

                <ImageStyle src={logo1} style={{ cursor: 'pointer' }} />
            </NavLink>
            <BoxStyle>
                <h2>Create Account</h2>
                <Typography>Your Name</Typography>
                <InputStyle placeholder='first and last name'></InputStyle>
                <Typography>Mobile Number</Typography>
                <InputStyle type='number' placeholder='Mobile Number'></InputStyle>
                <Typography>Email(Optional) </Typography>
                <InputStyle type='number' placeholder='Mobile Number'></InputStyle>
                <Typography>Password</Typography>
                <InputStyle type='number' placeholder='At least 6 characters'></InputStyle>
                <Typography style={{ marginTop: 10 }}>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</Typography>
                <NavLink to='/' style={{ textDecoration: 'none' }}>
                    <Button style={{ color: 'black', background: '#F2CA65', width: '90%', padding: 10, fontSize: 12, marginLeft: 10, marginTop: 20 }}>continue</Button>
                </NavLink>
            </BoxStyle>
        </div>
    )
}

export default AccountSignIn
