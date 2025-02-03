import { Footer } from '@/components/component/Footer/Footer'
import { Header } from '@/components/component/Header/Header'
import { ServiceOffer } from '@/components/component/ServiceOffer/ServiceOffer'
import { TechnologyStacks } from '@/components/component/TechnologyStacks/TechnologyStacks'
import { getServiceOffer } from '@/lib/contentful/api'
import React from 'react'

const [serviceOffer] = await Promise.all([getServiceOffer()])

const ServicePage = () => {
  return (
    <>
      <Header />
      <ServiceOffer serviceOffer={serviceOffer} />
      <TechnologyStacks />
      <Footer />
    </>
  )
}

export default ServicePage
