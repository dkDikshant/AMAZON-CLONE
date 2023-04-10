import React from 'react'
import '../todaydeals/Today.css'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import { Typography, Box, Button } from '@mui/material'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../../IMAGES/todaydeals/img1.jpg'
import img2 from '../../IMAGES/todaydeals/img2.jpg'
import img3 from '../../IMAGES/todaydeals/img3.jpg'
import img4 from '../../IMAGES/todaydeals/img4.jpg'
import img5 from '../../IMAGES/todaydeals/img5.jpg'
import img6 from '../../IMAGES/todaydeals/img6.jpg'
import img7 from '../../IMAGES/todaydeals/img7.png'
import img8 from '../../IMAGES/todaydeals/img8.jpg'
import img9 from '../../IMAGES/todaydeals/img9.jpg'
import img10 from '../../IMAGES/todaydeals/img10.jpg'
import bb1 from '../../IMAGES/todaydeals/bb1.jpg'
import bb2 from '../../IMAGES/todaydeals/bb2.jpg'
import bb3 from '../../IMAGES/todaydeals/bb3.jpg'
import { NavLink } from 'react-router-dom'
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8
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
const Todaydeal = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <Typography style={{ fontSize: 25, padding: 15, fontWeight: 700 }}>Today's Deals</Typography>
            <Carousel responsive={responsive} swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}>
                <div>
                    <img src={img1} style={{ width: '80%', padding: 10, cursor: 'pointer' }} />
                </div>
                <div>
                    <img src={img2} style={{ width: '80%', padding: 10, cursor: 'pointer' }} />
                </div>
                <div>
                    <img src={img3} style={{ width: '80%', padding: 10, cursor: 'pointer' }} />
                </div>
                <div>
                    <img src={img4} style={{ width: '80%', padding: 10, cursor: 'pointer' }} />
                </div>
                <div>
                    <img src={img5} style={{ width: '80%', padding: 10, cursor: 'pointer' }} />
                </div>
                <div>
                    <img src={img6} style={{ width: '80%', padding: 10, cursor: 'pointer' }} />
                </div>
                <div>
                    <img src={img7} style={{ width: '80%', padding: 10, cursor: 'pointer' }} />
                </div>
                <div>
                    <img src={img8} style={{ width: '80%', padding: 10, cursor: 'pointer' }} />
                </div>
                <div>
                    <img src={img9} style={{ width: '80%', padding: 10, cursor: 'pointer' }} />
                </div>
                <div>
                    <img src={img10} style={{ width: '80%', padding: 10, cursor: 'pointer' }} />
                </div>
            </Carousel>
            <div className="container">
                <div className="left-column">
                    <Box style={{ padding: 20 }}>
                        <Typography style={{ padding: 5, color: '#187185' }}>All Deals</Typography>
                        <Typography style={{ padding: 5, color: '#187185' }}>Upcoming</Typography>
                        <Typography style={{ padding: 5, color: '#187185' }}>Available</Typography>
                        <Typography style={{ padding: 5, color: '#187185' }}>Watchlist</Typography>
                    </Box>
                    <Box style={{ padding: 20 }}>
                        <Typography style={{ fontWeight: 800, paddingBottom: 10 }}>Price</Typography>
                        <Typography>All</Typography>
                        <Typography style={{ cursor: 'pointer' }}>Under &#x20B9;500</Typography>
                        <Typography style={{ cursor: 'pointer' }}>&#x20B9;500-&#x20B9;1000</Typography>
                        <Typography style={{ cursor: 'pointer' }}>&#x20B9;1000-&#x20B9;2000</Typography>
                        <Typography style={{ cursor: 'pointer' }}>&#x20B9;2000-&#x20B9;5000</Typography>
                        <Typography style={{ cursor: 'pointer' }}>&#x20B9;5000 and Above</Typography>
                    </Box>
                </div>
                <div className="right-column">
                    <Box style={{ display: 'flex', padding: 10 }}>
                        <Box style={{ background: 'white', width: 500, height: 370, border: '2px solid black', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', paddingRight: 10, paddingLeft: 20, paddingTop: 10 }}>
                            <NavLink to='/today-deals-bag' style={{ textDecoration: 'none' }}>
                                <img src={bb1} style={{ width: '50%' }} />
                                <br />
                                <Button style={{ background: 'red', color: 'white', fontSize: 12 }}>Up to 74% Off</Button>
                                <Typography style={{ color: 'black' }}>Branded Suticase,backpacks and Duffles-American Tourister,Safari,etc</Typography>
                            </NavLink>
                        </Box>
                        <Box style={{ background: 'white', width: 500, height: 370, border: '2px solid black', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', paddingRight: 10, paddingLeft: 20, paddingTop: 10 }}>
                            <NavLink to='/electronic-headphones' style={{ textDecoration: 'none' }}>
                                <img src={bb2} style={{ width: '80%' }} />
                                <Button style={{ background: 'red', color: 'white', fontSize: 12, marginTop: 60 }}>Up to 70% Off</Button>
                                <Typography style={{ marginTop: 10, color: 'black' }}>BestSelling JBL Wireless Earbuds & Speakers</Typography>
                            </NavLink>
                        </Box>
                        <Box style={{ background: 'white', width: 500, height: 370, border: '2px solid black', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', paddingRight: 10, paddingLeft: 20, paddingTop: 10 }}>
                            <NavLink to='/electronic-headphones' style={{ textDecoration: 'none' }}>
                                <img src={bb3} style={{ width: '80%' }} />
                                <Button style={{ background: 'red', color: 'white', fontSize: 12, marginTop: 20 }}>Up to 73% Off</Button>
                                <Typography style={{ marginTop: 10, color: 'black' }}>Carzy Dealson boAt headpjones and Speakers</Typography>
                            </NavLink>
                        </Box>

                    </Box>


                </div>
            </div>

        </div>
    )
}

export default Todaydeal
