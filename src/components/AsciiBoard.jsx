import React from 'react';

const Cell = ({ children }) => (
  <span className="inline-flex items-center justify-center w-6 h-6 font-mono text-sm">{children}</span>
);

function SmallBoard({ label }) {
  return (
    <div className="inline-grid grid-cols-3 gap-0.5 bg-slate-300 p-0.5 rounded">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="bg-white">
          <Cell>·</Cell>
        </div>
      ))}
    </div>
  );
}

export default function AsciiBoard() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-sm text-slate-600">Meta-board made of 9 small boards</div>
      <div className="grid grid-cols-3 gap-2 bg-slate-400 p-2 rounded">
        {Array.from({ length: 9 }).map((_, idx) => (
          <SmallBoard key={idx} />
        ))}
      </div>
    </div>
  );
}
