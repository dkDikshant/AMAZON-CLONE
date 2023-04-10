import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ko1 from '../../IMAGES/products/laptop/ko1.jpg'
import ko2 from '../../IMAGES/products/laptop/ko2.jpg'
import ko3 from '../../IMAGES/products/laptop/ko3.jpg'
import kt1 from '../../IMAGES/products/laptop/kt1.jpg'
import kt2 from '../../IMAGES/products/laptop/kt2.jpg'
import kt3 from '../../IMAGES/products/laptop/kt3.jpg'
import '../products/Laptop.css'
import { Typography, Box, Button } from '@mui/material';

const images = [
    {
        original: ko1,
        thumbnail: kt1,



    },
    {
        original: ko2,
        thumbnail: kt2,

    },
    {
        original: ko3,
        thumbnail: kt3,

    },
];
const Keyboard = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='App'>
                <div className='ImageGalleryContainer' style={{ padding: 20 }}>

                    <ImageGallery items={images} thumbnailPosition='left' infinite='true' showFullscreenButton={false} showPlayButton={false} thumbnailWidth={100} thumbnailHeight={10} showNav={false} autoPlay={true} slideInterval={2000} />
                </div>
                <div className='TextContainer' style={{ padding: 20 }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 400 }}>Cosmic Byte CB-GK-34 Firefly Hot Swappable Per-Key RGB Ten-Keyless Keyboard with Outemu Red Switch, Macros, Software (Black)</Typography>
                    <Typography style={{ color: '#0071A5', cursor: 'pointer' }}>Visit the Acer Store</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: '28px' }}>&#x20b9;3,083</Typography>
                    <Box>
                        <Box style={{ display: 'flex', paddingTop: 10, paddingBottom: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Brand</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Cosmic Byte</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Series</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Firefly</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Item Height</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>35 Millimeters</Typography>
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

export default Keyboard
