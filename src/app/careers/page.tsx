import { Header, Footer, CareersInfo } from '@/components'
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
