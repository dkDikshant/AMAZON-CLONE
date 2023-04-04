import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const MyBox = styled(Box)({
    display: 'flex',
    width: '50px',
    height: '22px',
    padding: 5,
    border: '2px solid transparent ',
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
    border: '2px solid transparent ',
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
    border: '2px solid transparent ',
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
    border: '2px solid transparent ',
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
    border: '2px solid transparent ',
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
    border: '2px solid transparent ',
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
    border: '2px solid transparent ',
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
    border: '2px solid transparent ',
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
    border: '2px solid transparent ',
    marginLeft: 10,
    cursor: 'pointer',
    '&:hover': {
        borderColor: 'white',
    },
})

const Header2 = () => {
    return (
        <div style={{ width: '100%', height: 35, background: '#232F3E', color: 'whitesmoke', padding: 2, cursor: 'pointer', display: 'flex' }}>
            <MyBox  >
                <MenuIcon />
                <h5 style={{ marginTop: 4, marginLeft: 2 }}>All</h5>
            </MyBox>
            <MiniTVStyle>
                <Typography>Amazon MiniTV</Typography>
            </MiniTVStyle>
            <SellStyle>
                <Typography>Sell</Typography>
            </SellStyle>
            <BestSellStyle>
                <Typography>Best Sellers</Typography>
            </BestSellStyle>
            <MobileStyle>
                <Typography>Mobiles</Typography>
            </MobileStyle>
            <TodaysStyle>
                <Typography>Today's Deals</Typography>
            </TodaysStyle>
            <CustomerStyle>
                <Typography>Customer Service</Typography>
            </CustomerStyle>
            <ElectronicStyle>
                <Typography>Electronics</Typography>
            </ElectronicStyle>
            <PrimeStyle>
                <Typography>Prime </Typography>
                <ArrowDropDownIcon />
            </PrimeStyle>
        </div >
    )
}

export default Header2
