import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--durex-dark)] text-white text-center p-8">
      <div className="bg-white/5 border-white/10 p-12 rounded-xl shadow-lg max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--durex-accent)] mb-4">
          ¡Gracias por tu mensaje!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Hemos recibido su consulta y nos pondremos en contacto con usted a la
          brevedad posible.
        </p>
        <Link href="/">
          <span className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-[var(--durex-accent)] text-base font-medium rounded-md text-[var(--durex-dark)] bg-[var(--durex-accent)] hover:bg-transparent hover:text-[var(--durex-accent)] transition-colors duration-300">
            Volver a la página de inicio
          </span>
        </Link>
      </div>
    </div>
  );
}