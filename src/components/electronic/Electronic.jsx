import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import { Box, Typography, Button, Checkbox } from '@mui/material'
import img1 from '../../IMAGES/Electronic/img1.gif'
import img2 from '../../IMAGES/Electronic/img2.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img3 from '../../IMAGES/Electronic/img3.jpg'
import img4 from '../../IMAGES/Electronic/img4.jpg'
import img5 from '../../IMAGES/Electronic/img5.jpg'
import img6 from '../../IMAGES/Electronic/img6.jpg'
import bb11 from '../../IMAGES/Electronic/bb11.jpg'
import '../electronic/Electronic .css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import DoneIcon from '@mui/icons-material/Done';
import { NavLink } from 'react-router-dom'


const Electronic = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='container'>
                <div className='left'>
                    <Box style={{ padding: 10 }}>
                        <Typography>Category</Typography>
                        <Box style={{ display: 'flex' }}>
                            <ArrowLeftIcon />
                            <Typography>Electronics</Typography>
                        </Box>
                        <Typography style={{ fontSize: 14, padding: 5, fontWeight: 900 }}>OnePlus Nord buds 2
                        </Typography>
                        <Typography style={{ fontSize: 14, padding: 5 }}>Headphones, Earbuds & Accessories
                        </Typography>
                        <Typography style={{ fontWeight: 900 }}>Amazon Prime</Typography>
                        <Box style={{ display: 'flex' }}>
                            <Checkbox />
                            <Box style={{ display: 'flex', marginTop: 10 }}>
                                <DoneIcon style={{ color: '#F3A155' }} />
                                <Typography style={{ color: '#2A97C6' }}>Prime</Typography>
                            </Box>
                        </Box>
                        <Typography style={{ fontWeight: 900 }}>Pay on Delivery</Typography>
                        <Box style={{ display: 'flex' }}>
                            <Checkbox />
                            <Box style={{ display: 'flex', marginTop: 10 }}>
                                <Typography style={{ fontSize: 14 }}>Eligible for pay on Delivery</Typography>
                            </Box>
                        </Box>
                        <Typography style={{ fontWeight: 900 }}>Brand</Typography>
                        <Box style={{ display: 'flex' }}>
                            <Checkbox />
                            <Box style={{ display: 'flex', marginTop: 10 }}>
                                <Typography style={{ fontSize: 14 }}>Oneplus</Typography>
                            </Box>
                        </Box>
                        <Typography style={{ fontWeight: 900 }}>Discount</Typography>
                        <Box >
                            <Box style={{ marginTop: 10 }}>
                                <Typography style={{ fontSize: 14, marginBottom: 5 }}>10% Off or more</Typography>
                                <Typography style={{ fontSize: 14, marginBottom: 5 }}>20% Off or more</Typography>
                                <Typography style={{ fontSize: 14, marginBottom: 5 }}>30% Off or more</Typography>
                            </Box>
                        </Box>
                        <Typography style={{ fontWeight: 900 }}>Price</Typography>
                        <Box >
                            <Box style={{ marginTop: 10 }}>
                                <Typography style={{ fontSize: 14, marginBottom: 5 }}>Under &#x20b9;1000</Typography>
                                <Typography style={{ fontSize: 14, marginBottom: 5 }}>&#x20b9;1000-&#x20b9;5000</Typography>
                                <Typography style={{ fontSize: 14, marginBottom: 5 }}>&#x20b9;5000-&#x20b9;10000</Typography>
                                <Typography style={{ fontSize: 14, marginBottom: 5 }}>&#x20b9;10000-&#x20b9;20000</Typography>
                            </Box>
                        </Box>
                    </Box>

                </div>
                <div className='right'>
                    <Box style={{ padding: 20 }}>
                        <NavLink to='/electronic-headphones'>
                            <img src={img1} style={{ width: 1000 }} />
                        </NavLink>
                        <img src={img2} style={{ width: 1000 }} />
                    </Box>
                    <Box style={{ display: 'flex', padding: 20 }}>
                        <div>
                            <NavLink to='/electronic-headphones' style={{ textDecoration: 'none', color: 'black' }}>
                                <img src={img3} style={{ width: '90%', cursor: 'pointer' }} />
                                <Typography style={{ textAlign: 'center' }}>Headphones</Typography>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to='/electronic-smartwatch' style={{ textDecoration: 'none', color: 'black' }}>
                                <img src={img4} style={{ width: '90%', cursor: 'pointer' }} />
                                <Typography style={{ textAlign: 'center' }}>Fitness tracker & smartwatch</Typography>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to='/electronic-keyboard' style={{ textDecoration: 'none', color: 'black' }}>
                                <img src={img5} style={{ width: '90%', cursor: 'pointer' }} />
                                <Typography style={{ textAlign: 'center' }}>Computer accessories</Typography>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to='/electronic-pendrive' style={{ textDecoration: 'none', color: 'black' }}>
                                <img src={img6} style={{ width: '90%', cursor: 'pointer' }} />
                                <Typography style={{ textAlign: 'center' }}>pendrive</Typography>
                            </NavLink>
                        </div>
                    </Box>
                    <Typography style={{ textAlign: 'center', marginTop: 50, fontSize: 40 }}>Handpicked collection for you</Typography>
                    <Box>
                        <Button style={{ width: '20%', height: 60, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', marginRight: 30, color: 'black', marginTop: 20, marginLeft: 50 }}>Under &#x20B9;99</Button>
                        <Button style={{ width: '20%', height: 60, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', marginRight: 30, color: 'black', marginTop: 20 }}>Under &#x20B9;299</Button>
                        <Button style={{ width: '20%', height: 60, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', marginRight: 30, color: 'black', marginTop: 20 }}>Under &#x20B9;499</Button>
                        <Button style={{ width: '20%', height: 60, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', marginRight: 30, color: 'black', marginTop: 20 }}>Under &#x20B9;999</Button>
                    </Box>
                    <Box>
                        <img src={bb11} style={{ width: '90%', marginBottom: 50, padding: 20 }} />

                    </Box>

                </div>

            </div>
        </div>
    )
}

export default Electronic
