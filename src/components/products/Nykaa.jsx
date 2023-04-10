import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import no1 from '../../IMAGES/products/laptop/no1.jpg'
import no2 from '../../IMAGES/products/laptop/no2.jpg'
import no3 from '../../IMAGES/products/laptop/no3.jpg'
import nt1 from '../../IMAGES/products/laptop/nt1.jpg'
import nt2 from '../../IMAGES/products/laptop/nt2.jpg'
import nt3 from '../../IMAGES/products/laptop/nt3.jpg'
import '../products/Laptop.css'
import { Typography, Box, Button } from '@mui/material';

const images = [
    {
        original: no1,
        thumbnail: nt1,



    },
    {
        original: no2,
        thumbnail: nt2,

    },
    {
        original: no3,
        thumbnail: nt3,

    },
];

const Nykaa = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='App'>
                <div className='ImageGalleryContainer' style={{ padding: 20 }}>

                    <ImageGallery items={images} thumbnailPosition='left' infinite='true' showFullscreenButton={false} showPlayButton={false} thumbnailWidth={100} thumbnailHeight={10} showNav={false} autoPlay={true} slideInterval={1000} />
                </div>
                <div className='TextContainer' style={{ padding: 20 }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 400 }}>NYKD by Nykaa Everyday Cotton T-Shirt Bra for Women Daily Use, 3/4th Coverage, Non-Wired, Lightly Padded - NYB198</Typography>
                    <Typography style={{ color: '#0071A5', cursor: 'pointer' }}>Visit the Acer Store</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: '28px' }}>&#x20b9;5,970</Typography>
                    <Box>
                        <Box style={{ display: 'flex', paddingTop: 10, paddingBottom: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Care Instructions</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Hand Wash Only</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Coverage</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>3/4th Coverage.
                            </Typography>

                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Designed for</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>B-D cups
                            </Typography>

                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Fabric</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}> Soft, cotton
                            </Typography>

                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>
                            <Typography style={{ fontWeight: 700, fontSize: '14px', marginRight: 20 }}>Straps</Typography>
                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Super-soft
                            </Typography>

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

export default Nykaa
