import React from 'react'
import logo1 from '../IMAGES/logo1.png'
import styled from '@emotion/styled'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { InputBase, Button } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { NavLink } from 'react-router-dom'


const ImageStyle = styled('img')({
    width: '10%',
    marginTop: '20px',
    marginLeft: '45%'
})

const BoxStyle = styled(Box)({
    width: '30%',
    height: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    marginLeft: '35%',
    marginTop: 20
})

const InputStyle = styled(InputBase)({
    width: '90%',
    padding: 5,
    boxShadow: ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
    borderRadius: 10
})

const Sign = () => {
    return (
        <div >
            <NavLink to='/'>

                <ImageStyle src={logo1} style={{ cursor: 'pointer' }} />
            </NavLink>
            <BoxStyle>
                <Typography style={{ padding: 15, fontSize: 30 }}>Sign In</Typography>
                <Box style={{ padding: 10 }}>
                    <Typography style={{ fontSize: 15 }}>Email or Mobile Phone number</Typography>
                    <InputStyle />
                    <Button style={{ background: '#F2CA65', color: 'black', width: '90%', marginTop: 10 }}>Continue</Button>
                </Box>
                <p style={{ padding: 10 }}>By Continuing,you agree to Amazon's <span style={{ color: 'blue', cursor: 'pointer' }}>Conditions of Use </span>and <span style={{ color: 'blue', cursor: 'pointer' }}>Privacy Notice</span></p>
                <Box style={{ display: 'flex', padding: 5 }}>
                    <ArrowRightIcon />
                    <p style={{ marginTop: 1, color: 'blue', cursor: 'pointer' }}>Need Help?</p>
                </Box>
            </BoxStyle>
            <hr style={{ width: '40%', marginTop: 10 }}></hr>
            <NavLink to='/addaccount' style={{ textDecoration: 'none' }}>
                <Button style={{ color: 'black', background: '#EFF1F3', marginLeft: '42%', padding: 10, fontSize: 12 }}>Create Your amazon Account</Button>
            </NavLink>

        </div>
    )
}

export default Sign
