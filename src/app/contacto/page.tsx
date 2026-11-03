import React from "react";
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contáctenos | IKOMI PERÚ - Ubicación y Atención al Cliente",
  description:
    "Comunícate con IKOMI Perú S.R.L. Ubicados en Av. Nicolás Ayllón 3384, Ate, Lima. Teléfono 985 068 416 y correo ventas@ikomiperu.com. Asesoría técnica inmediata.",
};

export default function ContactoPage() {
  return (
    <div className="py-12 md:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="CONTÁCTENOS"
          subtitle="Llene el formulario y un asesor se pondrá en contacto lo más pronto posible."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Map & Physical details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white w-full">
              {/* Map embed iframe */}
              <div className="w-full h-80 sm:h-96 relative">
                <iframe
                  title="Ubicación IKOMI Perú en Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8358485601146!2d-76.95384662414777!3d-12.04632004183864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c68f23829b35%3A0xe54e5657dd6946da!2sAv.%20Nicol%C3%A1s%20Ayll%C3%B3n%203384%2C%20Ate%2015012!5e0!3m2!1ses-419!2spe!4v1714000000000!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (6 cols) */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
