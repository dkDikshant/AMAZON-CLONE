import React from 'react';
import { products } from '../Server/Api';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, styled, Typography } from '@mui/material';



const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        partialVisibilityGutter: 40,
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
const ImageStyle = styled('img')({
    width: '80%'
})

const BoxStyle = styled(Box)({
    width: '100%',
    background: 'red'
})
const ProductsData = () => {
    const [product, SetProduct] = useState([])
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let rep = await products();
        SetProduct(rep.data);
        console.log(product);
    }

    return (
        <div style={{ background: '#fff', marginTop: 200, width: '100%', height: 400, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px', padding: 10, marginBottom: 50 }}>
            <Typography variant='h4' style={{ fontWeight: 700, marginBottom: 10 }}>Today's Deals</Typography>
            <Carousel responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                arrows={true}
                autoPlay={true}
                autoPlaySpeed={2000}>
                {
                    product.map((i, index) => (
                        <Box style={{ width: 200, height: 350, boxShadow: ' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', }}>
                            <ImageStyle key={index} src={i.image_link} style={{ padding: 20, cursor: 'pointer' }} />
                            <p style={{ padding: 5 }}>{i.name}</p>
                        </Box>
                    ))
                }

            </Carousel>





        </div>
    )
}

export default ProductsData
