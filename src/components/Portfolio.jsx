import React from 'react';

const Portfolio = () => {
  const clients = [
    {
      name: "Dra. Cylmara Gargalak",
      instagram: "@dracylmara",
      type: "Feed Planning",
      image: "/static/CLIENTS (1).png"
    },
    {
      name: "Dra. Renata Amin Pediatra",
      instagram: "@renata.amin",
      type: "Social Media Design",
      image: "/static/CLIENTS (2).png"
    },
    {
      name: "Dra. Ana Célia Oliveira Nutróloga",
      instagram: "@dra.anaaoliveira_",
      type: "Social Media Design",
      image: "/static/CLIENTS (3).png"
    },
    {
      name: "Ursula Davidoff",
      instagram: "@ursuladavidoff",
      type: "Social Media Design",
      image: "/static/CLIENTS (4).png"
    },
    {
      name: "Movimento Se Enxerga",
      instagram: "@se.enxerga",
      type: "Social Media Design",
      image: "/static/CLIENTS (5).png"
    },
    {
      name: "Os Gilsons",
      instagram: "@gilsonsoficial",
      type: "Digital Illustration",
      image: "/static/CLIENTS (10).png"
    },
    {
      name: "Gabriela Prado Arquitetura",
      instagram: "@gabrielaprado.arq",
      type: "Brand Design",
      image: "/static/CLIENTS (13).png"
    },
    {
      name: "Altera Arquitetura",
      instagram: "@altera.arq",
      type: "Brand Design",
      image: "/static/CLIENTS (15).png"
    },
    {
      name: "Dra. Polyanna Nascimento",
      instagram: "@dra.polyanna",
      type: "Brand Design",
      image: "/static/CLIENTS (17).png"
    }
  ];

  return (
    <section className="py-20 bg-cream" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-product mb-12 text-center">Portfolio</h2>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {clients.map((client, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 relative">
                  <a 
                    href={`https://instagram.com/${client.instagram.replace('@', '')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:opacity-95 transition-opacity"
                  >
                    <div className="relative pb-[75%] md:pb-[56.25%]">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="absolute inset-0 w-full h-full object-contain p-4"
                      />
                    </div>
                  </a>
                </div>
                <div className="md:w-1/3 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-product mb-4">{client.name}</h3>
                  <p className="text-gray-600 text-lg mb-4">{client.type}</p>
                  {client.instagram && (
                    <a
                      href={`https://instagram.com/${client.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-dark-gray transition-colors text-lg"
                    >
                      {client.instagram}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 