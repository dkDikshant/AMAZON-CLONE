import React from 'react'
import Header2 from '../Header/Header2'
import HeaderClone from '../HeaderClone'
import { Box, Typography } from '@mui/material'
import img1 from '../../IMAGES/Electronic/img1.gif'
import img2 from '../../IMAGES/Electronic/img2.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img3 from '../../IMAGES/Electronic/img3.jpg'
import img4 from '../../IMAGES/Electronic/img4.jpg'
import img5 from '../../IMAGES/Electronic/img5.jpg'
import img6 from '../../IMAGES/Electronic/img6.jpg'
import img7 from '../../IMAGES/Electronic/img7.jpg'
import img8 from '../../IMAGES/Electronic/img8.jpg'
import img9 from '../../IMAGES/Electronic/img9.jpg'
import img10 from '../../IMAGES/Electronic/img10.jpg'
import img11 from '../../IMAGES/Electronic/img11.jpg'
import b1 from '../../IMAGES/Electronic/b1.png'
import b2 from '../../IMAGES/Electronic/b2.png'
import b3 from '../../IMAGES/Electronic/b3.png'
import b4 from '../../IMAGES/Electronic/b4.png'
import b5 from '../../IMAGES/Electronic/b5.png'
import b6 from '../../IMAGES/Electronic/b6.png'
import b7 from '../../IMAGES/Electronic/b7.png'
import b8 from '../../IMAGES/Electronic/b8.png'
import b9 from '../../IMAGES/Electronic/b9.png'
import b10 from '../../IMAGES/Electronic/b10.png'



const responsive = {
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

const responsive1 = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7
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
const Electronic = () => {
    return (
        <div>
            <HeaderClone />
            <Header2 />
            <Box style={{ padding: 10 }}>
                <img src={img1} style={{ width: '100%', cursor: 'pointer' }} />
                <img src={img2} style={{ width: '100%', cursor: 'pointer' }} />
                <Carousel responsive={responsive}>
                    <div>
                        <img src={img3} style={{ width: '100%', cursor: 'pointer' }} />
                        <Typography style={{ textAlign: 'center', fontWeight: 400, fontSize: '16px' }}>Headphones</Typography>

                    </div>
                    <div>
                        <img src={img4} style={{ width: '100%', cursor: 'pointer' }} />
                        <Typography style={{ textAlign: 'center', fontWeight: 400, fontSize: '16px' }}>Fitness trackers & smartwatches</Typography>

                    </div>
                    <div>
                        <img src={img5} style={{ width: '100%', cursor: 'pointer' }} />
                        <Typography style={{ textAlign: 'center', fontWeight: 400, fontSize: '16px' }}>Computer accessories</Typography>

                    </div>
                    <div>
                        <img src={img6} style={{ width: '100%', cursor: 'pointer' }} />
                        <Typography style={{ textAlign: 'center', fontWeight: 400, fontSize: '16px' }}>Pen drives</Typography>

                    </div>
                    <div>
                        <img src={img7} style={{ width: '100%', cursor: 'pointer' }} />
                        <Typography style={{ textAlign: 'center', fontWeight: 400, fontSize: '16px' }}>Memory Cards</Typography>

                    </div>
                    <div>
                        <img src={img8} style={{ width: '100%', cursor: 'pointer' }} />
                        <Typography style={{ textAlign: 'center', fontWeight: 400, fontSize: '16px' }}>Office products</Typography>

                    </div>
                    <div>
                        <img src={img9} style={{ width: '100%', cursor: 'pointer' }} />
                        <Typography style={{ textAlign: 'center', fontWeight: 400, fontSize: '16px' }}>Routing and networking devices</Typography>

                    </div>
                    <div>
                        <img src={img10} style={{ width: '100%', cursor: 'pointer' }} />
                        <Typography style={{ textAlign: 'center', fontWeight: 400, fontSize: '16px' }}>Musical instruments</Typography>

                    </div>
                    <div>
                        <img src={img11} style={{ width: '100%', cursor: 'pointer' }} />
                        <Typography style={{ textAlign: 'center', fontWeight: 400, fontSize: '16px' }}>Camera accessories</Typography>
                    </div>
                </Carousel>


                <Box style={{ marginTop: 50, marginBottom: 50 }}>
                    <Typography style={{ padding: 20, fontSize: 20, fontWeight: 800, }}>Shop from  your favourite brands</Typography>
                    <Carousel responsive={responsive1}
                        infinite={true}>
                        <div>
                            <img src={b1} style={{ width: 130 }} />
                        </div>
                        <div>
                            <img src={b2} style={{ width: 130 }} />
                        </div>
                        <div>
                            <img src={b3} style={{ width: 130 }} />
                        </div>
                        <div>
                            <img src={b4} style={{ width: 130 }} />
                        </div>
                        <div>
                            <img src={b5} style={{ width: 130 }} />
                        </div>
                        <div>
                            <img src={b6} style={{ width: 130 }} />
                        </div>
                        <div>
                            <img src={b7} style={{ width: 130 }} />
                        </div>
                        <div>
                            <img src={b8} style={{ width: 130 }} />
                        </div>
                        <div>
                            <img src={b9} style={{ width: 130 }} />
                        </div>
                        <div>
                            <img src={b10} style={{ width: 130 }} />
                        </div>

                    </Carousel>



                </Box>
            </Box>
        </div>
    )
}

export default Electronic
