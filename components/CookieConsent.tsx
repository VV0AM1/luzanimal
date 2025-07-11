'use client';

import { useEffect, useState } from 'react';

const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);
  const [choiceMade, setChoiceMade] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('cookie-consent');
    if (!saved) {
      setShow(true);
    } else {
      setChoiceMade(true);
    }
  }, []);

  const handleChoice = (accept: boolean) => {
    localStorage.setItem('cookie-consent', accept ? 'accepted' : 'rejected');
    setShow(false);
    setChoiceMade(true);
  };

  if (!show || choiceMade) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white text-[#1f2937] p-4 shadow-lg border-t border-gray-300 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Utilizamos cookies para mejorar tu experiencia. Puedes aceptar o rechazar según tu preferencia.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => handleChoice(false)}
            className="px-4 py-2 text-sm rounded-full border border-gray-400 hover:bg-gray-100 transition"
          >
            Rechazar
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="px-4 py-2 text-sm rounded-full bg-[#1e3a8a] text-white hover:bg-[#173b8d] transition"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;