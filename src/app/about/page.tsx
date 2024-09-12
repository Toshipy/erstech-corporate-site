import {
  Header,
  Footer,
  AboutMessage,
  CompanyAbout,
  Team,
} from '@/components'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <AboutMessage />
      <CompanyAbout />
      <Team />
      <Footer />
    </>
  )
}

export default page
