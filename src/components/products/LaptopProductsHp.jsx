import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import og4 from '../../IMAGES/products/laptop/or4.jpg'
import og5 from '../../IMAGES/products/laptop/or5.jpg'
import og6 from '../../IMAGES/products/laptop/or6.jpg'
import thu4 from '../../IMAGES/products/laptop/thu4.jpg'
import thu5 from '../../IMAGES/products/laptop/thu5.jpg'
import thu6 from '../../IMAGES/products/laptop/thu6.jpg'
import '../products/Laptop.css'
import { Typography, Box, Button } from '@mui/material';



const images = [
    {
        original: og6,
        thumbnail: thu4,



    },
    {
        original: og5,
        thumbnail: thu5,

    },
    {
        original: og4,
        thumbnail: thu6,

    },
];

const LaptopProductsHp = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='App'>
                <div className='ImageGalleryContainer' style={{ padding: 20 }}>

                    <ImageGallery items={images} thumbnailPosition='left' infinite='true' showFullscreenButton={false} showPlayButton={false} thumbnailWidth={100} thumbnailHeight={10} showNav={false} autoPlay={true} slideInterval={2000} />
                </div>
                <div className='TextContainer' style={{ padding: 20 }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 400 }}>HP 15s, AMD Ryzen 3 5300U, 15.6 inch(39.6cm) FHD Anti-Glare Laptop(8GB RAM/512 GB SSD/AMD Radeon Graphics/Win 11/MSO/Backlit Keyboard/Dual Speakers) 15s- eq2213AU</Typography>
                    <Typography style={{ color: '#0071A5', cursor: 'pointer' }}>Visit the Hp Store</Typography>
                    <Box>
                        <Box style={{ display: 'flex', paddingTop: 10, paddingBottom: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Brand</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Hp</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Model name</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>15s- eq2213AU</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Screen Size</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>	39.6 Centimetres</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Color</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Natural Silver</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Hard Disk</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>512 GB</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>CPU Model</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Ryzen 3</Typography>
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

export default LaptopProductsHp
