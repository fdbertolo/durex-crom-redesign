import Head from "next/head";
import Footer from "@components/Footer";
import HeroSection from "@components/HeroSection";
import { AboutSection } from "@components/AboutSection";
import { EnvironmentSection } from "@components/EnvironmentSection";
import { Navigation } from "@components/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <Head>
        <title>Durex Crom</title>
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,300,0,0"
          rel="stylesheet"
        />
        <meta name="author" content="https://fernandobertolo.netlify.app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="keywords"
          content="Cromo duro, Rectificado, Cromado industrial, Rectificado Universal"
        />
        <meta
          name="description"
          content="Durex Crom es un establecimiento metalúrgico especializado en recubrimientos de cromo duro, que cuenta además con un anexo de rectificado universal."
        />
        <meta property="og:title" content="Durex Crom" />
        <meta
          property="og:description"
          content="Durex Crom es un establecimiento metalúrgico especializado en recubrimientos de cromo duro, que cuenta además con un anexo de rectificado universal."
        />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Durex Crom" />
      </Head>
      <Navigation dataId="navigation" />
      <main className="flex flex-col items-center w-full">
        <HeroSection />
        <AboutSection />
        <EnvironmentSection />
      </main>

      <Footer />
    </div>
  );
}
