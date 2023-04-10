import React from 'react';
import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material';
import minilogo from '../../IMAGES/minilogo.png'
import alogo from '../../IMAGES/alogo.png';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../IMAGES/MINITV/img1.jpeg'
import img2 from '../../IMAGES/MINITV/img2.jpeg'
import img3 from '../../IMAGES/MINITV/img3.jpeg'
import img4 from '../../IMAGES/MINITV/img4.jpeg'
import img6 from '../../IMAGES/MINITV/img6.jpeg'
import img7 from '../../IMAGES/MINITV/img7.jpeg'
import imgg1 from '../../IMAGES/MINITV/Trending/img1.jpg'
import imgg2 from '../../IMAGES/MINITV/Trending/img2.jpg'
import imgg3 from '../../IMAGES/MINITV/Trending/img3.jpg'
import imgg4 from '../../IMAGES/MINITV/Trending/img4.jpg'
import imgg5 from '../../IMAGES/MINITV/Trending/img5.jpg'
import imgg6 from '../../IMAGES/MINITV/Trending/img6.jpg'
import imgg7 from '../../IMAGES/MINITV/Trending/img7.jpg'
import imgg8 from '../../IMAGES/MINITV/Trending/img8.jpg'
import imgg9 from '../../IMAGES/MINITV/Trending/img9.jpg'

const AppBarStyle = styled(Toolbar)({
    background: '#1A2224'
})
const responsive = {
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
const responsive1 = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
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
const ImgStyle = styled('img')({
    width: '100%'
})
const MiniTV = () => {
    return (
        <div style={{ background: 'black' }}>
            <AppBar position='static'>
                <AppBarStyle>
                    <img src={minilogo} style={{ width: '15%', marginRight: 30 }} />
                    <Typography style={{ fontWeight: 700, marginRight: 50, color: '#DE146D' }}>Home</Typography>
                    <Typography style={{ fontWeight: 700, marginRight: 50 }}>Web Series</Typography>
                    <Typography style={{ fontWeight: 700, marginRight: 50 }}>mini Movies</Typography>
                    <Typography style={{ fontWeight: 700, marginRight: 50 }}>Comedy</Typography>
                    <NavLink to='/'>
                        <img src={alogo} style={{ marginLeft: 400, width: '7%', marginRight: 30, marginTop: 10 }} />
                    </NavLink>
                    <SettingsIcon />
                </AppBarStyle>
            </AppBar>
            <br />
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={2000}
                infinite={true}
            >
                <div><ImgStyle src={img1} alt="" /></div>
                <div><ImgStyle src={img2} alt="" /></div>
                <div><ImgStyle src={img3} alt="" /></div>
                <div><ImgStyle src={img4} alt="" /></div>
                <div><ImgStyle src={img6} alt="" /></div>
                <div><ImgStyle src={img7} alt="" /></div>
            </Carousel>;


            <Box style={{ padding: 10, marginLeft: 10 }}>
                <Typography color={'white'}>Trending Top 10 on miniTv</Typography>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive1}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    infinite={true}
                >
                    <div><img src={imgg1} style={{ width: '100%', height: 150 }} /></div>
                    <div><img src={imgg2} style={{ width: '100%', height: 150 }} /></div>
                    <div><img src={imgg3} style={{ width: '100%', height: 150 }} /></div>
                    <div><img src={imgg4} style={{ width: '100%', height: 150 }} /></div>
                    <div><img src={imgg6} style={{ width: '100%', height: 150 }} /></div>
                    <div><img src={imgg9} style={{ width: '100%', height: 150 }} /></div>
                    <div><img src={imgg5} style={{ width: '100%', height: 150 }} /></div>
                    <div><img src={imgg8} style={{ width: '100%', height: 150 }} /></div>
                    <div><img src={imgg7} style={{ width: '100%', height: 150 }} /></div>
                </Carousel>;

            </Box>
        </div>
    )
}

export default MiniTV
