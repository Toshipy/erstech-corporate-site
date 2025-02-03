import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/Accordion/Accordion'
import { ScrollArea } from '@/components/ui/ScrollArea/ScrollArea'
import { Typography } from '@/components/ui/Typography/Typography'
import { HOME, SERVICE } from '@/contants/routes'
import Link from 'next/link'
import React from 'react'

export const ServiceOffer = () => {
  return (
    <ScrollArea className="bg-background h-full w-full p-12">
      <Link href={`${HOME}`}>Home&nbsp;&nbsp;</Link>
      &gt;
      <Link className="font-bold" href={`${SERVICE}`}>
        &nbsp;&nbsp;Service
      </Link>
      <div className="px-12 pt-12">
        <Typography variant="4xl">Service we offer</Typography>
      </div>
      <div className="px-12 py-6">
        <Accordion type="multiple">
          <AccordionItem value="user-centered design">
            <div className="flex flex-col">
              <div>
                <Typography className="py-2 text-gray-400" variant="xs">
                  Agile Development
                </Typography>
              </div>
              <AccordionTrigger>
                <Typography variant="xl">アジャイル開発</Typography>
              </AccordionTrigger>
            </div>
            <AccordionContent>
              ユーザーやクライアントのニーズを正確に把握した上で、スピード感を持って開発を進めます。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="Domain Driven Design
"
          >
            <div className="flex flex-col">
              <div>
                <Typography className="py-2 text-gray-400" variant="xs">
                  Cloud Integration Support
                </Typography>
              </div>
              <AccordionTrigger>
                <Typography variant="xl">クラウド導入支援</Typography>
              </AccordionTrigger>
            </div>
            <AccordionContent>
              ビジネスのワークフロー、プロセス、具体的な要件を理解した上で、クラウドソリューションでシームレスな統合を支援します。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="Cloud Native
"
          >
            <div className="flex flex-col">
              <div>
                <Typography className="py-2 text-gray-400" variant="xs">
                  System Operation Support
                </Typography>
              </div>
              <AccordionTrigger>
                <Typography variant="xl">システム運用支援</Typography>
              </AccordionTrigger>
            </div>
            <AccordionContent>
              マイクロサービスアーキテクチャ、アジャイル開発手法、DevOpsの導入をサポートし、組織が変化に迅速に対応できるようにします。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ScrollArea>
  )
}
