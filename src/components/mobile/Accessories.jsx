import React from 'react'
import HeaderClone from '../HeaderClone'
import Header2 from '../Header/Header2'
import '../mobile/Oneplus.css'
import { Typography, Box, Checkbox, Button } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import DoneIcon from '@mui/icons-material/Done';
import { NavLink } from 'react-router-dom';
import img1 from '../../IMAGES/Mobiles/Accessories/img1.jpg'
import img2 from '../../IMAGES/Mobiles/Accessories/img2.jpg'
import img3 from '../../IMAGES/Mobiles/Accessories/img3.jpg'
import img4 from '../../IMAGES/Mobiles/Accessories/img4.jpg'
import img5 from '../../IMAGES/Mobiles/Accessories/img5.jpg'
import img6 from '../../IMAGES/Mobiles/Accessories/img6.jpg'
import img7 from '../../IMAGES/Mobiles/Accessories/img7.jpg'
import bb1 from '../../IMAGES/Mobiles/Accessories/bb1.gif'
import bb2 from '../../IMAGES/Mobiles/Accessories/bb2.gif'
import bb3 from '../../IMAGES/Mobiles/Accessories/bb3.gif'
import bb4 from '../../IMAGES/Mobiles/Accessories/bb4.gif'
const Accessories = () => {
    return (
        <>
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
                    <Box style={{ display: 'flex', marginTop: 10, marginBottom: 20 }}>
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
                    <Box style={{ display: 'flex', marginBottom: 20, marginTop: 10 }}>
                        <Box>
                            <NavLink to='/electronic-keyboard' style={{ textDecoration: 'none' }}>
                                <img src={img1} style={{ cursor: 'pointer', width: 150, marginRight: 20, marginLeft: 10 }} />
                                <Typography style={{ marginLeft: 15, color: 'black' }}>Power banks</Typography>
                            </NavLink>
                        </Box>
                        <Box>
                            <NavLink to='/electronic-headphones' style={{ textDecoration: 'none', color: ';black' }}>
                                <img src={img2} style={{ cursor: 'pointer', width: 150, marginRight: 20 }} />
                                <Typography style={{ color: 'black' }}>Headsets</Typography>
                            </NavLink>
                        </Box>
                        <Box>
                            <NavLink to='/electronic-smartwatch' style={{ textDecoration: 'none' }}>

                                <img src={img3} style={{ cursor: 'pointer', width: 150, marginRight: 20 }} />
                                <Typography style={{ color: 'black' }}>Cases & covers</Typography>
                            </NavLink>
                        </Box>
                        <Box>
                            <NavLink to='/electronic-smartwatch' style={{ textDecoration: 'none' }}>
                                <img src={img4} style={{ cursor: 'pointer', width: 150, marginRight: 20 }} />
                                <Typography style={{ color: 'black' }}>Screen Protector</Typography>
                            </NavLink>
                        </Box>
                        <Box>
                            <NavLink to='/electronic-keyboard' style={{ textDecoration: 'none' }}>

                                <img src={img5} style={{ cursor: 'pointer', width: 150, marginRight: 20 }} />
                                <Typography style={{ color: 'black' }}>cables & charger</Typography>
                            </NavLink>
                        </Box>
                        <Box>
                            <NavLink to='/electronic-keyboard' style={{ textDecoration: 'none' }}>

                                <img src={img6} style={{ cursor: 'pointer', width: 150, marginRight: 20 }} />
                                <Typography style={{ color: 'black' }}>Mobile-holder & more</Typography>
                            </NavLink>
                        </Box>
                    </Box>
                    <Box style={{ width: '95%', height: 380, background: 'white', margin: 20 }}>
                        <Box style={{ display: 'flex' }}>
                            <Box>
                                <NavLink to='/electronic-headphones' style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src={bb1} style={{ width: '85%', padding: 20 }} />
                                    <Typography style={{ textAlign: 'center' }}>Show Now</Typography>
                                </NavLink>
                            </Box>
                            <Box>
                                <NavLink to='/best-seller' style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src={bb2} style={{ width: '85%', padding: 20 }} />
                                    <Typography style={{ textAlign: 'center' }}>Show Now</Typography>
                                </NavLink>
                            </Box>
                            <Box>
                                <NavLink to='/miniTv' style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src={bb3} style={{ width: '85%', padding: 20 }} />
                                    <Typography style={{ textAlign: 'center' }}>Show Now</Typography>
                                </NavLink>
                            </Box>
                            <Box>
                                <NavLink to='/service' style={{ textDecoration: 'none', color: 'black' }}>
                                    <img src={bb4} style={{ width: '85%', padding: 20 }} />
                                    <Typography style={{ textAlign: 'center' }}>Show Now</Typography>
                                </NavLink>
                            </Box>
                        </Box>
                    </Box>
                    <NavLink to='/electronic-headphones'>
                        <img src={img7} style={{ width: '100%' }} />
                    </NavLink>

                </div>
            </div >
        </>

    )
}

export default Accessories
