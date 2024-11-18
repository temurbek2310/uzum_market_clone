import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

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
    image: "https://images.uzum.uz/csnh79lpq3ggq63c8id0/main_page_banner.jpg",
  },
  {
    id: 2,
    image: "https://images.uzum.uz/cspjc6bvgbkpg1nlrko0/main_page_banner.jpg",
  },
  {
    id: 3,
    image: "https://images.uzum.uz/csrk7ftpq3ggq63deto0/main_page_banner.jpg",
  },
  {
    id: 4,
    image: "https://images.uzum.uz/csn1kv5pq3ggq63c5h90/main_page_banner.jpg",
  },
  {
    id: 5,
    image: "https://images.uzum.uz/csmsfrtpq3ggq63c3830/main_page_banner.jpg",
  },
  {
    id: 6,
    image: "https://images.uzum.uz/csnh82j4nkdp9akebfm0/main_page_banner.jpg",
  },
  {
    id: 7,
    image: "https://images.uzum.uz/csnh7e3vgbkpg1nl8epg/main_page_banner.jpg",
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