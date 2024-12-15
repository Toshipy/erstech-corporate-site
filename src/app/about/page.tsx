import React from 'react'
import { AboutMessage } from '@/components/component/AboutMessage/AboutMessage'
import { CompanyAbout } from '@/components/component/CompanyAbout/CompanyAbout'
import { Footer } from '@/components/component/Footer/Footer'
import { Team } from '@/components/component/Team/Team'
import { getAllMembers } from '@/lib/contentful/api'
import { Header } from '@/components/component/Header/Header'

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
