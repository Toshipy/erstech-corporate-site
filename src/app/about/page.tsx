import { Header, Footer, AboutMessage, CompanyAbout, Team } from '@/components'
import { getAllMembers } from '@/lib/contentful/api'
import React from 'react'

const AboutPage = async () => {
  const teamMembers = await getAllMembers()
  return (
    <>
      <Header />
      <AboutMessage />
      <CompanyAbout />
      <Team teamMembers={teamMembers} />
      <Footer />
    </>
  )
}

export default AboutPage
