import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import so1 from '../../IMAGES/products/laptop/so1.jpg'
import so2 from '../../IMAGES/products/laptop/so2.jpg'
import so3 from '../../IMAGES/products/laptop/so3.jpg'
import st1 from '../../IMAGES/products/laptop/st1.jpg'
import st2 from '../../IMAGES/products/laptop/st2.jpg'
import st3 from '../../IMAGES/products/laptop/st3.jpg'
import '../products/Laptop.css'
import { Typography, Box, Button } from '@mui/material';

const images = [
    {
        original: so1,
        thumbnail: st1,



    },
    {
        original: so2,
        thumbnail: st2,

    },
    {
        original: so3,
        thumbnail: st3,

    },
];

const Smartwatch = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='App'>
                <div className='ImageGalleryContainer' style={{ padding: 20 }}>

                    <ImageGallery items={images} thumbnailPosition='left' infinite='true' showFullscreenButton={false} showPlayButton={false} thumbnailWidth={100} thumbnailHeight={10} showNav={false} autoPlay={true} slideInterval={2000} />
                </div>
                <div className='TextContainer' style={{ padding: 20 }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 400 }}>CELLECOR ActFit A3 Pro SpO2 IP68 Waterproof Smartwatch with 10 Days Long Battery, 24 * 7 Heart Rate Monitoring, Multi Sports Mode with Bluetooth Support for Calling and Music Control (1.28") (Black)</Typography>
                    <Typography style={{ color: '#0071A5', cursor: 'pointer' }}>Visit the Acer Store</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: '28px' }}>&#x20b9;2,510</Typography>
                    <Box>
                        <Box style={{ display: 'flex', paddingTop: 10, paddingBottom: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Brand</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>CELLECOR</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Model Name</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>ActFit A3 Pro</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Style</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Modern</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Color</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Black</Typography>
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

export default Smartwatch
