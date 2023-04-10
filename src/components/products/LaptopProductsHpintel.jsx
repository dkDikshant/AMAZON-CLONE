import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import og7 from '../../IMAGES/products/laptop/or7.jpg'
import og8 from '../../IMAGES/products/laptop/or8.jpg'
import og9 from '../../IMAGES/products/laptop/or9.jpg'
import thu7 from '../../IMAGES/products/laptop/thu7.jpg'
import thu8 from '../../IMAGES/products/laptop/thu8.jpg'
import thu9 from '../../IMAGES/products/laptop/thu9.jpg'
import '../products/Laptop.css'
import { Typography, Box, Button } from '@mui/material';

const images = [
    {
        original: thu7,
        thumbnail: og7,



    },
    {
        original: thu8,
        thumbnail: og8,

    },
    {
        original: thu9,
        thumbnail: og9,

    },
];


const LaptopProductsHpintel = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='App'>
                <div className='ImageGalleryContainer' style={{ padding: 20 }}>

                    <ImageGallery items={images} thumbnailPosition='left' infinite='true' showFullscreenButton={false} showPlayButton={false} thumbnailWidth={100} thumbnailHeight={10} showNav={false} autoPlay={true} slideInterval={2000} />
                </div>
                <div className='TextContainer' style={{ padding: 20 }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 400 }}>HP 15s, 11th Gen Intel Core i3 8GB RAM/1TB HDD+256 GB SSD 15.6-inches/39.6 cm FHD Laptop/Windows 11/Intel UHD Graphics/Dual Speakers/Alexa/MSO/Fast Charge/1.75 Kg, 15s-du3614TU
                    </Typography>
                    <Typography style={{ color: '#0071A5', cursor: 'pointer' }}>Visit the Hp Store</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: '28px' }}>&#x20b9;38,490</Typography>
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

export default LaptopProductsHpintel
