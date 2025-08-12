'use client'

import { motion } from 'motion/react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Card, CardContent } from './Card'

export function ApplicationsSection() {
  const applications = [
    {
      title: "Rotor Petrolero Cromo Duro",
      category: "Industria Petrolera",
      description: "Componentes críticos para equipos de extracción y refinación",
      image: "https://placedog.net/400/300?random=10",
      features: ["Alta resistencia", "Larga durabilidad", "Resistencia química"]
    },
    {
      title: "Rodillo Agrario (cracker) Cromo Duro",
      category: "Industria Agrícola", 
      description: "Elementos para maquinaria agrícola de alta exigencia",
      image: "https://placedog.net/400/300?random=11",
      features: ["Resistencia abrasiva", "Bajo mantenimiento", "Eficiencia operativa"]
    },
    {
      title: "Hélice Extrusora Cromo Duro",
      category: "Industria Plástica",
      description: "Componentes para procesos de extrusión y moldeo",
      image: "https://placedog.net/400/300?random=12",
      features: ["Superficie lisa", "Resistencia térmica", "Precisión dimensional"]
    },
    {
      title: "Rodillo Calandra Deflector Rectificado",
      category: "Industria Textil",
      description: "Elementos de precisión para equipos de calandrado",
      image: "https://placedog.net/400/300?random=13",
      features: ["Acabado perfecto", "Tolerancias mínimas", "Uniformidad garantizada"]
    },
    {
      title: "Cigüeñal Estampadora Rectificado",
      category: "Industria Automotriz",
      description: "Componentes críticos para maquinaria de estampado",
      image: "https://placedog.net/400/300?random=14",
      features: ["Precisión extrema", "Resistencia fatiga", "Acabado superior"]
    },
    {
      title: "Eje de Transmisión Industrial",
      category: "Industria Metalúrgica",
      description: "Componentes de transmisión para equipos pesados",
      image: "https://placedog.net/400/300?random=15",
      features: ["Resistencia extrema", "Acabado perfecto", "Durabilidad excepcional"]
    }
  ]

  const processTypes = [
    {
      title: "Procesos de Fabricación",
      description: "Aplicación de cromo duro en componentes nuevos durante su fabricación",
      image: "https://placedog.net/300/200?random=20",
      color: "bg-[var(--durex-dark)]"
    },
    {
      title: "Procesos de Recuperación", 
      description: "Restauración y mejora de componentes existentes mediante cromo duro",
      image: "https://placedog.net/300/200?random=21",
      color: "bg-[var(--durex-primary)]"
    }
  ]

  const galleryImages = [
    { src: "https://placedog.net/500/400?random=30", title: "Rotor Petrolero Terminado", category: "Petrolera" },
    { src: "https://placedog.net/500/400?random=31", title: "Rodillo Agrícola Cromado", category: "Agrícola" },
    { src: "https://placedog.net/500/400?random=32", title: "Hélice Extrusora", category: "Plástica" },
    { src: "https://placedog.net/500/400?random=33", title: "Cigüeñal Rectificado", category: "Automotriz" },
    { src: "https://placedog.net/500/400?random=34", title: "Rodillo Textil", category: "Textil" },
    { src: "https://placedog.net/500/400?random=35", title: "Eje Industrial", category: "Metalúrgica" },
    { src: "https://placedog.net/500/400?random=36", title: "Componente Personalizado", category: "Industrial" },
    { src: "https://placedog.net/500/400?random=37", title: "Proceso de Rectificado", category: "Proceso" }
  ]

  return (
    <section id="aplicaciones" className="py-25 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[var(--durex-primary)]/10 border border-[var(--durex-primary)]/20 rounded-full mb-6">
            <span className="text-sm text-[var(--durex-primary)] font-medium">Versatilidad Industrial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--durex-dark)] mb-6">
            Aplicaciones y <span className="text-[var(--durex-primary)]">Trabajos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            El cromo duro se utiliza en múltiples industrias, tanto en procesos de fabricación como de recuperación de componentes críticos.
          </p>
        </motion.div>

        {/* Enhanced Process Types - Mobile Friendly */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {processTypes.map((process, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 md:h-56">
                  <img 
                    src={process.image}
                    alt={process.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${process.color} text-white`}>
                      {process.title.split(' ')[2]} {/* Fabricación o Recuperación */}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {process.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Applications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-[var(--durex-dark)] mb-12">
            Ejemplos de <span className="text-[var(--durex-primary)]">Nuestros Trabajos</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-[var(--durex-primary)]/5">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <img 
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span  
                        className="absolute top-4 left-4 bg-[var(--durex-primary)]/50 text-white p-1 rounded-full text-sm px-2"
                      >
                        {app.category}
                      </span>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-[var(--durex-dark)] mb-3 group-hover:text-[var(--durex-primary)] transition-colors duration-300">
                        {app.title}
                      </h4>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {app.description}
                      </p>
                      
                      <div className="space-y-2">
                        {app.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-[var(--durex-dark)] mb-4">
            Galería de <span className="text-[var(--durex-primary)]">Trabajos Realizados</span>
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Una muestra de los proyectos y componentes que hemos procesado con éxito para nuestros clientes industriales.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-medium">{image.category}</p>
                  <p className="text-sm font-bold">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries Served with Images */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-[var(--durex-primary)] to-purple-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Industrias que <span className="text-[var(--durex-accent)]">Servimos</span>
            </h3>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Nuestros servicios están diseñados para satisfacer las necesidades más exigentes de múltiples sectores industriales.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Petrolera", image: "https://placedog.net/300/200?random=40" },
              { name: "Automotriz", image: "https://placedog.net/300/200?random=41" },
              { name: "Agrícola", image: "https://placedog.net/300/200?random=42" },
              { name: "Textil", image: "https://placedog.net/300/200?random=43" },
              { name: "Plástica", image: "https://placedog.net/300/200?random=44" },
              { name: "Metalúrgica", image: "https://placedog.net/300/200?random=45" },
              { name: "Alimentaria", image: "https://placedog.net/300/200?random=46" },
              { name: "Papelera", image: "https://placedog.net/300/200?random=47" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="relative group"
              >
                <div className="relative h-32 md:h-40 rounded-lg overflow-hidden">
                  <img 
                    src={industry.image}
                    alt={`Industria ${industry.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-[var(--durex-primary)]/20 group-hover:bg-[var(--durex-primary)]/40 transition-colors duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <div className="font-bold text-sm md:text-lg text-white">
                      {industry.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className='flex-col items-center justify-center'
            >
              <p className="text-lg text-purple-200 mb-6">
                ¿Su industria tiene necesidades específicas? Contáctenos para una solución personalizada.
              </p>
              <a 
                href="#contacto"
                className="mx-auto w-fit bg-[var(--durex-accent)] cursor-pointer hover:text-[var(--durex-accent)] hover:bg-transparent border-[var(--durex-accent)] border text-gray-900 px-6 py-3 rounded-md font-semibold transition-colors gap-2 flex items-center justify-center text-center no-underline"
              >
                Consultar Aplicación Específica
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}