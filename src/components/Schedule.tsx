export default function Schedule() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <section className="py-24 md:py-32 px-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern or Image (optional) */}
      <div className="absolute inset-0 opacity-5 bg-center bg-cover" style={{ backgroundImage: `url(${basePath}/timeline_background.jpeg)` }}></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs md:text-sm text-gray-300 uppercase tracking-widest mb-4">
            Uma Antevisão do
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-2">
            Programa do Nosso Dia Especial
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl md:text-6xl font-light text-white mb-4">
              16:00
            </div>
            <div className="text-sm md:text-base uppercase tracking-wider text-gray-300">
              Cerimónia
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl md:text-6xl font-light text-white mb-4">
              17:00
            </div>
            <div className="text-sm md:text-base uppercase tracking-wider text-gray-300">
              Cocktail
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl md:text-6xl font-light text-white mb-4">
              18:30
            </div>
            <div className="text-sm md:text-base uppercase tracking-wider text-gray-300">
              Jantar
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl md:text-6xl font-light text-white mb-4">
              22:00
            </div>
            <div className="text-sm md:text-base uppercase tracking-wider text-gray-300">
              Party
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
