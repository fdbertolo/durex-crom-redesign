"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Card, CardContent } from "./Card";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Label } from "./Label";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

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
      link: "https://maps.app.goo.gl/7r7QyXyr5AYXtMoM8",
    },
    {
      icon: Clock,
      title: "Horarios",
      value: "Lunes - Viernes: 08 a 12.30 y 13.30 a 17hs",
      link: null,
    },
  ];

    const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    if (!formData.message.trim())
      newErrors.message = "El mensaje es obligatorio";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setSuccess(false);
    setErrors({});

    const result = await submitContactForm(formData);

    setLoading(false);
    if (result.success) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setTimeout(() => setSuccess(false), 5000);
    } else {
      // Si hay un error desde el servidor, lo mostramos
      setErrors({ form: "Hubo un error al enviar el mensaje. Por favor, intente de nuevo." });
      console.error("Error from server action:", result.error);
    }
  };

  return (
    <section
      id="contacto"
      className="w-full py-25 bg-[var(--durex-dark)] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-6">
            <span className="text-sm text-yellow-400 font-medium">
              Contáctenos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solicite su{" "}
            <span className="text-yellow-400">Cotización</span>
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
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full rounded-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-gray-900" />
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
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm leading-relaxed"
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
            <Card className="bg-white/5 border-white/10 rounded-lg">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">
                  Formulario de Contacto
                </h3>
                <p className="text-gray-300 mb-8">
                  Complete el formulario y nos pondremos en contacto con usted a
                  la brevedad.
                </p>

                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h4 className="text-2xl font-bold text-green-500 mb-4">
                      ¡Mensaje Enviado Exitosamente!
                    </h4>
                    <p className="text-gray-300 text-lg">
                      Nos pondremos en contacto con usted a la brevedad.
                    </p>
                  </motion.div>
                ) : (
                  // Este formulario ya no necesita los atributos de netlify,
                  // solo el onSubmit que llama a nuestra nueva función.
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-white text-base font-medium">
                          Nombre Completo *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Su nombre completo"
                          className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400 h-12 rounded-md px-4"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-white text-base font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="su.email@empresa.com"
                          className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400 h-12 rounded-md px-4"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-white text-base font-medium">
                          Teléfono
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+54 11 1234 5678"
                          className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400 h-12 rounded-md px-4"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="company" className="text-white text-base font-medium">
                          Empresa
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nombre de su empresa"
                          className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400 h-12 rounded-md px-4"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-white text-base font-medium">
                        Mensaje *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Describa su proyecto..."
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400 rounded-md p-4 resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm">{errors.message}</p>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={loading}
                      className="cursor-pointer w-full bg-yellow-400 text-gray-900 hover:text-yellow-400 hover:bg-transparent border-yellow-400 border transition-all duration-300 h-14 text-lg font-bold flex items-center justify-center rounded-md disabled:opacity-50"
                    >
                      {loading ? (
                        <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                      ) : (
                        <Send className="w-6 h-6 mr-3" />
                      )}
                      {loading ? "Enviando..." : "Enviar Consulta"}
                    </button>
                    {errors.form && (
                        <p className="text-red-400 text-sm text-center">{errors.form}</p>
                    )}
                  </form>
                )}
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
            <Card className="bg-white/5 border-white/10 rounded-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">
                  ¿Por qué elegirnos?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      Más de 30 años de experiencia en el sector
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      Capacidad única para piezas hasta 4 metros
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      Compromiso con vuelco cero al medio ambiente
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">
                      Cumplimiento garantizado en tiempo y forma
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white/5 border-white/10 overflow-hidden rounded-xl shadow-lg">
              <iframe
                width="100%"
                height="325"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.4589189556214!2d-58.41496091075092!3d-34.69360319242161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccf0e104ac5f%3A0xef06a38b905ea75f!2sDurex%20Crom%20SRL!5e0!3m2!1ses-419!2sar!4v1755021650864!5m2!1ses-419!2sar"
                style={{ border: 0 }}
                allowFullScreen=""
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
