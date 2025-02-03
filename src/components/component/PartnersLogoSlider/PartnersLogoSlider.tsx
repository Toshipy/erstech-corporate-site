'use client'
import { Card, CardContent } from '@/components/ui/Card/Card'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/Carousel/Carousel'
import { Typography } from '@/components/ui/Typography/Typography'
import type { IPartnerFields } from '@/types/partner'
import type { Asset, Entry } from 'contentful'
import Autoplay from 'embla-carousel-autoplay'
import type { FC } from 'react'

type Props = {
  partners: Entry<IPartnerFields>[]
}

export const PartnersLogoSlider: FC<Props> = ({ partners }) => {
  const isAsset = (image: unknown): image is Asset => {
    return (
      image != null &&
      typeof image === 'object' &&
      'fields' in image &&
      'file' in (image as Asset).fields
    )
  }

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
          {partners &&
            partners.map((partner, _index) => (
              <CarouselItem className="basis-1/3" key={partner.sys.id}>
                <Card className="flex items-center justify-center h-[300px]">
                  <CardContent className="flex items-center justify-center p-6 h-full">
                    <img
                      alt=""
                      className="w-full h-full object-contain"
                      src={
                        isAsset(partner.fields.image) &&
                        typeof partner.fields.image?.fields.file?.url ===
                          'string'
                          ? partner.fields.image.fields.file.url
                          : ''
                      }
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
