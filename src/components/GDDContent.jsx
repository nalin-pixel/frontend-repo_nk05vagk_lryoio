import React from 'react';

export default function GDDContent() {
  return (
    <div>
      <h3>1) Game Overview</h3>
      <ul>
        <li><strong>Title:</strong> Tic Tac Total: The Ultimate Strategy Grid</li>
        <li><strong>Genre:</strong> Abstract Strategy, Competitive</li>
        <li><strong>Platforms:</strong> Web, iOS, Android, Desktop</li>
        <li><strong>Players:</strong> 2 (Local / vs AI)</li>
        <li><strong>Summary:</strong> A nested 3×3 grid of Tic Tac Toe boards. The cell you play dictates the next board your opponent must play on. Win small boards to claim the meta-board; three small boards in a row wins the game.</li>
      </ul>

      <h3 className="mt-8">2) Gameplay & Mechanics</h3>
      <p>
        The playfield is a 3×3 array of small Tic Tac Toe boards ("small boards"). A turn consists of placing your mark (X or O) on a cell within the active small board. The position of that cell (top-left, center, etc.) determines which small board becomes active for the next player. If the required board is already won or full, the next player may play on any available board. Small boards are won with standard 3-in-a-row rules. The meta-game is won by achieving three won small boards in a row on the large grid.
      </p>

      <h3 className="mt-8">3) Visual Representation</h3>
      <pre className="whitespace-pre overflow-auto bg-slate-50 rounded p-4 border border-slate-200"><code>{`Large 3×3 Meta-Grid (each cell is a small board)

[ b1 ] [ b2 ] [ b3 ]
[ b4 ] [ b5 ] [ b6 ]
[ b7 ] [ b8 ] [ b9 ]

Each small board (example):

  a1 | a2 | a3
  ---+----+---
  b1 | b2 | b3
  ---+----+---
  c1 | c2 | c3

Example mapping: if you play on a small board's a3 (top-right), your opponent must play on meta-board b3 (top-right board).`}</code></pre>

      <h3 className="mt-8">4) Strategy Elements</h3>
      <ul>
        <li><strong>Board control:</strong> Direct your opponent into unfavorable boards while steering your own path to claim rows on the meta-board.</li>
        <li><strong>Prediction:</strong> Anticipate replies two layers deep: your move sets their board; their best responses set yours.</li>
        <li><strong>Tempo & initiative:</strong> Forcing plays into constrained boards can create tactical forks.</li>
        <li><strong>Resource denial:</strong> Closing out a small board at the right time can free up your next placement options.</li>
      </ul>

      <h3 className="mt-8">5) Example Gameplay Walkthrough</h3>
      <ol>
        <li>Player X starts anywhere, e.g., center cell of the top-left small board → sends O to the center small board.</li>
        <li>O plays top-right in center board → sends X to the top-right small board.</li>
        <li>X plays bottom-left in top-right board → sends O to the bottom-left small board.</li>
        <li>If the directed board is already won/full, the next player may choose any open board.</li>
      </ol>

      <h3 className="mt-8">6) UI & UX Design (Digital)</h3>
      <ul>
        <li><strong>Layout:</strong> Large meta-grid centered, with clear borders around each small board.</li>
        <li><strong>Highlights:</strong> The active small board is outlined and gently pulsing; valid cells glow on hover/tap.</li>
        <li><strong>Animations:</strong> Smooth scale-in for placed marks; line sweep when a small board is won.</li>
        <li><strong>Feedback:</strong> Subtle sound and toast messages for turn changes, illegal moves, board wins, and game end.</li>
      </ul>

      <h3 className="mt-8">7) Game Modes</h3>
      <ul>
        <li><strong>Local Versus:</strong> Pass-and-play on one device.</li>
        <li><strong>AI Match:</strong> Adjustable difficulty with heuristics for board control.</li>
        <li><strong>Timed:</strong> 10–60s per move with countdown.</li>
        <li><strong>Challenges:</strong> Scenario puzzles with pre-set states and goals.</li>
      </ul>

      <h3 className="mt-8">8) Edge Cases & Clarifications</h3>
      <ul>
        <li>If sent to a won/full board, the player may choose any open board.</li>
        <li>Small board draws count as neutral cells on the meta-board.</li>
        <li>Meta-board victory requires three won small boards in a row (rows, columns, or diagonals).</li>
        <li>If all small boards resolve without a meta-three-in-a-row, the result is a draw.</li>
      </ul>

      <h3 className="mt-8">9) Design Philosophy</h3>
      <p>
        The game blends simple rules with emergent depth. Every move carries double impact—local tactics and global positioning—making it approachable for kids yet endlessly replayable for adults.
      </p>

      <h3 className="mt-8">10) Optional Add-Ons</h3>
      <ul>
        <li>Theme skins (neon, parchment, cosmic).</li>
        <li>Power-ups as optional modes (e.g., one-time wild cell, board swap).</li>
        <li>Ranked ladders, daily challenges, and analytics heatmaps.</li>
      </ul>
    </div>
  );
}
