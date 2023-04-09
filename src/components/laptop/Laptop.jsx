import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Typography, Box } from '@mui/material';
import img1 from '../../IMAGES/laptop/img1.jpg'
import img2 from '../../IMAGES/laptop/img2.jpg'
import img3 from '../../IMAGES/laptop/img3.jpg'
import img4 from '../../IMAGES/laptop/img4.jpg'
import img5 from '../../IMAGES/laptop/img5.jpg'
import img6 from '../../IMAGES/laptop/img6.jpg'
import img33 from '../../IMAGES/laptop/img3.gif'
import { NavLink } from 'react-router-dom';


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
const Laptop = () => {
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
                <div className='right-column'>
                    <Box style={{ display: 'flex' }}>
                        <NavLink to='/laptop' style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography className='text' style={{ fontSize: 30, fontWeight: 600, padding: 10 }}>Laptops</Typography>
                        </NavLink>
                        <NavLink to='/Gaming-laptop' style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography className='text' style={{ fontSize: 30, fontWeight: 600, padding: 10 }}>Gaming Laptops</Typography>
                        </NavLink>
                    </Box>
                    <img src={img1} style={{ width: '95%', padding: 20 }} />
                    <img src={img2} style={{ width: '95%', padding: 20, paddingTop: 0 }} />
                    <img src={img33} style={{ width: '95%', padding: 20, paddingTop: 0 }} />


                    <Carousel responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}>

                        <div>
                            <img src={img6} style={{ width: '100%', cursor: 'pointer' }} />
                        </div>
                        <div>
                            <img src={img3} style={{ width: '100%', cursor: 'pointer' }} />
                        </div>
                        <div>
                            <img src={img4} style={{ width: '100%', cursor: 'pointer' }} />
                        </div>
                        <div>
                            <img src={img5} style={{ width: '100%', cursor: 'pointer' }} />
                        </div>
                    </Carousel>
                </div>

            </div>

        </div>
    )
}

export default Laptop
