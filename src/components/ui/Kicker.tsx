import React from 'react';

interface KickerProps {
  children: React.ReactNode;
}

export default function Kicker({ children }: KickerProps) {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 font-sans text-sm font-bold text-primary tracking-widest uppercase">
      <span className="w-8 h-[2px] bg-primary rounded-full"></span>
      {children}
      <span className="w-8 h-[2px] bg-primary rounded-full"></span>
    </div>
  );
}
