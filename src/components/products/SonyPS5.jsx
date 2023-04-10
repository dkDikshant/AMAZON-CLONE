import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import pso1 from '../../IMAGES/products/laptop/pso1.jpg'
import pso2 from '../../IMAGES/products/laptop/pso2.jpg'
import pso3 from '../../IMAGES/products/laptop/pso3.jpg'
import pst1 from '../../IMAGES/products/laptop/pst1.jpg'
import pst2 from '../../IMAGES/products/laptop/pst2.jpg'
import pst3 from '../../IMAGES/products/laptop/pst3.jpg'
import '../products/Laptop.css'
import { Typography, Box, Button } from '@mui/material';

const images = [
    {
        original: pso1,
        thumbnail: pst1,



    },
    {
        original: pso2,
        thumbnail: pst2,

    },
    {
        original: pso3,
        thumbnail: pst3,

    },
];

const SonyPS5 = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='App'>
                <div className='ImageGalleryContainer' style={{ padding: 20 }}>

                    <ImageGallery items={images} thumbnailPosition='left' infinite='true' showFullscreenButton={false} showPlayButton={false} thumbnailWidth={100} thumbnailHeight={10} showNav={false} autoPlay={true} slideInterval={1000} />
                </div>
                <div className='TextContainer' style={{ padding: 20 }}>
                    <Typography style={{ fontSize: '24px', fontWeight: 400 }}>Sony PS5 PlayStation Console</Typography>
                    <Typography style={{ color: '#0071A5', cursor: 'pointer' }}>Visit the Acer Store</Typography>
                    <Typography style={{ fontWeight: 400, fontSize: '28px' }}>&#x20b9;49,990</Typography>
                    <Box>
                        <Box style={{ display: 'flex', paddingTop: 10, paddingBottom: 2 }}>

                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Maximize your play sessions with near instant load times for installed PS5 games.</Typography>
                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>

                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>The custom integration of the PS5 console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible
                            </Typography>

                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>

                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>Play your favorite PS5 games on your stunning 4K TV.
                            </Typography>

                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>

                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}> Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays.
                            </Typography>

                        </Box>
                        <Box style={{ display: 'flex', paddingTop: 2 }}>

                            <Typography style={{ fontWeight: 400, fontSize: '14px' }}>With an HDR TV, supported PS5 games display an unbelievably vibrant and lifelike range of colors.
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

export default SonyPS5
