import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import AsciiBoard from './components/AsciiBoard'
import GDDContent from './components/GDDContent'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800">
      <Header />

      <Section
        id="overview"
        title="Game Design Document"
        subtitle="A complete GDD for a strategic and innovative nested Tic Tac Toe experience."
      >
        <GDDContent />
      </Section>

      <Section
        id="visuals"
        title="Visual Representation"
        subtitle="A simple depiction of the 3×3 meta-grid composed of nine small boards."
      >
        <AsciiBoard />
      </Section>

      <Footer />
    </div>
  )
}

export default App
