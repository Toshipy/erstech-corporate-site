import { CareersInfo } from '@/components/component/CareersInfo/CareersInfo'
import { Footer } from '@/components/component/Footer/Footer'
import { Header } from '@/components/component/Header/Header'
import { getAllOpenPositions } from '@/lib/contentful/api'
import React from 'react'

const CareersPage = async () => {
  const openPositions = await getAllOpenPositions()

  return (
    <>
      <Header />
      <CareersInfo openPositions={openPositions} />
      <Footer />
    </>
  )
}

export default CareersPage
