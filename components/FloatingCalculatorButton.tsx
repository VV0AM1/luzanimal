import { FaCalculator } from 'react-icons/fa';
import Link from 'next/link';

export default function FloatingCalculatorButton() {
  return (
    <Link
      href="/calculadora"
      className="fixed bottom-6 left-6 z-50 bg-[var(--blue-700)] hover:bg-[var(--blue-500)] text-white p-4 rounded-full shadow-lg transition-colors"
      aria-label="Ir a la Calculadora"
    >
      <FaCalculator className="w-6 h-6" />
    </Link>
  );
}