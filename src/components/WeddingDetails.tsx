export default function WeddingDetails() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-blue-50/40 to-blue-100/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-6">
          Detalhes do Casamento
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-200 to-blue-400 mx-auto mb-16 rounded-full"></div>
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-0 opacity-0">
          Detalhes do Casamento
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Ceremony */}
          <div className="text-center">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Cerimónia</h3>
            <p className="text-gray-600 mb-2">16:00</p>
            <p className="text-gray-600">Terraço do Jardim</p>
            <p className="text-gray-500 text-sm mt-2">Quinta do Vale</p>
          </div>

          {/* Reception */}
          <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Receção</h3>
            <p className="text-gray-600 mb-2">18:00</p>
            <p className="text-gray-600">Salão de Festas</p>
            <p className="text-gray-500 text-sm mt-2">Jantar & Dança</p>
          </div>

          {/* Dress Code */}
          <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Traje</h3>
            <p className="text-gray-600 mb-2">Formal</p>
            <p className="text-gray-600">Traje de Gala</p>
            <p className="text-gray-500 text-sm mt-2">Traje de cocktail bem-vindo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
