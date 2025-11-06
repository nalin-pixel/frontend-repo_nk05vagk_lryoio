import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import AsciiBoard from './components/AsciiBoard'
import GDDContent from './components/GDDContent'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] via-[#0e1426] to-[#0b1220] text-slate-100">
      <Header />

      <Section
        id="overview"
        title="Game Design Document"
        subtitle="A premium, modern reimagining of Tic Tac Toe—fast, visual, and deeply strategic."
      >
        <GDDContent />
      </Section>

      <Section
        id="visuals"
        title="Meta-Grid Visualization"
        subtitle="A simplified depiction of the 3×3 meta-grid composed of nine classic boards."
      >
        <AsciiBoard />
      </Section>
    </div>
  )
}

export default App
