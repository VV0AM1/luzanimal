'use client';

import { FaPaw } from 'react-icons/fa';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--blue-50)]">
      <FaPaw className="w-16 h-16 text-[var(--blue-700)] animate-bounce" />
    </div>
  );
}