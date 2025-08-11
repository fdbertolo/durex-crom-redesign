"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "./Card";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Label } from "./Label";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "011 4262 6026",
      link: "tel:+541142626026",
    },
    {
      icon: Mail,
      title: "Email",
      value: "durexcrom@gmail.com",
      link: "mailto:durexcrom@gmail.com",
    },
    {
      icon: MapPin,
      title: "Dirección",
      value: "Enrique Fernández 2355, Lanús Oeste, Buenos Aires",
      link: "https://maps.google.com/?q=Enrique+Fernández+2355,+Lanús+Oeste,+Buenos+Aires",
    },
    {
      icon: Clock,
      title: "Horarios",
      value: "Lunes - Viernes: 08 a 12.30 y 13.30 a 17hs",
      link: null,
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contacto"
      className="w-full py-20 bg-[var(--durex-dark)] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[var(--durex-accent)]/20 border border-[var(--durex-accent)]/30 rounded-full mb-6">
            <span className="text-sm text-[var(--durex-accent)] font-medium">
              Contáctenos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solicite su{" "}
            <span className="text-[var(--durex-accent)]">Cotización</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos listos para atender sus proyectos de gran formato. <br />
            Contáctenos para una consulta personalizada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[var(--durex-accent)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-[var(--durex-dark)]" />
                  </div>
                  <h4 className="font-bold text-white mb-3">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-gray-300 hover:text-[var(--durex-accent)] transition-colors duration-200 text-sm leading-relaxed"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {info.value}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-[var(--durex-accent)] mb-2">
                  Formulario de Contacto
                </h3>
                <p className="text-gray-300 mb-8">
                  Complete el formulario y nos pondremos en contacto con usted a
                  la brevedad.
                </p>

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  action="/success"
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="name"
                        className="text-white text-base font-medium"
                      >
                        Nombre Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[var(--durex-accent)] h-12"
                        placeholder="Su nombre completo"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="email"
                        className="text-white text-base font-medium"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[var(--durex-accent)] h-12"
                        placeholder="su.email@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="phone"
                        className="text-white text-base font-medium"
                      >
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[var(--durex-accent)] h-12"
                        placeholder="+54 11 1234 5678"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="company"
                        className="text-white text-base font-medium"
                      >
                        Empresa
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[var(--durex-accent)] h-12"
                        placeholder="Nombre de su empresa"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="message"
                      className="text-white text-base font-medium"
                    >
                      Mensaje *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[var(--durex-accent)] resize-none"
                      placeholder="Describa su proyecto: dimensiones de las piezas, tipo de material, cantidad, fechas de entrega, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="cursor-pointer w-full bg-[var(--durex-accent)] text-[var(--durex-dark)] hover:text-[var(--durex-accent)] hover:bg-transparent border-[var(--durex-accent)] border transition-all duration-300 h-14 text-lg font-bold flex items-center justify-center rounded-md"
                  >
                    <Send className="w-6 h-6 mr-3" />
                    Enviar Consulta
                  </button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-[var(--durex-accent)] mb-4">
                  ¿Por qué elegirnos?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--durex-accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      Más de 30 años de experiencia en el sector
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--durex-accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      Capacidad única para piezas hasta 4 metros
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--durex-accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      Compromiso con vuelco cero al medio ambiente
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[var(--durex-accent)] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      Cumplimiento garantizado en tiempo y forma
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white/5 border-white/10 overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.4587413680433!2d-58.41266492425582!3d-34.69360767292223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccf0e84ca899%3A0x462aa84e9d20a507!2sEnrique%20Fern%C3%A1ndez%202355%2C%20B1824FCZ%20Lan%C3%BAs%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1754928222721!5m2!1ses-419!2sar"
                width="100%"
                height="325"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}