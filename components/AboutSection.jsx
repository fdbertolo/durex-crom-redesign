"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-[var(--durex-primary)]/10 border border-[var(--durex-primary)]/20 rounded-full mb-6">
              <span className="text-sm text-[var(--durex-primary)] font-medium">
                Sobre nosotros
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--durex-dark)] mb-6">
              Experiencia y{" "}
              <span className="text-[var(--durex-primary)]">expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Durex Crom es un establecimiento industrial integral especializado en
              recubrimientos de <b>cromo duro y rectificado universal</b>.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--durex-dark)] mb-4">
                  Trayectoria en el mercado de galvanoplastia
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  La empresa fue fundada a finales del año 1992 y siempre se
                  caracterizo por la calidad de excelencia de sus trabajos, base
                  inalterable en el crecimiento sostenido de la misma. Este
                  crecimiento es apuntalado por nuestra trayectoria en el
                  mercado de galvanoplastia.
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

              {/* <div className="bg-[var(--durex-primary)]/5 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--durex-primary)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="text-[var(--durex-primary)]" />
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
              </div> */}
            </motion.div>
          </div>

          <div className="">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/works/fabrica.png"
                alt="Sobre Nosotros - Durex Crom"
                className=""
                width={800}
                height={700}
                priority={false}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
