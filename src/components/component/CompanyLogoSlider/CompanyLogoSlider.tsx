'use client'
import Image from 'next/image'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './index.module.css'
import { Typography } from '@/components/ui'

const images = [
  '/cocomil_icon.png',
  '/daiana_logo.png',
  '/classmethod_icon.png',
]

export const CompanyLogoSlider = () => {
  const slideSettings = {
    0: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  }

  return (
    <div className="p-12">
      <Typography variant="4xl">Partners</Typography>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={slideSettings}
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className={styles.swiperWrapper}
      >
        {images.map((src: string, index: number) => (
          <SwiperSlide key={index}>
            <div className="styles.imageContainer">
              <Image
                src={src}
                width={150}
                height={150}
                alt="Slider Image"
                sizes="(min-width: 1024px) 100vw, 60vw"
                className={styles.slideImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
