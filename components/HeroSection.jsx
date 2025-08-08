import MetallicPaint, { parseLogoImage } from "@components/MetallicPaint";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const initialImageData = new ImageData(1, 1);
    setImageData(initialImageData);

    async function loadDefaultImage() {
      try {
        const response = await fetch("/durexcrom.svg");
        const blob = await response.blob();
        const file = new File([blob], "default.svg", { type: "image/svg+xml" });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? initialImageData);
      } catch (err) {
        console.error("Error loading default image:", err);
      }
    }

    loadDefaultImage();
  }, []);

  if (!imageData) {
    return null;
  }

  return (
    <div className="flex w-full h-screen bg-[#060010]">
      <div className="flex w-full max-w-7xl mx-auto flex-col md:flex-row justify-center items-center px-4 sm:px-6 lg:px-8">
        <div style={{ width: "100%", height: "60vh" }} className=" md:mt-0 mt-100">
          {imageData && (
            <MetallicPaint
              imageData={imageData}
              params={{
                edge: 0.1,
                patternBlur: 0.015,
                patternScale: 2,
                refraction: 0.015,
                speed: 0.2,
                liquid: 0.05,
              }}
            />
          )}
        </div>

        <div className="w-full">
          <div className="text-white">
            <div className="max-w-7xl mx-auto">
              {/* Experience Badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-900/30 text-[var(--durex-accent)] px-4 py-2 rounded-full text-sm mb-8">
                <span className="material-symbols-outlined text-[var(--durex-accent)]">
                  shield
                </span>
                Más de 30 años de experiencia
              </div>
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Expertos en{" "}
                <span className="text-[var(--durex-accent)]">Cromo duro</span> y{" "}
                <span className="text-[var(--durex-accent)]">Rectificado</span>
              </h1>
              {/* Feature Box */}
              <div className="bg-zinc-900/50 border-l-4 border-[var(--durex-accent)] p-6 my-8 max-w-2xl">
                <h2 className="text-xl font-semibold mb-3 text-[var(--durex-accent)]">
                  Capacidad excepcional a gran escala
                </h2>
                <p className="text-gray-300">
                  Procesamos piezas de hasta <b> Ø630 mm x 4000 mm </b>con
                  tecnología de vanguardia
                </p>
              </div>
              {/* Description */}
              <p className="text-lg text-gray-300 max-w-2xl mb-8">
                Especialistas en recubrimientos de cromo duro y rectificado de
                precisión para la industria más exigente.
              </p>
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contacto"
                  className="w-full bg-[var(--durex-accent)] cursor-pointer hover:text-[var(--durex-accent)] hover:bg-transparent border-[var(--durex-accent)] border text-gray-900 px-6 py-3 rounded-md font-semibold transition-colors gap-2 flex items-center justify-center text-center no-underline"
                >
                  Cotice su Proyecto
                  <span className="material-symbols-outlined">
                  east
                </span>
                </a>
                <a
                  href="#aplicaciones"
                  className="w-full cursor-pointer border border-gray-600 hover:text-[var(--durex-accent)] hover:bg-transparent hover:border-[var(--durex-accent)] text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Descubra Nuestras Capacidades
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
