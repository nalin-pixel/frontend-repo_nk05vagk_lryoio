import React from 'react';

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-10 md:py-16 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-slate-600 leading-relaxed">{subtitle}</p>
        )}
        <div className="mt-6 prose prose-slate max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}
