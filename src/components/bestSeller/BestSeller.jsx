import React from 'react'
import '../bestSeller/best.css'
import HeaderClone from '../HeaderClone'
import Header2 from '../../components/Header/Header2'
import { Typography, Box } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../IMAGES/BestSeller/img1.jpg'
import img2 from '../../IMAGES/BestSeller/img2.jpg'
import img3 from '../../IMAGES/BestSeller/img3.jpg'
import img4 from '../../IMAGES/BestSeller/img4.jpg'
import img5 from '../../IMAGES/BestSeller/img5.jpg'
import StarIcon from '@mui/icons-material/Star';
import { NavLink } from 'react-router-dom'


const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
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
const BestSeller = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <Typography style={{ fontSize: 25, fontWeight: 600, paddingTop: 20, paddingLeft: 20 }}>Amazon BestSeller</Typography>
            <Typography style={{ fontSize: 15, fontWeight: 200, paddingLeft: 20, paddingBottom: 10 }}>Our most popular products based on sales. Updated frequently.</Typography>
            <div className="container">
                <div className="left-column">
                    <Typography style={{ fontWeight: 800, padding: 5 }}>Any Department</Typography>
                    <Box style={{ fontSize: 20, paddingTop: 5, paddingLeft: 20, cursor: 'pointer' }}>
                        <Typography className="u" >Amazon Launchpad</Typography>
                        <Typography className="u">Amazon Renewed</Typography>
                        <Typography className="u">Apps for Andriod</Typography>
                        <Typography className="u">Baby Products</Typography>
                        <Typography className="u">bags,wallet & Luggage</Typography>
                        <Typography className="u">Beauty</Typography>
                        <Typography className="u">Books </Typography>
                        <Typography className="u">car & moterbike</Typography>
                        <Typography className="u">Compter Accessories</Typography>
                        <Typography className="u">Electronic</Typography>
                        <Typography className="u">Apps for Andriod</Typography>
                        <Typography className="u">Baby Products</Typography>
                        <Typography className="u">bags,wallet & Luggage</Typography>
                        <Typography className="u">Beauty</Typography>
                        <Typography className="u">Books </Typography>
                        <Typography className="u">car & moterbike</Typography>
                        <Typography className="u">Compter Accessories</Typography>
                        <Typography className="u">Electronic</Typography>
                    </Box>
                </div>
                <div className="right-column">
                    <Typography style={{ padding: 20, fontSize: 30 }}>Bestseller in Video Games </Typography>
                    <Carousel responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                    >
                        <div>
                            <NavLink to='/best-seller-SonyPS5' style={{ textDecoration: 'none', color: 'black' }}>
                                <img src={img1} style={{ width: '90%', padding: 10, cursor: 'pointer' }} />
                                <Typography style={{ textAlign: 'center' }}>Sony PS5 Playstation Console</Typography>
                                <Box style={{ color: '#FFA41C', paddingLeft: 50 }}>
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </Box>
                            </NavLink>
                        </div>
                        <div>
                            <img src={img2} style={{ width: '90%', padding: 10, cursor: 'pointer' }} />
                            <Typography style={{ textAlign: 'center' }}>Rs.2000 Sony PlayStation Network</Typography>
                            <Box style={{ color: '#FFA41C', paddingLeft: 50 }}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </Box>
                        </div>
                        <div>
                            <img src={img3} style={{ width: '90%', padding: 10, cursor: 'pointer' }} />
                            <Typography style={{ textAlign: 'center' }}>Rs.1500 Sony PlayStation Network</Typography>
                            <Box style={{ color: '#FFA41C', paddingLeft: 50 }}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </Box>
                        </div>
                        <div>
                            <img src={img4} style={{ width: '90%', padding: 10, cursor: 'pointer' }} />
                            <Typography style={{ textAlign: 'center' }}>Sony PS5 Digital standalone</Typography>
                            <Box style={{ color: '#FFA41C', paddingLeft: 50 }}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </Box>
                        </div>
                        <div>
                            <img src={img5} style={{ width: '90%', padding: 10, cursor: 'pointer' }} />
                            <Typography style={{ textAlign: 'center' }}>Rs.2000 Sony PlayStation Network</Typography>
                            <Box style={{ color: '#FFA41C', paddingLeft: 50 }}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </Box>
                        </div>
                    </Carousel>

                </div>
            </div>

        </div>
    )
}

export default BestSeller
