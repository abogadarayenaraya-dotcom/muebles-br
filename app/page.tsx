'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { KitchenCarousel } from '@/components/kitchen-carousel'
import { Catalog } from '@/components/catalog'
import { Services } from '@/components/services'
import { Design3D } from '@/components/design-3d'
import { Workshop } from '@/components/workshop'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/floating-buttons'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <KitchenCarousel />
      <Catalog />
      <Services />
      <Design3D />
      <Workshop />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
