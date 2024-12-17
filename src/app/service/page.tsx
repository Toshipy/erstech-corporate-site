import { Footer } from '@/components/component/Footer/Footer'
import { Header } from '@/components/component/Header/Header'
import { ServiceOffer } from '@/components/component/ServiceOffer/ServiceOffer'
import { TechnologyStacks } from '@/components/component/TechnologyStacks/TechnologyStacks'
import React from 'react'

const ServicePage = () => {
  return (
    <>
      <Header />
      <ServiceOffer />
      <TechnologyStacks />
      <Footer />
    </>
  )
}

export default ServicePage
