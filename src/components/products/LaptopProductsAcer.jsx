import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import og1 from '../../IMAGES/products/laptop/og1.jpg'
import og2 from '../../IMAGES/products/laptop/or2.jpg'
import og3 from '../../IMAGES/products/laptop/or3.jpg'
import thu1 from '../../IMAGES/products/laptop/thu1.jpg'
import thu2 from '../../IMAGES/products/laptop/thu2.jpg'
import thu3 from '../../IMAGES/products/laptop/thu3.jpg'
import '../products/Laptop.css'
import { Typography, Box, Button } from '@mui/material';



const images = [
    {
        original: og1,
        thumbnail: thu1,



    },
    {
        original: og2,
        thumbnail: thu2,

    },
    {
        original: og3,
        thumbnail: thu3,

    },
];

const LaptopProductsAcer = () => {

    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='App'>
                <div className='ImageGalleryContainer' style={{ padding: 20 }}>

                    <ImageGallery items={images} thumbnailPosition='left' infinite='true' showFullscreenButton={false} showPlayButton={false} thumbnailWidth={100} thumbnailHeight={10} showNav={false} autoPlay={true} slideInterval={2000} />
                </div>
                <div className='TextContainer' style={{ padding: 20 }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 400 }}>Acer Aspire Vero Green Thin and Light Laptop Intel Core i5 11th Gen (Windows 11 Home/MS Office/8 GB/512 GB SSD/Fingerprint Reader/Backlit KB) AV15-51 with 39.6 cm (15.6 inch) with FHD IPS Display</Typography>
                    <Typography style={{ color: '#0071A5', cursor: 'pointer' }}>Visit the Acer Store</Typography>
                    <Box>
                        <Box style={{ display: 'flex', paddingTop: 10, paddingBottom: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Brand</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Acer</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Series</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Aspire vero</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Screen Size</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>15.6 inches</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Color</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>grey</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Hard Disk</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>512 GB</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>CPU Model</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Core i5</Typography>
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

export default LaptopProductsAcer
