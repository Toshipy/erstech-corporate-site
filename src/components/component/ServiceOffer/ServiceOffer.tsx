import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/Accordion/Accordion'
import { ScrollArea } from '@/components/ui/ScrollArea/ScrollArea'
import { Typography } from '@/components/ui/Typography/Typography'
import { HOME, SERVICE } from '@/contants/routes'
import { IServiceWeOfferFields, Section } from '@/types/serviceWeOffer'
import type { Entry } from 'contentful'
import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
  serviceOffer: Entry<IServiceWeOfferFields>[]
}

export const ServiceOffer: FC<Props> = ({ serviceOffer }) => {
  const service = serviceOffer[0]
  if (!service) return null

  const { subtitle, section } = service.fields
  if (!section) return null

  const sections = (Array.isArray(section)
    ? section
    : []) as unknown as Section[]

  return (
    <ScrollArea className="bg-background h-full w-full p-12">
      <Link href={`${HOME}`}>Home&nbsp;&nbsp;</Link>
      &gt;
      <Link className="font-bold" href={`${SERVICE}`}>
        &nbsp;&nbsp;Service
      </Link>
      <div className="px-12 pt-12">
        <Typography variant="4xl">{subtitle?.toString()}</Typography>
      </div>
      <div className="px-12 py-6">
        <Accordion type="multiple">
          {sections.map((section, index) => (
            <AccordionItem key={index} value={section.title_en}>
              <div className="flex flex-col">
                <div>
                  <Typography className="py-2 text-gray-400" variant="xs">
                    {section.title_en}
                  </Typography>
                </div>
                <AccordionTrigger>
                  <Typography variant="xl">{section.title_ja}</Typography>
                </AccordionTrigger>
              </div>
              <AccordionContent>{section.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ScrollArea>
  )
}
