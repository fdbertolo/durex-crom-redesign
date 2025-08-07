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
    <div className="flex flex-col justify-center items-center w-full h-screen bg-[#060010]">
      <div style={{ width: "100%", height: "50vh" }}>
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
      <img src="/durex.svg" alt="Durex Crom" className="w-80" />
    </div>
  );
}
