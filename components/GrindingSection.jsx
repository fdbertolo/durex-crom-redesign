"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Ruler, Gauge, Weight, Star } from "lucide-react";
import { Card, CardContent } from "./Card";

export function GrindingSection() {
  const machineSpecs = [
    {
      icon: Ruler,
      label: "Diámetro máximo",
      value: "Ø630 mm",
      description: "Capacidad para piezas de gran diámetro",
    },
    {
      icon: Ruler,
      label: "Longitud máxima",
      value: "4000 mm",
      description: "Hasta 4000mm entre puntas",
    },
    {
      icon: Weight,
      label: "Peso máximo",
      value: "2,500 Kg",
      description: "Soporte para componentes pesados",
    },
    {
      icon: Gauge,
      label: "Precisión",
      value: "±0.01 mm",
      description: "Tolerancias extremadamente precisas",
    },
  ];

  const processSteps = [
    {
      step: "Rectificado previo",
      description:
        "Prepara el material para el espesor de cromo duro útil requerido",
    },
    {
      step: "Rectificado final",
      description: "Las piezas quedan perfectamente cilíndricas y concéntricas",
    },
  ];

  return (
    <section
      id="rectificado"
      className="py-25 w-full bg-[var(--durex-dark)] text-white"
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
            <Star className="w-4 h-4 text-[var(--durex-accent)] mr-2" />
            <span className="text-sm text-[var(--durex-accent)] font-medium">
              Nuestra especialidad
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rectificado de{" "}
            <span className="text-[var(--durex-accent)]">precisión</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mecanizado por abrasión que ofrece mayor precisión dimensional y
            menores rugosidades que el mecanizado por arranque de viruta.
          </p>
        </motion.div>

        {/* Machine Showcase with Images */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[var(--durex-primary)] via-purple-800 to-[var(--durex-primary)] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(45deg, transparent 45%, #F8BE00 50%, transparent 55%)`,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12 flex flex-col items-center">
                <h3 className="bg-[var(--durex-accent)] text-[var(--durex-dark)] mb-6 text-lg px-6 py-2 font-bold rounded-full w-fit">
                  Rectificadora universal
                </h3>
                <p className="text-xl text-purple-200">
                  Contamos con una rectificadora <b>TOS HOSTIVAR BUT 63</b> 
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Machine Images */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4">
                                        <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/works/tosbut63.png"
                        alt="Rectificadora TOS HOSTIVAR BUT 63 - Detalle de precisión"
                        className="w-full object-cover h-[450px]"
                        width={600}
                        height={500}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">
                          Sistema de precisión
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dimension Indicator */}
                  <div className="bg-[var(--durex-accent)] rounded-lg p-4 shadow-lg text-center">
                    <div className="text-[var(--durex-dark)]">
                      <div className="text-2xl font-bold">4000mm</div>
                      <div className="text-sm">Longitud máxima</div>
                    </div>
                  </div>
                </motion.div>

                {/* Specifications */}
                <div className="space-y-6">
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-[var(--durex-accent)] mb-4">
                      Capacidades excepcionales
                    </h4>
                    <p className="text-purple-200 text-lg">
                      Nuestra rectificadora universal nos permite procesar
                      piezas de dimensiones extraordinarias con la máxima
                      precisión.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {machineSpecs.map((spec, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-[var(--durex-accent)] rounded-lg flex items-center justify-center">
                            <spec.icon className="w-6 h-6 text-[var(--durex-dark)]" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-purple-200">
                                {spec.label}:
                              </span>
                              <span className="text-2xl font-bold text-[var(--durex-accent)]">
                                {spec.value}
                              </span>
                            </div>
                            <p className="text-sm text-purple-300">
                              {spec.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Importance - Without Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Importancia del{" "}
            <span className="text-[var(--durex-accent)]">rectificado</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div>
                        <h4 className="text-xl font-bold text-[var(--durex-accent)] mb-3">
                          {step.step}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}