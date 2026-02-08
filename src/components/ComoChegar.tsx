export default function ComoChegar() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <section id="local" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16">
          Como Chegar
        </h2>
        
        <div className="space-y-8">
          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
              A <strong>20 minutos de Lisboa</strong>, a melhor forma de chegar é através de carro ou Uber. 
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
              Caso se venha de carro há um parque de estacionamento que suporta mais de 100 carros.
            </p>
            <div className="pt-4 text-center">
              <a 
                href="https://maps.app.goo.gl/4PSjz8UYH19LuaD76"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-pink-200 to-rose-300 text-gray-700 hover:from-pink-300 hover:to-rose-400 transition-all font-semibold rounded-lg shadow-md hover:shadow-lg"
              >
                Ver localização
              </a>
            </div>
          </div>
          
          {/* Google Maps */}
          <div className="w-full rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5914.583768326067!2d-9.172411400000001!3d38.6603546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1935a57b45ba47%3A0xa6093ce01720ea84!2sQuinta%20dos%20Espadeiros!5e1!3m2!1sen!2spt!4v1769858622916!5m2!1sen!2spt"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          {/* Quinta Image below Maps */}
          <div className="w-full rounded-xl overflow-hidden shadow-2xl mt-8">
            <img 
              src={`${basePath}/Quinta_dos_espadeiros.jpg`}
              alt="Quinta dos Espadeiros"
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
