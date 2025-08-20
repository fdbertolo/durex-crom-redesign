import Head from "next/head";
import dynamic from "next/dynamic";
import Footer from "@components/Footer";
import HeroSection from "@components/HeroSection";
import { Navigation } from "@components/Navigation";

const AboutSection = dynamic(
  () => import("@components/AboutSection").then((mod) => mod.AboutSection),
  { ssr: false }
);
const ChromeSection = dynamic(
  () => import("@components/ChromeSection").then((mod) => mod.ChromeSection),
  { ssr: false }
);
const GrindingSection = dynamic(
  () => import("@components/GrindingSection").then((mod) => mod.GrindingSection),
  { ssr: false }
);
const ApplicationsSection = dynamic(
  () =>
    import("@components/ApplicationsSection").then(
      (mod) => mod.ApplicationsSection
    ),
  { ssr: false }
);
const EnvironmentSection = dynamic(
  () =>
    import("@components/EnvironmentSection").then(
      (mod) => mod.EnvironmentSection
    ),
  { ssr: false }
);
const ContactSection = dynamic(
  () => import("@components/ContactSection"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <Head>
        <title>Durex Crom</title>
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"
          rel="preconnect"
          display="swap"
        />
        <meta name="author" content="https://fernandobertolo.netlify.app" />
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
      <main className="flex flex-col items-center w-full overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ChromeSection />
        <GrindingSection />
        <ApplicationsSection />
        <EnvironmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}