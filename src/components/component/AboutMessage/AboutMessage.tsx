import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/Accordion/Accordion'
import { Typography } from '@/components/ui/Typography/Typography'
import { ABOUT, HOME } from '@/contants/routes'
import type { IOurMissionFields, Section } from '@/types/ourMission'
import type { IWhoWeAreFields } from '@/types/whoWeAre'
import type { Entry } from 'contentful'
import Link from 'next/link'
import type { FC } from 'react'

type Props = {
  whoWeAres: Entry<IWhoWeAreFields>[]
  missions: Entry<IOurMissionFields>[]
}

export const AboutMessage: FC<Props> = ({ whoWeAres, missions }) => {
  const mission = missions[0]
  const whoWeAre = whoWeAres[0]
  if (!mission || !whoWeAre) {
    return null
  }

  const { title, subtitle, section } = mission.fields

  const sections = (Array.isArray(section)
    ? section
    : []) as unknown as Section[]

  return (
    <div className="p-12">
      <div>
        <Link href={`${HOME}`}>Home&nbsp;&nbsp;</Link>
        &gt;
        <Link className="font-bold" href={`${ABOUT}`}>
          &nbsp;&nbsp;Who we are
        </Link>
      </div>
      <div className="relative w-full p-12">
        <Typography className="font-serif text-gray-400" variant="6xl">
          {whoWeAre.fields.title?.toString()}
        </Typography>
      </div>
      <div className="px-12">
        <Typography variant="3xl">
          {whoWeAre.fields.subtitle?.toString()}
        </Typography>
      </div>
      <div className="p-12">
        <Typography variant="lg">
          {whoWeAre.fields.description?.toString()}
        </Typography>
      </div>
      <div className="relative w-full p-12">
        <Typography className="font-serif text-gray-400" variant="6xl">
          {typeof title === 'string' ? title : ''}
        </Typography>
      </div>
      <div className="px-12">
        <Typography variant="3xl">
          {typeof subtitle === 'string' ? subtitle : ''}
        </Typography>
      </div>
      <div className="px-12 py-6">
        <Accordion type="multiple">
          {sections.map((section, _index) => (
            <AccordionItem
              key={section.title_en}
              value={section.title_en.toLowerCase()}
            >
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
    </div>
  )
}
