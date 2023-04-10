import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import '../laptop/laptop.css'
import { Box, Typography } from '@mui/material'
import img1 from '../../IMAGES/products/laptop/img1.webp'
import img2 from '../../IMAGES/products/laptop/img2.webp'
import img3 from '../../IMAGES/products/laptop/img3.webp'
import img4 from '../../IMAGES/products/laptop/img4.webp'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { NavLink } from 'react-router-dom'

const LaptopProducts = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <div className='container'>
                <div className='left-column'>
                    <Box style={{ padding: 10 }}>

                        <Typography style={{ fontWeight: 700 }}>Category</Typography>
                        <Typography style={{ fontWeight: 200, padding: 10, fontSize: 12 }}>Computer And Accessories</Typography>
                    </Box>
                    <Typography style={{ fontWeight: 700, padding: 4 }}>CPU Manufactures</Typography>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>AMD </span>
                    </Box>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>Apple </span>
                    </Box>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>ARM </span>
                    </Box>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>Intel </span>
                    </Box>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>NVIDIA </span>
                    </Box>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>Qualcomm </span>
                    </Box>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>VIA </span>
                    </Box>


                    <Typography style={{ fontWeight: 700, padding: 4 }}>Processor Count</Typography>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>1 </span>
                    </Box>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>2 </span>
                    </Box>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>4 </span>
                    </Box>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>6 </span>
                    </Box>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>8 </span>
                    </Box>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>10 </span>
                    </Box>
                    <Box style={{ padding: 5 }}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '5px' }}>14 </span>
                    </Box>
                </div>
                <div className='right-column' style={{ padding: 10 }}>
                    <NavLink to='/lapotp-products-acer' style={{ textDecoration: 'none', color: 'black' }}>
                        <Box style={{ width: '98%', background: 'white', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', height: 230, padding: 10, display: 'flex', marginBottom: 20 }}>
                            <img src={img1} style={{ width: '30%', cursor: 'pointer' }} />
                            <Box style={{ padding: 20, cursor: 'pointer' }}>
                                <Typography style={{ fontSize: '18px', fontWeight: 400, paddingBottom: 10 }}>Acer Aspire Vero Green Thin and Light Lapotop Intel Core i5 11th Gen (Windows 11/Home/MS Office/8 GB/512 GB/SSD/FingerPrint Reader/Backlit KB)</Typography>
                                <Typography style={{ paddingBottom: 5 }}>4.1
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarHalfIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                </Typography>
                                <Typography style={{ paddingBottom: 10, fontSize: '28px', fontWeight: 400 }}>&#x20b9;49,490 <span style={{ fontSize: '14px' }}>(21% off)</span></Typography>
                                <Typography>FREE Delivery by Amazon</Typography>
                            </Box>
                        </Box>
                    </NavLink>

                    <NavLink to='/lapotp-products-hp15s-AMD' style={{ textDecoration: 'none', color: 'black' }}>

                        <Box style={{ width: '98%', background: 'white', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', height: 230, padding: 10, display: 'flex', marginBottom: 20 }}>
                            <img src={img2} style={{ width: '60%', cursor: 'pointer' }} />
                            <Box style={{ padding: 20, cursor: 'pointer' }}>
                                <Typography style={{ fontSize: '18px', fontWeight: 400, paddingBottom: 10 }}>Hp 15s,AMD Ryzen 3 5300U, 15.6 inch(39.6cm) FHD Anti-Glare Laptop(8GB RAM/512GB/SSD/AMD Radeon Graphics/Win 11/MSO/Backlit Keyboard/Dual Speakers)</Typography>
                                <Typography style={{ paddingBottom: 10 }}>4.1
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarHalfIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                </Typography>
                                <Typography style={{ paddingBottom: 10, fontSize: '28px', fontWeight: 400 }}>&#x20b9;39,990 <span style={{ fontSize: '14px' }}>(21% off)</span></Typography>
                                <Typography>FREE Delivery by Amazon</Typography>
                            </Box>
                        </Box>
                    </NavLink>

                    <NavLink to='/lapotp-products-hp15s-intel' style={{ textDecoration: 'none', color: 'black' }}>
                        <Box style={{ width: '98%', background: 'white', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', height: 230, padding: 10, display: 'flex', marginBottom: 20 }}>
                            <img src={img3} style={{ width: '31%', cursor: 'pointer' }} />
                            <Box style={{ padding: 20, cursor: 'pointer' }}>
                                <Typography style={{ fontSize: '18px', fontWeight: 400, paddingBottom: 10 }}>Hp 15s,11th Gen Intel Core i3 8GB RAM/1TB HDD+256 GB SSD 15.6-inches/39.6 cm FHD Laptop/Window 11/Intel UHD Graphics/Dual Speaker/Alexa/MSO/FastCharge </Typography>
                                <Typography style={{ paddingBottom: 10 }}>4.1
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarHalfIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                </Typography>
                                <Typography style={{ paddingBottom: 10, fontSize: '28px', fontWeight: 400 }}>&#x20b9;38,490 <span style={{ fontSize: '14px' }}>(25% off)</span></Typography>
                                <Typography>FREE Delivery by Amazon</Typography>
                            </Box>
                        </Box>
                    </NavLink>

                    <NavLink to='/lapotp-products-hp15s-intel-Athlon Silver' style={{ textDecoration: 'none', color: 'black' }}>

                        <Box style={{ width: '98%', background: 'white', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', height: 230, padding: 10, display: 'flex', marginBottom: 20 }}>
                            <img src={img4} style={{ width: '31%', cursor: 'pointer' }} />
                            <Box style={{ padding: 20, cursor: 'pointer' }}>
                                <Typography style={{ fontSize: '18px', fontWeight: 400, paddingBottom: 10 }}>HP 255 G8 Laptop with AMD Athlon Silver 3050U APU/ 8GB Ram/ 256GB SSD/DOS/AMD Radeon Vega 8 Mobile Graphics/39.6 cm HD (1366 x 768), SVA, Anti-Glare WLED/Black/1 Year Onsite Warranty </Typography>
                                <Typography style={{ paddingBottom: 10 }}>4.1
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                    <StarHalfIcon style={{ fontSize: 20, paddingTop: 5, color: '#FFA41C' }} />
                                </Typography>
                                <Typography style={{ paddingBottom: 10, fontSize: '28px', fontWeight: 400 }}>&#x20b9;25,999 <span style={{ fontSize: '14px' }}>(74% off)</span></Typography>
                                <Typography>FREE Delivery by Amazon</Typography>
                            </Box>
                        </Box>
                    </NavLink>

                </div>

            </div>
        </div>
    )
}

export default LaptopProducts
