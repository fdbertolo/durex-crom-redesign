import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import MetallicPaint, { parseLogoImage } from "@components/MetallicPaint";
import { useState, useEffect } from "react";

// Remueve la importación de 'logo'
// import logo from "../public/durexcrom.svg";

export default function Home() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Este código solo se ejecutará en el cliente
    const initialImageData = new ImageData(1, 1);
    setImageData(initialImageData);

    async function loadDefaultImage() {
      try {
        // Usa la ruta pública directa para el archivo
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
    return null; // O un indicador de carga mientras se inicializa
  }

  return (
    <div className="container">
      <Head>
        <title>Durex Crom</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header title="Durex Crom" />
        <div style={{ width: "100%", height: "50vh" }}>
          <MetallicPaint
            imageData={imageData}
            params={{
              edge: 0,
              patternBlur: 0.015,
              patternScale: 2,
              refraction: 0.015,
              speed: 0.2,
              liquid: 0.05,
            }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}