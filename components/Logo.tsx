import React from 'react';

export default function Logo({ className = "w-6 h-6 text-[#F0F0EB]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Central Solid Core */}
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      
      {/* Interrupted Concentric Arcs */}
      <path
        d="M 16 8 A 8 8 0 1 1 8 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 16 3 A 13 13 0 1 0 29 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
