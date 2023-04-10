import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import po1 from '../../IMAGES/products/laptop/po1.jpg'
import po2 from '../../IMAGES/products/laptop/po2.jpg'
import po3 from '../../IMAGES/products/laptop/po3.jpg'
import pt1 from '../../IMAGES/products/laptop/pt1.jpg'
import pt2 from '../../IMAGES/products/laptop/pt2.jpg'
import pt3 from '../../IMAGES/products/laptop/pt3.jpg'
import '../products/Laptop.css'
import { Typography, Box, Button } from '@mui/material';

const images = [
    {
        original: pt1,
        thumbnail: po1,



    },
    {
        original: pt2,
        thumbnail: po2,

    },
    {
        original: pt3,
        thumbnail: po3,

    },
];

const Pendrive = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='App'>
                <div className='ImageGalleryContainer' style={{ padding: 20 }}>

                    <ImageGallery items={images} thumbnailPosition='left' infinite='true' showFullscreenButton={false} showPlayButton={false} thumbnailWidth={100} thumbnailHeight={10} showNav={false} autoPlay={true} slideInterval={2000} />
                </div>
                <div className='TextContainer' style={{ padding: 20 }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 400 }}>SanDisk Ultra Flair 64GB USB 3.0 Pen Drive, Multicolor</Typography>
                    <Typography style={{ color: '#0071A5', cursor: 'pointer' }}>Visit the Acer Store</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: '28px' }}>&#x20b9;3,083</Typography>
                    <Box>
                        <Box style={{ display: 'flex', paddingTop: 10, paddingBottom: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Brand</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>SanDisk</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Special Feature</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Drop Proof</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Write Speed</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>1x</Typography>
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

export default Pendrive
