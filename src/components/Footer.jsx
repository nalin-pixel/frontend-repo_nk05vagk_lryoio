import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-5xl mx-auto px-4 text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Tic Tac Total. Designed for developers, designers, and playtesters.
        </p>
      </div>
    </footer>
  );
}
