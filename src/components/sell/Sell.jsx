import React from 'react'
import HeaderClone from '../HeaderClone'
import Header2 from '../Header/Header2'
import { Box, Typography, styled, Button } from '@mui/material';
import sell from '../../IMAGES/sell.png'


const SellBoxstyle = styled(Box)({
    width: '100%',
    height: 100,
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
})


const Sell = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <SellBoxstyle>
                <div style={{ display: 'flex', marginTop: 20 }}>
                    <Typography style={{ padding: 20, fontSize: 30, fontWeight: 900 }}>Sell On Amazon</Typography>
                    <Button style={{ marginLeft: '60%', background: '#FF9900', height: 50, marginTop: 20, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px', borderRadius: 10, padding: 20, color: 'black' }}>Start Selling</Button>
                </div>
            </SellBoxstyle>
            <div style={{ display: 'flex', marginTop: 50, marginBottom: 50, marginLeft: 50 }}>
                <Box>
                    <Typography style={{ padding: 40, fontSize: 48, fontWeight: 900, color: '#232f3e', lineHeight: '58px', paddingBottom: 0 }}>Become a seller on Amazon today</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#232f3e', padding: 30 }}>Sell on Amazon.in with 50% off on Selling Fee* <br /> and avail 1-Click Launch Support at no additional cost</Typography>
                    <Button style={{ marginLeft: 20, background: '#FF9900', height: 80, width: '25%', fontSize: 15, marginTop: 20, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px', borderRadius: 20, padding: 20, color: 'black' }}>Start Selling</Button>
                    <Button style={{ marginLeft: 20, background: '#FFF', height: 20, marginTop: 20, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px', borderRadius: 25, padding: 20, color: 'black' }}>Avail Offer</Button>
                </Box>
                <Box>
                    <img src={sell} style={{ width: '80%', height: '100%', marginLeft: '1%' }} />
                </Box>
            </div>


        </div>
    )
}

export default Sell
