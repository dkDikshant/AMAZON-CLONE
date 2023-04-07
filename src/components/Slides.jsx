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
import SlidesBoxes from './SlidesBoxes';


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
    width: '100%'
})
const StyledCarousel = styled(Carousel)`
  .react-multiple-carousel__arrow--left,
  .react-multiple-carousel__arrow--right {
    top: calc(28% - 10px); 
  }
  
`;

const Slides = () => {
    return (
        <div>
            <StyledCarousel
                swipeable={false}
                responsive={responsive}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}

            >
                <div><SliderStyle src={one} /></div>
                <div><SliderStyle src={two} /></div>
                <div><SliderStyle src={three} /></div>
                <div><SliderStyle src={four} /></div>
                <div><SliderStyle src={five} /></div>
                <div><SliderStyle src={six} /></div>
            </StyledCarousel>
            <SlidesBoxes />
        </div>
    )
}

export default Slides
