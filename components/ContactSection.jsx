import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "./Card";

export default function ContactSection() {
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
            Solicite su <span className="text-yellow-400">Cotización</span>
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
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
                  <h5 className="font-bold text-white mb-3 text-lg">{info.title}</h5>
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

        <Card className="bg-white/5 border-white/10 rounded-lg mb-8">
          <CardContent className="p-6">
            <h4 className="text-xl font-bold text-yellow-400 mb-4">
              ¿Por qué elegirnos?
            </h4>
            <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Garantizamos acabados y propiedades superiores
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">
                  Servimos a los sectores más exigentes del mercado
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-5 gap-8">
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
                  Contacto
                </h3>
                <p className="text-gray-300 mb-8">
                  Puede contactarnos a través de los siguientes medios:
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:durexcrom@gmail.com"
                    className="inline-flex items-center px-8 py-4 bg-[var(--durex-accent)] text-gray-900 rounded-lg font-bold hover:text-[var(--durex-accent)] hover:bg-transparent border-[var(--durex-accent)] border"
                  >
                    <Mail className="w-8 h-8  mr-4" />
                    Enviar un correo electrónico
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=5491149488179"
                    className="inline-flex items-center px-8 py-4 bg-[var(--durex-accent)] text-gray-900 rounded-lg font-bold hover:text-[var(--durex-accent)] hover:bg-transparent border-[var(--durex-accent)] border"
                  >
                    <MessageCircle className="w-8 h-8 mr-4" />
                    Enviar un mensaje de whatsapp
                  </a>
                  <a
                    href="tel:1142626026"
                    className="inline-flex items-center px-8 py-4 bg-[var(--durex-accent)] text-gray-900 rounded-lg font-bold hover:text-[var(--durex-accent)] hover:bg-transparent border-[var(--durex-accent)] border"
                  >
                    <Phone className="w-8 h-8  mr-4" />
                    Hacer una llamada telefónica
                  </a>
                </div>
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
            <div className="bg-white/5 border-white/10 overflow-hidden rounded-xl shadow-lg">
              <iframe
                title="Ubicación de Durex Crom"
                width="100%"
                height="390"
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
