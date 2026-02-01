import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden -mt-0">
      {/* Mobile Hero Image */}
      <Image
        src="/hero-mobile.jpeg"
        alt="Wedding Hero"
        fill
        className="object-cover object-center md:hidden"
        priority
        sizes="100vw"
        quality={100}
      />
      {/* Desktop Hero Image */}
      <Image
        src="/hero.jpeg"
        alt="Wedding Hero"
        fill
        className="object-cover object-center hidden md:block"
        priority
        sizes="100vw"
        quality={90}
      />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 pt-16">
        <p className="text-sm md:text-lg font-light mb-2 tracking-wider">Vamos Casar!</p>
        <h1 className="text-4xl md:text-7xl font-serif mb-4 text-center">Madalena & Tomás</h1>
        <p className="text-lg md:text-2xl font-light tracking-wide mb-8">10 de Outubro de 2026</p>
        <a
          href="#rsvp"
          className="px-8 py-3 bg-gradient-to-r from-rose-300 to-pink-300 text-gray-700 hover:from-rose-400 hover:to-pink-400 transition-all font-semibold rounded-lg shadow-lg hover:shadow-xl"
        >
          Eu vou estar lá
        </a>
      </div>
    </section>
  );
}
