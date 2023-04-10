import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import eo1 from '../../IMAGES/products/laptop/eo1.jpg'
import eo2 from '../../IMAGES/products/laptop/eo2.jpg'
import eo3 from '../../IMAGES/products/laptop/eo3.jpg'
import et1 from '../../IMAGES/products/laptop/et1.jpg'
import et2 from '../../IMAGES/products/laptop/et2.jpg'
import et3 from '../../IMAGES/products/laptop/et3.jpg'
import '../products/Laptop.css'
import { Typography, Box, Button } from '@mui/material';

const images = [
    {
        original: eo1,
        thumbnail: et1,



    },
    {
        original: eo2,
        thumbnail: et2,

    },
    {
        original: eo3,
        thumbnail: et3,

    },
];


const Enamor = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='App'>
                <div className='ImageGalleryContainer' style={{ padding: 20 }}>

                    <ImageGallery items={images} thumbnailPosition='left' infinite='true' showFullscreenButton={false} showPlayButton={false} thumbnailWidth={100} thumbnailHeight={10} showNav={false} autoPlay={true} slideInterval={1000} />
                </div>
                <div className='TextContainer' style={{ padding: 20 }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 400 }}>Enamor Women's Polyester Padded, With Removable Pads Wire Free Full Coverage Bra</Typography>
                    <Typography style={{ color: '#0071A5', cursor: 'pointer' }}>Visit the Acer Store</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: '28px' }}>&#x20b9;1,399</Typography>
                    <Box>
                        <Box style={{ display: 'flex', paddingTop: 10, paddingBottom: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Care Instructions</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Hand Wash Only</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Fit Type</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Slim</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Product Type</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Sports Tights
                            </Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Fabric</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Polyester</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Pattern</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Solid</Typography>
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

export default Enamor
