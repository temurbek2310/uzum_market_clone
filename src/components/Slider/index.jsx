import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { SplideImage1, SplideImage10, SplideImage2, SplideImage3, SplideImage4, SplideImage5, SplideImage6, SplideImage7, SplideImage8, SplideImage9 } from '../../imports/imports';

// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
import { Link } from 'react-router-dom';

const SliderElements = [
  {
    id: 1,
    image: SplideImage1,
  },
  {
    id: 2,
    image: SplideImage2,
  },
  {
    id: 3,
    image: SplideImage3,
  },
  {
    id: 4,
    image: SplideImage4,
  },
  {
    id: 5,
    image: SplideImage5,
  },
  {
    id: 6,
    image: SplideImage6,
  },
  {
    id: 7,
    image: SplideImage7,
  },
  {
    id: 8,
    image: SplideImage8,
  },
  {
    id: 9,
    image: SplideImage9,
  },
  {
    id: 10,
    image: SplideImage10,
  },
]

const Slider = () => {
  return (
    <div>
      <Splide options={{ type: 'loop', autoplay: true, interval: 2000 }} aria-label="My Favorite Images">
        {
          SliderElements.map((item) => {
            return (
              <SplideSlide>
                <Link to={`slider/${item.id}`}>
                  <img src={item.image} alt="Image 1" /></Link>
              </SplideSlide>
            )
          })
        }

      </Splide>
    </div>
  )
}

export default Slider