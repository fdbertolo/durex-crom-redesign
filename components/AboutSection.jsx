"use client";

import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor que no se mueve para evitar el "layout shift" */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            // Eliminamos la clase 'text-center mb-16' de este div
            // ya que ahora está en el div padre
          >
            <div className="inline-flex items-center px-4 py-2 bg-[var(--durex-primary)]/10 border border-[var(--durex-primary)]/20 rounded-full mb-6">
              <span className="text-sm text-[var(--durex-primary)] font-medium">
                Sobre nosotros
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--durex-dark)] mb-6">
              Experiencia y <span className="text-[var(--durex-primary)]">excelencia</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Durex Crom es un establecimiento metalúrgico especializado en
              recubrimientos de <b> cromo duro y rectificado universal</b>, con un
              crecimiento sostenido basado en la calidad de excelencia de nuestros
              trabajos.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-[var(--durex-dark)] mb-4">
                  Trayectoria en el mercado de galvanoplastia
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Fundada a finales de 1992, hemos construido una sólida
                  reputación en el sector industrial gracias a nuestro
                  compromiso inquebrantable con la calidad y la innovación
                  tecnológica.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--durex-dark)] mb-4">
                  Nuestro compromiso
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Nuestro objetivo fundamental es satisfacer las necesidades de
                  nuestros clientes, siempre cumpliendo en tiempo y forma con
                  cada compromiso de trabajo, manteniendo rigurosas condiciones
                  de control y calidad.
                </p>
              </div>

              <div className="bg-[var(--durex-primary)]/5 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--durex-primary)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[var(--durex-primary)]">
                      target
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--durex-primary)] mb-2">
                      Calidad de excelencia
                    </h4>
                    <p className="text-[var(--durex-primary)]">
                      Cada proyecto es ejecutado con los más altos estándares de
                      calidad, utilizando tecnología de vanguardia y procesos
                      optimizados.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://placedog.net/800/700?random"
                alt="Sobre Nosotros - Durex Crom"
                className="rounded-xl shadow-[4px_4px_10px_2px_#583b8f66]"
                // Agregar las dimensiones de la imagen para reservar el espacio
                width={800}
                height={700}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}