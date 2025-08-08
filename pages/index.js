import Head from "next/head";
import Footer from "@components/Footer";
import HeroSection from "@components/HeroSection";
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
      </Head>
      <Navigation dataId="navigation" />
      <main className="flex flex-col items-center w-full">
        <HeroSection />
      </main>

      <Footer />
    </div>
  );
}
