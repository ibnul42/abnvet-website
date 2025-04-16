import PageHero from '@/components/PageHero'
import React from 'react'
import GallerySection from './GallerySection'

export default function Gallery() {
  return (
    <div>
        <PageHero title="Gallery" backgroundImage="/temp/desk.png" description='This gallery highlights images and moments captured during my adventures, projects, and family explorations.' />
        <GallerySection />
    </div>
  )
}
