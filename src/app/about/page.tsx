import { AboutMessage } from '@/components/component/AboutMessage/AboutMessage'
import { CompanyAbout } from '@/components/component/CompanyAbout/CompanyAbout'
import { Footer } from '@/components/component/Footer/Footer'
import { Header } from '@/components/component/Header/Header'
import { Team } from '@/components/component/Team/Team'
import {
  getCompanyAbout,
  getMembers,
  getOurMissions
} from '@/lib/contentful/api'
import React from 'react'

const AboutPage = async () => {
  const [members, missions, companyAbout] = await Promise.all([
    getMembers(),
    getOurMissions(),
    getCompanyAbout()
  ])

  // const companyAboutFields = companyAbout.map((item) => item.fields)
  return (
    <>
      <Header />
      <AboutMessage missions={missions} />
      <CompanyAbout companyAbout={companyAbout} />
      <Team members={members} />
      <Footer />
    </>
  )
}

export default AboutPage
