import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import zo1 from '../../IMAGES/products/laptop/zo1.jpg'
import zo2 from '../../IMAGES/products/laptop/zo2.jpg'
import zo3 from '../../IMAGES/products/laptop/zo3.jpg'
import zt1 from '../../IMAGES/products/laptop/zt1.jpg'
import zt2 from '../../IMAGES/products/laptop/zt2.jpg'
import zt3 from '../../IMAGES/products/laptop/zt3.jpg'
import '../products/Laptop.css'
import { Typography, Box, Button } from '@mui/material';

const images = [
    {
        original: zo1,
        thumbnail: zt1,



    },
    {
        original: zo2,
        thumbnail: zt2,

    },
    {
        original: zo3,
        thumbnail: zt3,

    },
];


const Zivame = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='App'>
                <div className='ImageGalleryContainer' style={{ padding: 20 }}>

                    <ImageGallery items={images} thumbnailPosition='left' infinite='true' showFullscreenButton={false} showPlayButton={false} thumbnailWidth={100} thumbnailHeight={10} showNav={false} autoPlay={true} slideInterval={1000} />
                </div>
                <div className='TextContainer' style={{ padding: 20 }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 400 }}>Rosaline By Zivame Women's Synthetic Lightly Padded Wire Free Full Coverage Bra</Typography>
                    <Typography style={{ color: '#0071A5', cursor: 'pointer' }}>Visit the Acer Store</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: '28px' }}>&#x20b9;3,140</Typography>
                    <Box>
                        <Box style={{ display: 'flex', paddingTop: 10, paddingBottom: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Care Instructions</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Hand Wash Only</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Polyester cotton</Typography>

                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Non Wired</Typography>

                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Hand wash</Typography>

                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Non-wired</Typography>

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

export default Zivame
