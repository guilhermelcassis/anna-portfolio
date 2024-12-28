import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream text-dark-gray px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <a href="https://instagram.com/annagargalak" target="_blank" rel="noopener noreferrer" 
             className="block hover:opacity-95 transition-opacity">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
              <img 
                src="/static/BIO.jpg" 
                alt="Anna Gargalak" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </a>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-left space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair">Olá!</h1>
          
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              Eu sou a Anna, designer gráfica e ilustradora digital em São Paulo.
            </p>
            
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-600">
              Especializada em design de identidade visual, artes para social media, e ilustração digital, 
              transformando ideias em arte há 4 anos.
            </p>

            <p className="text-2xl md:text-3xl font-playfair italic text-accent">
              Será um prazer trabalhar com você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 