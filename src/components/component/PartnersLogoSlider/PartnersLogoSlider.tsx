'use client'
import { Typography } from '@/components/ui/Typography/Typography'
// import Image from 'next/image'

export const PartnersLogoSlider = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 4000,
  //   autoplaySpeed: 4000,
  //   cssEase: 'linear',
  //   pauseOnHover: false,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1540,
  //       settings: {
  //         slidesToShow: 5
  //       }
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2
  //       }
  //     }
  //   ]
  // }

  // const images = [
  //   'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_1.png',
  //   'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_2.png',
  //   'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_3.png',
  //   'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_4.png',
  //   'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_5.png',
  //   'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_6.png',
  //   'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_7.png',
  //   'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_8.png',
  //   'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_9.png'
  // ]

  return (
    <div className="px-12 pb-12">
      <div className="p-12">
        <Typography variant="4xl">Partners</Typography>
      </div>
      {/* <Slider {...settings}>
        {images.map((src: string, index: number) => (
          <div className="card-cover p-4" key={index}>
            <div className="card">
              <Image alt="" className="img" fill src={src} />
            </div>
          </div>
        ))}
      </Slider> */}
    </div>
  )
}
