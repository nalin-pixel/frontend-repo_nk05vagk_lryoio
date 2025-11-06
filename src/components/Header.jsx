import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Header() {
  return (
    <header className="relative w-full bg-[#0b1220] text-white">
      {/* Spline 3D cover */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft vignette + gradient sheen over 3D (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1220]/30 via-transparent to-[#0b1220]/80" />
      </div>

      {/* Foreground content */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pb-10 md:pb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-3 py-1.5 text-xs md:text-sm backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Premium Modern Reimagining
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Tic Tac Total: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-fuchsia-300">The Ultimate Strategy Grid</span>
          </h1>

          <p className="mt-3 max-w-2xl text-slate-200/90 text-sm md:text-base">
            A sleek, strategic evolution of Tic Tac Toe. Chain reactions determine the battlefield as nine
            small boards form one meta-grid. Read the flow, predict the fork, and outmaneuver your rival.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs md:text-sm">
            <Badge>Genre: Strategy / Puzzle</Badge>
            <Badge>Mode: 2-Player (Local / Online)</Badge>
            <Badge>Vibe: Sleek • Intelligent • Timeless</Badge>
            <Badge>Palette: Deep Navy • Neon Cyan • Electric Magenta</Badge>
          </div>

          {/* Glowing markers for flavor */}
          <div className="mt-8 flex items-center gap-4">
            <GlowMark color="cyan">X</GlowMark>
            <span className="text-slate-400">vs</span>
            <GlowMark color="fuchsia">O</GlowMark>
          </div>
        </div>
      </div>
    </header>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-slate-100/90 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      {children}
    </span>
  );
}

function GlowMark({ children, color = 'cyan' }) {
  const map = {
    cyan: 'text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.6)]',
    fuchsia: 'text-fuchsia-300 shadow-[0_0_20px_rgba(232,121,249,0.6)]',
  };
  return (
    <span className={`font-black text-3xl md:text-4xl tracking-wider drop-shadow ${map[color]}`}>
      {children}
    </span>
  );
}
