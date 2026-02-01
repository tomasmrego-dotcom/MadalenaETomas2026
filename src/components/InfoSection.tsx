import Link from "next/link";
import Image from "next/image";

export default function InfoSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 lg:gap-60">
          {/* Present/Registry */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-full relative rounded-lg overflow-hidden shadow-xl h-96 md:h-[500px] lg:h-[550px]">
                <Image
                  src="/registry.jpg"
                  alt="Presente"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-4 shadow-lg">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wide whitespace-nowrap">
                  PRESENTE
                </h2>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-gray-700 mb-6 max-w-md leading-relaxed">
              Embora a vossa presença no nosso casamento seja o maior presente, se desejarem partilhar a vossa alegria através de uma prenda, por favor visitem o nosso registo.
            </p>
            
            <Link
              href="/presente"
              className="px-10 py-3.5 bg-black text-white hover:bg-gray-800 transition-all text-sm font-bold uppercase tracking-widest"
            >
              Presente
            </Link>
          </div>

          {/* Dress Code */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-full relative rounded-lg overflow-hidden shadow-xl h-96 md:h-[500px] lg:h-[550px]">
                <img
                  src="/dress_code.jpeg"
                  alt="Dress Code"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-4 shadow-lg">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wide whitespace-nowrap">
                  DRESS CODE
                </h2>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-gray-700 mb-6 max-w-md leading-relaxed">
              Para esta grande celebração de amor, pedimos gentilmente que abracem a elegância da ocasião usando traje formal.
            </p>
            
            <Link
              href="/faq"
              className="px-10 py-3.5 bg-black text-white hover:bg-gray-800 transition-all text-sm font-bold uppercase tracking-widest"
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
