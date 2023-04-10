import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ppo from '../../IMAGES/products/laptop/ppo.jpg'
import ppt from '../../IMAGES/products/laptop/ppt.jpg'

import '../products/Laptop.css'
import { Typography, Box, Button } from '@mui/material';

const images = [
    {
        original: ppo,
        thumbnail: ppt,
    }
];
const Sonyplaystation2000 = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='App'>
                <div className='ImageGalleryContainer' style={{ padding: 20 }}>

                    <ImageGallery items={images} thumbnailPosition='left' infinite='true' showFullscreenButton={false} showPlayButton={false} thumbnailWidth={100} thumbnailHeight={10} showNav={false} autoPlay={true} slideInterval={1000} />
                </div>
                <div className='TextContainer' style={{ padding: 20 }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 400 }}>Rs.2000 Sony PlayStation Network Wallet Top-Up (Email Delivery in 1 hour- Digital Voucher Code)</Typography>
                    <Typography style={{ color: '#0071A5', cursor: 'pointer' }}>Visit the Acer Store</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: '28px' }}>&#x20b9;2,000</Typography>
                    <Box>
                        <Box style={{ display: 'flex', paddingTop: 10, paddingBottom: 2 }}>

                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Sign into PSN or create an account at playstation.com.</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>

                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Go to 'Redeem Codes' on PS Store and enter the 12-digit voucher code (Code).
                            </Typography>

                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>

                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>To purchase PS Plus using the funds from this Code, select the subscription plan of your choice, and complete the purchase*.
                            </Typography>

                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>

                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}> *Credit/debit card or PayPal must be saved to your account for PSN to purchase PS Plus on a monthly payment plan. Redeemable only by users aged 18 or older holding an adult account for PSN registered to India.
                            </Typography>

                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>

                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>PSN wallet funds can be used by the redeeming account holder (and their child Family Member accounts) to pay for items in the PS Store available to Indian account holders.
                            </Typography>

                        </Box>

                    </Box>
                    <Button style={{ width: '50%', background: '#FFD814', borderRadius: 20, padding: 10, marginBottom: 10, marginTop: 10 }}>Add to Cart</Button>
                    <br />
                    <Button style={{ width: '50%', background: '#FFA41C', borderRadius: 20, padding: 10 }}>Buy Now</Button>
                </div>

            </div>

        </div>
    )
}

export default Sonyplaystation2000
