import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Tic Tac Total: The Ultimate Strategy Grid</h1>
        <p className="mt-4 text-base md:text-lg text-indigo-100 max-w-3xl">
          A modern, strategic twist on Tic Tac Toe where nine small boards form one big battle.
          Master the meta-board, outmaneuver your opponent, and claim three boards in a row to win.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-indigo-50/90">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-sm">
            Genre: Strategy, Abstract
          </span>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-sm">
            Platforms: Web, Mobile, Desktop
          </span>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-sm">
            Players: 2 (Local / vs AI)
          </span>
        </div>
      </div>
    </header>
  );
}
