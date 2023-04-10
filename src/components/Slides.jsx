import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import one from '../IMAGES/one.jpg'
import two from '../IMAGES/two.jpg'
import three from '../IMAGES/three.jpg'
import four from '../IMAGES/four.jpg'
import five from '../IMAGES/five.jpg'
import six from '../IMAGES/six.jpg'
import styled from '@emotion/styled';
import phar from '../IMAGES/pharmacy.jpg'
import { Box, Typography, Button } from '@mui/material';
import img1 from '../IMAGES/img1.jpg'
import img2 from '../IMAGES/img2.jpg'
import img3 from '../IMAGES/img3.jpg'
import img4 from '../IMAGES/img4.jpg'
import laptop from '../IMAGES/laptop.jpg'
import laptop1 from '../IMAGES/laptop1.jpg'
import { NavLink, Link } from 'react-router-dom';

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const SliderStyle = styled('img')({
    width: '100%',
    background: 'linear-gradient(to bottom ,transparent,rgba(0,0,0,0.7))',
    cursor: 'pointer'

})
const StyledCarousel = styled(Carousel)`
  .react-multiple-carousel__arrow--left,
  .react-multiple-carousel__arrow--right {
    top: calc(28% - 10px); 
  }
  
`;

const Container = styled('div')({
    position: 'relative'
})

const BoxStyle = styled(Box)({
    position: 'absolute',
    bottom: -200,
    display: 'flex',
    justifyContent: 'space-between',
    left: '2%'
})
const InsideBoxStyle = styled(Box)({
    marginTop: '20%',
    width: '300px',
    height: '420px',
    background: '#fff',
    boxShadow: ' rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
    marginBottom: 20
})
const Slides = () => {
    return (
        <Container>
            <StyledCarousel
                swipeable={false}
                responsive={responsive}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
            >
                <div><SliderStyle src={one} style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))' }} /></div>
                <div><SliderStyle src={two} /></div>
                <div><SliderStyle src={three} /></div>
                <div><SliderStyle src={four} /></div>
                <div><SliderStyle src={five} /></div>
                <div><SliderStyle src={six} /></div>
            </StyledCarousel>
            <BoxStyle>
                <InsideBoxStyle>
                    <Typography variant='h5' style={{ padding: 10, fontWeight: 800 }}>
                        Up to 50% off | Monitor blood sugar at home
                    </Typography>
                    <NavLink to='/pharmacy' style={{ textDecoration: 'none', color: 'black' }}>
                        <img src={phar} style={{ width: '90%', height: '250px', padding: '10px' }} />
                        <a href="#" style={{ textDecoration: 'none', padding: 10 }}>Visit the store </a>
                    </NavLink>
                </InsideBoxStyle>
                <InsideBoxStyle style={{ marginLeft: '10px' }}>
                    <Typography variant='h5' style={{ padding: 10, fontWeight: 800 }}>
                        Shop & earn rewards up to ₹500 on intimate...
                    </Typography>
                    <Box style={{ display: 'flex' }}>
                        <Box style={{ width: 130, height: 150, padding: 5, marginLeft: 10 }}>
                            <img src={img1} style={{ width: 130, height: 100, marginBottom: 0, paddingBottom: 0 }} />
                            <p style={{ fontSize: 12, paddingTop: 0, marginTop: 0, fontWeight: 400, paddingLeft: 10 }}>Minimum Order of {"\u20B9"} 1799</p>
                        </Box>
                        <Box style={{ width: 130, height: 150, padding: 5, marginRight: 10 }}>
                            <img src={img2} style={{ width: 130, height: 100 }} />
                            <p style={{ fontSize: 12, paddingTop: 0, marginTop: 0, fontWeight: 400, paddingLeft: 10 }}>Minimum Order of {"\u20B9"} 750</p>
                        </Box>
                    </Box>
                    <Box style={{ display: 'flex' }}>
                        <Box style={{ width: 130, height: 150, padding: 5, marginLeft: 10 }}>
                            <img src={img3} style={{ width: 130, height: 100, marginBottom: 0, paddingBottom: 0 }} />
                            <p style={{ fontSize: 12, paddingTop: 0, marginTop: 0, fontWeight: 400, paddingLeft: 10 }}>Minimum Order of {"\u20B9"} 999</p>
                        </Box>
                        <Box style={{ width: 130, height: 150, padding: 5, marginRight: 10 }}>
                            <img src={img4} style={{ width: 130, height: 100 }} />
                            <p style={{ fontSize: 12, paddingTop: 0, marginTop: 0, fontWeight: 400, paddingLeft: 10 }}>Minimum Order of {"\u20B9"} 799</p>
                        </Box>
                    </Box>
                </InsideBoxStyle>
                <InsideBoxStyle style={{ marginLeft: '10px' }}>
                    <Typography variant='h5' style={{ padding: 10, fontWeight: 800 }}>
                        Up to 50% off | Monitor blood sugar at home
                    </Typography>
                    <NavLink to='/laptop' style={{ textDecoration: 'none' }}>
                        <img src={laptop} style={{ width: '90%', height: '250px', padding: '10px', cursor: 'pointer' }} />
                        <a href="#" style={{ textDecoration: 'none', padding: 10 }}>See more </a>
                    </NavLink>

                </InsideBoxStyle>
                <InsideBoxStyle style={{ marginLeft: '10px' }}>
                    <Box style={{ width: 300, height: 150, boxShadow: ' rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}>
                        <Typography style={{ paddingTop: 20, paddingLeft: 50, paddingRight: 30, fontWeight: 800 }}>Sign In for Your Best Experience</Typography>
                        <NavLink to="/signin" style={{ textDecoration: 'none' }}>
                            <Button style={{ background: '#FFD814', marginLeft: 30, paddingLeft: 50, paddingRight: 50, marginTop: 10, textDecoration: 'none' }}>Sign in securly</Button>
                        </NavLink>

                    </Box>
                    <Box style={{ marginTop: 30, marginLeft: 10 }}>
                        <NavLink to='/laptop'>

                            <img src={laptop1} style={{ height: 230 }} />
                        </NavLink>

                    </Box>
                </InsideBoxStyle>

            </BoxStyle>


        </Container>
    )
}

export default Slides
