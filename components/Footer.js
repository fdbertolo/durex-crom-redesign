export default function Footer() {
  return (
    <>
      <footer className="border-t border-gray-200 px-4 py-12 w-full bg-[var(--durex-dark)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16 px-8">
          <div className="flex flex-col flex-1 gap-4">
            <img
              src="/logo-h-c.svg"
              alt="Durex Crom Logo"
              className="w-64 h-auto mb-2 mt-2"
            />
            <p className="text-sm text-gray-400">
              Más de 30 años especializados en recubrimientos de cromo duro y
              rectificado de precisión para la industria más exigente.
            </p>
            <div className="rounded-lg bg-emerald-900/50 p-3">
              <p className="text-sm text-emerald-400 flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-500">
                  recycling
                </span>
                Comprometidos con el cuidado ambiental.
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <h3 className="text-lg font-semibold text-gray-200">
              Accesos rápidos
            </h3>
            <a
              href="#nosotros"
              className="text-sm text-gray-400 hover:text-gray-100 w-fit"
            >
              Nosotros
            </a>
            <a
              href="#cromo-duro"
              className="text-sm text-gray-400 hover:text-gray-100 w-fit"
            >
              Cromo Duro
            </a>
            <a
              href="#rectificado"
              className="text-sm text-gray-400 hover:text-gray-100 w-fit"
            >
              Rectificado
            </a>
            <a
              href="#aplicaciones"
              className="text-sm text-gray-400 hover:text-gray-100 w-fit"
            >
              Aplicaciones
            </a>
            <a
              href="#cuidado-ambiental"
              className="text-sm text-gray-400 hover:text-gray-100 w-fit"
            >
              Cuidado ambiental
            </a>
            <a
              href="#contacto"
              className="text-sm text-gray-400 hover:text-gray-100 w-fit"
            >
              Contacto
            </a>
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <h3 className="text-lg font-semibold text-gray-200">Contacto</h3>
            <a
              href="tel:01142626026"
              className="text-sm text-gray-400 flex items-center gap-2 hover:text-gray-100"
            >
              <span className="material-symbols-outlined text-[var(--durex-accent)]">
                call
              </span>
              011 4262 6026
            </a>
            <a
              href="mailto:durexcrom@gmail.com"
              className="text-sm text-gray-400 hover:text-gray-100 w-fit flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[var(--durex-accent)]">
                mail
              </span>
              durexcrom@gmail.com
            </a>
            <a
              href="https://maps.app.goo.gl/ia2ajbfuipUgrpG2A"
              className="text-sm text-gray-400 flex gap-2 hover:text-gray-100"
            >
              <span className="material-symbols-outlined text-[var(--durex-accent)]">
                location_on
              </span>
              Enrique Fernández 2355
              <br />
              Lanús Oeste, Buenos Aires
            </a>
            <div className="rounded-lg bg-zinc-900/50 p-3">
              <h4 className="font-bold text-xs text-[var(--durex-accent)]">
                Horarios de Atención
              </h4>
              <p className="text-gray-300 text-sm">
                Lunes - Viernes | 08:00 a 12:30 y 13:30 a 17:00hs
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 flex justify-center mt-8 border-t border-gray-700 pt-4">
          © 2025 Durex Crom. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
