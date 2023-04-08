import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HeaderClone from '../HeaderClone'
import Header2 from '../Header/Header2'
import { Box, Typography } from '@mui/material'
import '../mobile/mobile.css';
import img1 from '../../IMAGES/Mobiles/img1.jpg'
import img2 from '../../IMAGES/Mobiles/img2.jpg'
import img3 from '../../IMAGES/Mobiles/img3.jpg'
import img4 from '../../IMAGES/Mobiles/img4.jpg'
import img5 from '../../IMAGES/Mobiles/img5.jpg'
import img6 from '../../IMAGES/Mobiles/img6.jpg'
import img7 from '../../IMAGES/Mobiles/img7.jpg'
import img8 from '../../IMAGES/Mobiles/img8.jpg'
import img9 from '../../IMAGES/Mobiles/img9.jpg'
import img10 from '../../IMAGES/Mobiles/img10.jpg'
import New from '../../IMAGES/Mobiles/New.jpg'
import b1 from '../../IMAGES/Mobiles/b1.jpg'
import b2 from '../../IMAGES/Mobiles/b2.jpg'
import b3 from '../../IMAGES/Mobiles/b3.jpg'
import b4 from '../../IMAGES/Mobiles/b4.jpg'
import bb1 from '../../IMAGES/Mobiles/bb1.jpg'
import bb2 from '../../IMAGES/Mobiles/bb2.jpg'
import bb3 from '../../IMAGES/Mobiles/bb3.jpg'
import bb4 from '../../IMAGES/Mobiles/bb4.jpg'
import bb5 from '../../IMAGES/Mobiles/bb5.jpg'
import bb6 from '../../IMAGES/Mobiles/bb6.jpg'
import { NavLink } from 'react-router-dom';



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const responsive1 = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Mobile = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <Box style={{ display: 'flex', marginTop: 10 }}>
                <NavLink to='/mobiles' style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography className='text' style={{ marginLeft: 50, marginRight: 50, fontWeight: 400, fontSize: '24px' }}>Smartphones</Typography>
                </NavLink>
                <NavLink to='/accessories' style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography className='text' style={{ marginRight: 50, fontWeight: 400, fontSize: '24px' }}>Accessories</Typography>
                </NavLink>
                <NavLink to='/oneplus' style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography className='text' style={{ marginRight: 50, fontWeight: 400, fontSize: '24px' }}>OnePlus Nord CE 3 Lite 5G</Typography>
                </NavLink>
            </Box>
            <Carousel responsive={responsive}
                infinite={true}>
                <div>
                    <img src={img1} style={{ width: 250, padding: 20 }} />
                </div>
                <div>
                    <img src={img2} style={{ width: 250, padding: 20 }} />
                </div>
                <div>
                    <img src={img3} style={{ width: 250, padding: 20 }} />
                </div>
                <div>
                    <img src={img4} style={{ width: 250, padding: 20 }} />
                </div>
                <div>
                    <img src={img5} style={{ width: 250, padding: 20 }} />
                </div>
                <div>
                    <img src={img6} style={{ width: 250, padding: 20 }} />
                </div>
                <div>
                    <img src={img7} style={{ width: 250, padding: 20 }} />
                </div>
                <div>
                    <img src={img8} style={{ width: 250, padding: 20 }} />
                </div>
                <div>
                    <img src={img9} style={{ width: 250, padding: 20 }} />
                </div>
                <div>
                    <img src={img10} style={{ width: 250, padding: 20 }} />
                </div>
            </Carousel>
            <img src={New} style={{ width: '100%', marginTop: 20 }} />
            <Box style={{ display: 'flex', marginBottom: 50 }}>
                <img src={b1} style={{ width: 320, cursor: 'pointer' }} />
                <img src={b2} style={{ width: 320, cursor: 'pointer' }} />
                <img src={b3} style={{ width: 320, cursor: 'pointer' }} />
                <img src={b4} style={{ width: 320, cursor: 'pointer' }} />
            </Box>
            <Box >
                <Carousel responsive={responsive1}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}>
                    <div>
                        <img src={bb1} style={{ width: '100%', cursor: 'pointer' }} />
                    </div>
                    <div>
                        <img src={bb2} style={{ width: '100%', cursor: 'pointer' }} />
                    </div>
                    <div>
                        <img src={bb3} style={{ width: '100%', cursor: 'pointer' }} />
                    </div>
                    <div>
                        <img src={bb4} style={{ width: '100%', cursor: 'pointer' }} />
                    </div>
                    <div>
                        <img src={bb5} style={{ width: '100%', cursor: 'pointer' }} />
                    </div>
                    <div>
                        <img src={bb6} style={{ width: '100%', cursor: 'pointer' }} />
                    </div>
                </Carousel>

            </Box>


        </div>
    )
}

export default Mobile
