'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  label,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {label && (
        <label className="block font-semibold text-[var(--blue-700)] mb-2">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 pr-10 rounded-xl bg-[var(--blue-50)] border border-[var(--blue-100)] text-[var(--text-main)] shadow-sm hover:shadow-md transition relative"
      >
        {value}
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--blue-500)]">
          <FaChevronDown />
        </span>
      </button>
      {open && (
        <ul className="absolute mt-2 w-full bg-white border border-[var(--blue-100)] rounded-xl shadow-xl z-10 overflow-hidden animate-fadeInUp">
          {options.map((option, i) => (
            <li
              key={i}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="px-4 py-3 text-[var(--text-main)] hover:bg-[var(--blue-100)] cursor-pointer transition"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}