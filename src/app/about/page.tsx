import {
  Header,
  Footer,
  AboutMessage,
  CompanyAbout,
  CeoMessage,
} from '@/components'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <AboutMessage />
      <CompanyAbout />
      <CeoMessage />
      <Footer />
    </>
  )
}

export default page
