import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import bo1 from '../../IMAGES/products/laptop/bo1.jpg'
import bo2 from '../../IMAGES/products/laptop/bo2.jpg'
import bo3 from '../../IMAGES/products/laptop/bo3.jpg'
import bt1 from '../../IMAGES/products/laptop/bt1.jpg'
import bt2 from '../../IMAGES/products/laptop/bt2.jpg'
import bt3 from '../../IMAGES/products/laptop/bt3.jpg'
import '../products/Laptop.css'
import { Typography, Box, Button } from '@mui/material';

const images = [
    {
        original: bo1,
        thumbnail: bt1,



    },
    {
        original: bo2,
        thumbnail: bt2,

    },
    {
        original: bo3,
        thumbnail: bt3,

    },
];

const Bag = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='App'>
                <div className='ImageGalleryContainer' style={{ padding: 20 }}>

                    <ImageGallery items={images} thumbnailPosition='left' infinite='true' showFullscreenButton={false} showPlayButton={false} thumbnailWidth={100} thumbnailHeight={10} showNav={false} autoPlay={true} slideInterval={1000} />
                </div>
                <div className='TextContainer' style={{ padding: 20 }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 400 }}>Safari Pentagon Trolley Bags for Travel, 55 cm Cabin Suitcase, 4 Wheel Cyan Small Luggage for Men and Women, Polypropylene Hard Side Cabin Bag</Typography>
                    <Typography style={{ color: '#0071A5', cursor: 'pointer' }}>Visit the Acer Store</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: '28px' }}>&#x20b9;1,999</Typography>
                    <Box>
                        <Box style={{ display: 'flex', paddingTop: 10, paddingBottom: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Brand</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Safari</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>ASIN </Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>B097QP6L5K</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Item Weight</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}> 2 kg 440 g</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Department</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Unisex</Typography>
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

export default Bag
