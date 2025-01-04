import React from 'react'
import { CareersInfo } from '@/components/component/CareersInfo/CareersInfo'
import { Footer } from '@/components/component/Footer/Footer'
import { getAllOpenPositions } from '@/lib/contentful/api'
import { Header } from '@/components/component/Header/Header'

export const CareersPage = async () => {
  const openPositions = await getAllOpenPositions()

  return (
    <>
      <Header />
      <CareersInfo openPositions={openPositions} />
      <Footer />
    </>
  )
}
