'use client'
import Image from 'next/image'

import { Typography } from '@/components/ui'
import Slider from 'react-slick'

export const CompanySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  const images = [
    '/company/company_1.png',
    '/company/company_2.png',
    '/company/company_3.png',
    '/company/company_4.png',
    '/company/company_5.png',
    '/company/company_6.png',
    '/company/company_7.png',
    '/company/company_8.png',
    '/company/company_9.png',
  ]

  return (
    <div className="px-12 pb-12">
      <div className="p-12">
        <Typography variant="4xl">Partners</Typography>
      </div>
      <Slider {...settings}>
        {images.map((src: string, index: number) => (
          <div key={index} className="card-cover p-4">
            <div className="card">
              <Image alt="" src={src} fill className="img" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
