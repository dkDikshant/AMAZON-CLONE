import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import img4 from '../../IMAGES/products/laptop/img4.webp'
import o2 from '../../IMAGES/products/laptop/o2.jpg'
import o1 from '../../IMAGES/products/laptop/o1.jpg'
import o3 from '../../IMAGES/products/laptop/o3.jpg'
import th1 from '../../IMAGES/products/laptop/th2.jpg'
import th2 from '../../IMAGES/products/laptop/th1.jpg'
import '../products/Laptop.css'
import { Typography, Box, Button } from '@mui/material';

const images = [
    {
        original: img4,
        thumbnail: o3,
    },
    {
        original: th1,
        thumbnail: o2,

    },
    {
        original: th2,
        thumbnail: o1,

    },
];


const LaptopProductsHpintellow = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='App'>
                <div className='ImageGalleryContainer' style={{ padding: 20 }}>

                    <ImageGallery items={images} thumbnailPosition='left' infinite='true' showFullscreenButton={false} showPlayButton={false} thumbnailWidth={100} thumbnailHeight={10} showNav={false} autoPlay={true} slideInterval={1000} />
                </div>
                <div className='TextContainer' style={{ padding: 20 }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 400 }}>HP 255 G8 Laptop with AMD Athlon Silver 3050U APU/ 8GB Ram/ 256GB SSD/DOS/AMD Radeon Vega 8 Mobile Graphics/39.6 cm HD (1366 x 768), SVA, Anti-Glare WLED/Black/1 Year Onsite Warranty
                    </Typography>
                    <Typography style={{ color: '#0071A5', cursor: 'pointer' }}>Visit the Hp Store</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: '28px' }}>&#x20b9;25,999</Typography>
                    <Box>
                        <Box style={{ display: 'flex', paddingTop: 10, paddingBottom: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Brand</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Hp</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Series</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>255 G8</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Screen Size</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>	15.6 inches</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Color</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Black</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Hard Disk</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>256 GB</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>CPU Model</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Athlon Silver 3050U</Typography>
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

export default LaptopProductsHpintellow
