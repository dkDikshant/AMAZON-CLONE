import React from 'react';
import HeaderClone from '../HeaderClone'
import Header2 from '../Header/Header2';
import '../mobile/Oneplus.css'
import { Typography, Box, Checkbox, Button } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import DoneIcon from '@mui/icons-material/Done';
import { NavLink } from 'react-router-dom';
import img1 from '../../IMAGES/Mobiles/OnePlus/img1.jpg'
import img2 from '../../IMAGES/Mobiles/OnePlus/img2.jpg'

const Oneplus = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className="container">
                <div className="left">
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
                <div className="right">
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
                    <img src={img1} style={{ width: '90%', paddingLeft: 50, paddingTop: 30 }} />
                    <NavLink to='/electronic-headphones' style={{ textDecoration: 'none', color: 'white' }}>
                        <Button variant='contained' style={{ background: 'red', fontSize: 15, marginLeft: '45%' }}>Notify Me</Button>
                    </NavLink>
                    <Box>
                        <img src={img2} style={{ width: '100%' }} />

                    </Box>

                </div>
            </div>

        </div>
    )
}

export default Oneplus
