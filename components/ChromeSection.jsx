"use client";

import Image from "next/image"; // Importa el componente Image
import { motion } from "framer-motion"; // Cambiado a framer-motion para mayor compatibilidad y porque el usuario lo tiene en su HeroSection
import { Cog, HardHat, Gauge, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./Card";

export function ChromeSection() {
  const benefits = [
    {
      icon: HardHat,
      title: "Bajo coeficiente de rozamiento",
      description: "Reducción significativa de la fricción entre superficies en contacto",
      color: "text-[var(--durex-accent)]",
    },
    {
      icon: Cog,
      title: "Resistencia al desgaste y corrosión",
      description: "Protección superior contra el deterioro por uso y agentes externos",
      color: "text-[var(--durex-primary)]",
    },
    {
      icon: Gauge,
      title: "Dureza excepcional",
      description: "Superficie endurecida que mantiene sus propiedades a lo largo del tiempo",
      color: "text-gray-600",
    },
  ];

  const finishes = [
    {
      name: "Brillante",
      description: "Acabado espejo con máximo brillo y reflexión",
      gradient: "from-gray-300 via-white to-gray-200",
      shadow: "shadow-lg",
      specs: "Ra < 0.1 μm",
    },
    {
      name: "Semi-mate",
      description: "Equilibrio perfecto entre brillo y textura suave",
      gradient: "from-gray-400 via-gray-300 to-gray-400",
      shadow: "shadow-md",
      specs: "Ra 0.1-0.4 μm",
    },
    {
      name: "Mate",
      description: "Lisa sin reflejos, para aplicaciones específicas",
      gradient: "from-gray-500 via-gray-600 to-gray-500",
      shadow: "shadow-sm",
      specs: "Ra > 0.4 μm",
    },
  ];

  return (
    <section
      id="cromo-duro"
      className="py-25 w-full bg-gradient-to-br from-[var(--durex-light)] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[var(--durex-primary)]/20 border border-[var(--durex-primary)]/30 rounded-full mb-6">
            <span className="text-sm text-[var(--durex-primary)] font-medium">
              Nuestro proceso
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--durex-dark)] mb-6">
            Recubrimiento de{" "}
            <span className="text-[var(--durex-primary)]">cromo duro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proceso electrolítico que recubre un metal con una película de
            cromo duro, proporcionando características superiores de resistencia
            y durabilidad.
          </p>
        </motion.div>

        {/* Process Overview with Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-16 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[var(--durex-dark)] mb-6">
                ¿Qué es el cromo duro?
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                El cromado duro es un proceso electrolítico especializado que
                deposita una capa de cromo metálico sobre la superficie de las
                piezas, transformando sus propiedades mecánicas y químicas.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Esta técnica proporciona una dureza superficial excepcional
                (800-1000 HV), resistencia al desgaste y propiedades
                anti-corrosivas que extienden significativamente la vida útil de
                los componentes.
              </p>
              <div className="bg-[var(--durex-primary)]/5 border-l-4 border-[var(--durex-primary)] p-6 rounded-r-lg">
                <h4 className="font-bold text-[var(--durex-primary)] mb-2">
                  Tecnología avanzada
                </h4>
                <p className="text-gray-700">
                  Utilizamos equipos de última generación y técnicas probadas
                  para garantizar un recubrimiento uniforme y de máxima calidad
                  en cada pieza.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Industrial Image */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/chrome.png"
                  alt="Proceso de cromado industrial en máquina especializada"
                  className="w-full object-cover h-64"
                  width={600} // Valor estimado para mantener la proporción de h-64
                  height={256} // Altura de 256px para h-64 (256/16 = 16rem = 64px de Tailwind)
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">
                    Proceso industrial de cromado
                  </p>
                </div>
              </div>

              {/* Process Steps */}
              <div className="bg-gradient-to-br from-[var(--durex-primary)] to-purple-700 rounded-xl p-6 text-white">
                <h4 className="text-lg font-bold mb-4 text-center">
                  Proceso electrolítico
                </h4>

                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-white/10 rounded-lg">
                    <div className="w-8 h-8 bg-[var(--durex-accent)] rounded-full flex items-center justify-center mr-3">
                      <span className="text-[var(--durex-dark)] font-bold text-sm">
                        1
                      </span>
                    </div>
                    <span className="text-sm">Preparación de superficie</span>
                  </div>
                  <div className="flex items-center p-3 bg-white/10 rounded-lg">
                    <div className="w-8 h-8 bg-[var(--durex-accent)] rounded-full flex items-center justify-center mr-3">
                      <span className="text-[var(--durex-dark)] font-bold text-sm">
                        2
                      </span>
                    </div>
                    <span className="text-sm">Inmersión electrolítica</span>
                  </div>
                  <div className="flex items-center p-3 bg-white/10 rounded-lg">
                    <div className="w-8 h-8 bg-[var(--durex-accent)] rounded-full flex items-center justify-center mr-3">
                      <span className="text-[var(--durex-dark)] font-bold text-sm">
                        3
                      </span>
                    </div>
                    <span className="text-sm">Depósito de cromo duro</span>
                  </div>
                  <div className="flex items-center p-3 bg-white/10 rounded-lg">
                    <div className="w-8 h-8 bg-[var(--durex-accent)] rounded-full flex items-center justify-center mr-3">
                      <span className="text-[var(--durex-dark)] font-bold text-sm">
                        4
                      </span>
                    </div>
                    <span className="text-sm">Control de calidad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-[var(--durex-dark)] mb-12">
            Beneficios del{" "}
            <span className="text-[var(--durex-primary)]">cromo duro</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[var(--durex-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h4 className="text-xl font-bold text-[var(--durex-dark)] mb-4">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Finishes */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-[var(--durex-dark)] mb-12">
            Acabados{" "}
            <span className="text-[var(--durex-primary)]">disponibles</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {finishes.map((finish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-0">
                    <div
                      className={`h-48 bg-gradient-to-br ${finish.gradient} ${finish.shadow} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 text-white">
                          <h4 className="font-bold text-lg">{finish.name}</h4>
                          <p className="text-xs text-gray-200 mt-1">
                            {finish.specs}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {finish.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[var(--durex-primary)]">
                          Rugosidad
                        </span>
                        <span className="text-sm text-gray-500">
                          {finish.specs}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-[var(--durex-primary)] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesita recubrimiento de cromo duro?
            </h3>
            <p className="text-lg text-purple-200 mb-6">
              Contáctenos para conocer cómo podemos mejorar las propiedades de
              sus componentes metálicos
            </p>
            <button
              size="lg"
              className="rounded-lg"
              asChild
            >
              <a
                href="#contacto"
                className="w-full bg-[var(--durex-accent)] cursor-pointer hover:text-[var(--durex-accent)] hover:bg-transparent border-[var(--durex-accent)] border text-gray-900 px-6 py-3 rounded-md font-semibold transition-colors gap-2 flex items-center justify-center text-center no-underline"
              >
                Solicitar cotización
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}