'use client'

import { motion } from 'motion/react'
import { Leaf, Recycle, Shield, Droplets, Award, ArrowRight } from 'lucide-react'
import { Card, CardContent } from './Card'

export function EnvironmentSection() {
  const environmentalFeatures = [
    {
      icon: Droplets,
      title: "Planta de Tratamiento",
      description: "Tratamiento especializado para efluentes líquidos generados durante el proceso productivo"
    },
    {
      icon: Shield,
      title: "Cumplimiento ACUMAR",
      description: "Diseñada según los nuevos requerimientos de control ambiental de ACUMAR"
    },
    {
      icon: Recycle,
      title: "Circuito Cerrado",
      description: "Los efluentes son reutilizados en nuestro circuito cerrado de diseño innovador"
    },
    {
      icon: Leaf,
      title: "Vuelco Cero",
      description: "Logramos actualmente un sistema de vuelco cero al medio ambiente"
    }
  ]

  return (
    <section className="py-24 w-full bg-gradient-to-br from-green-50 to-emerald-100" id='cuidado-ambiental'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-200/50 border border-green-300/50 rounded-full mb-6">
            <Leaf className="w-4 h-4 text-green-700 mr-2" />
            <span className="text-sm text-green-700 font-medium">Compromiso Ambiental</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cuidado <span className="text-green-600">Ambiental</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovación y sostenibilidad: nuestro compromiso con el medio ambiente a través de tecnología avanzada y procesos responsables.
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
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Tecnología ambiental <span className="text-green-600">avanzada</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Durex Crom cuenta con una planta de tratamiento especializada para los efluentes líquidos 
                  generados durante el proceso productivo, diseñada con la más alta tecnología ambiental.
                </p>
                <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h4 className="font-bold text-green-800 mb-2">Cumplimiento Normativo</h4>
                  <p className="text-green-700">
                    Nuestra planta está diseñada según los nuevos requerimientos de control ambiental de <b>ACUMAR</b>, 
                    garantizando el máximo nivel de protección ambiental.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Resultado Innovador</h4>
                    <p className="text-gray-700">
                      "Pasivamos y neutralizamos cualquier tipo de contaminante" logrando un enfoque 
                      moderno y completamente responsable con el medio ambiente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Environmental Process Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}

          >
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 text-white overflow-hidden">


              <div className="">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Recycle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Sistema de Circuito Cerrado</h3>
                  <p className="text-green-200">Proceso de reutilización ambiental</p>
                </div>

                {/* Process Flow */}
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white/10 rounded-lg">
                    <div className="w-8 h-8 bg-[var(--durex-accent)] rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-900 font-bold text-sm">1</span>
                    </div>
                    <span>Generación de efluentes</span>
                  </div>
                  <div className="flex items-center p-4 bg-white/10 rounded-lg">
                    <div className="w-8 h-8 bg-[var(--durex-accent)] rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-900 font-bold text-sm">2</span>
                    </div>
                    <span>Tratamiento especializado</span>
                  </div>
                  <div className="flex items-center p-4 bg-white/10 rounded-lg">
                    <div className="w-8 h-8 bg-[var(--durex-accent)] rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-900 font-bold text-sm">3</span>
                    </div>
                    <span>Pasivación y neutralización</span>
                  </div>
                  <div className="flex items-center p-4 bg-white/10 rounded-lg">
                    <div className="w-8 h-8 bg-[var(--durex-accent)] rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-900 font-bold text-sm">4</span>
                    </div>
                    <span>Reutilización en circuito</span>
                  </div>
                </div>

                            </div>
            </div>
          </motion.div>
        </div>

        {/* Environmental Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {environmentalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Environmental Commitment CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[var(--durex-primary)] to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-[var(--durex-accent)] rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-10 h-10 text-gray-900" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Responsabilidad ambiental e <span className="text-[var(--durex-accent)]">innovación</span>
            </h3>
            <p className="text-xl text-purple-200 mb-8 leading-relaxed">
              Nos enorgullece ser pioneros en sostenibilidad industrial, combinando excelencia técnica 
              con un compromiso inquebrantable hacia la protección del medio ambiente.
            </p>
            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <div className="text-2xl font-bold text-[var(--durex-accent)] mb-2">
                VUELCO CERO AL MEDIO AMBIENTE
              </div>
              <p className="text-purple-200">
                Un logro que demuestra nuestro compromiso con las futuras generaciones
              </p>
            </div>
            <a 
              href="#contacto"
              className="inline-flex items-center px-8 py-4 bg-[var(--durex-accent)] text-gray-900 rounded-lg font-bold hover:text-[var(--durex-accent)] hover:bg-transparent border-[var(--durex-accent)] border"
            >
              Conozca Más Sobre Nuestros Procesos
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}