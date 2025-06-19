'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.mensaje) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    setError('');
    // TODO: Send to backend or use external service
    alert('Mensaje enviado correctamente.');
  };

  return (
    <section id="contacto" className="bg-white py-16 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            rows={4}
            value={form.mensaje}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          ></textarea>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded font-semibold hover:bg-pink-700 transition"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}