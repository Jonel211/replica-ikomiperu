"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 600);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white">
      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center animate-in fade-in zoom-in duration-300">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-emerald-900">
            ¡Mensaje enviado con éxito!
          </h3>
          <p className="text-sm text-emerald-700 mt-1 max-w-md mx-auto">
            Gracias por contactar a IKOMI Perú. Un asesor comercial especializado se comunicará con usted a la brevedad.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-md transition-colors"
          >
            Enviar otra consulta
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Apellidos y Nombres"
              className="w-full px-3 py-2 rounded-[4px] border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-all"
            />
          </div>

          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Teléfono"
              className="w-full px-3 py-2 rounded-[4px] border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-all"
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo"
              className="w-full px-3 py-2 rounded-[4px] border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-all"
            />
          </div>

          <div>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Asunto"
              className="w-full px-3 py-2 rounded-[4px] border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-all"
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensaje"
              className="w-full px-3 py-2 rounded-[4px] border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-all resize-y"
            />
          </div>

          <div className="pt-2 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-[#df3844] hover:bg-red-700 text-white font-medium text-sm rounded-[4px] transition-colors duration-200 disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactForm;