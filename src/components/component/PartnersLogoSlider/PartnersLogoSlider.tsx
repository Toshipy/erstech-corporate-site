'use client'
import { Card, CardContent } from '@/components/ui/Card/Card'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/Carousel/Carousel'
import { Typography } from '@/components/ui/Typography/Typography'
import Autoplay from 'embla-carousel-autoplay'

export const PartnersLogoSlider = () => {
  const images = [
    'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_1.png',
    'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_2.png',
    'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_3.png',
    'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_4.png',
    'https://erstech-corporate-site.s3.ap-northeast-1.amazonaws.com/company/company_5.png'
  ]

  return (
    <div className="px-12 pb-12">
      <div className="p-12">
        <Typography variant="4xl">Partners</Typography>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 3000
          })
        ]}
      >
        <CarouselContent>
          {images.map((src: string, index: number) => (
            <CarouselItem className="basis-1/3" key={index}>
              <Card className="flex items-center justify-center h-[300px]">
                <CardContent className="flex items-center justify-center p-6 h-full">
                  <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={src}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
