import React from 'react'
import AboutMeSection from './AboutMeSection'
import RecentProjectsSection from './RecentProjectsSection'

export default function About() {
  return (
    <div>
        <AboutMeSection backgroundImageUrl='/temp/bg-about.png' />
        <RecentProjectsSection />
    </div>
  )
}
