"use client";

import { motion } from "motion/react";

export function AboutSection() {
  //   const achievements = [
  //     {
  //       icon: Calendar,
  //       number: "1992",
  //       title: "Año de Fundación",
  //       description: "Más de 30 años de experiencia en el mercado"
  //     },
  //     {
  //       icon: Award,
  //       number: "100%",
  //       title: "Calidad de Excelencia",
  //       description: "Compromiso con la máxima calidad en cada trabajo"
  //     },
  //     {
  //       icon: Target,
  //       number: "0",
  //       title: "Vuelco de Efluentes",
  //       description: "Circuito cerrado de reutilización ambiental"
  //     },
  //     {
  //       icon: Users,
  //       number: "∞",
  //       title: "Compromiso Cliente",
  //       description: "Satisfacción garantizada en tiempo y forma"
  //     }
  //   ]

  return (
    <section id="nosotros" className="py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
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
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=""
          >
            <div className="">
                <img
                    src="https://placedog.net/800/700?random"
                    alt="Sobre Nosotros - Durex Crom"
                    className="rounded-xl shadow-[4px_4px_10px_2px_#583b8f66]"
                />
            </div>
          </motion.div>
        </div>

        {/* Achievement Cards */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[var(--durex-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-[var(--durex-primary)]" />
                  </div>
                  <div className="text-3xl font-bold text-[var(--durex-primary)] mb-2">
                    {achievement.number}
                  </div>
                  <h4 className="font-bold text-[var(--durex-dark)] mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
