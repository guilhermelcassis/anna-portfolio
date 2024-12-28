import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-cream" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-product mb-8">Entre em Contato</h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light">
            Vamos transformar suas ideias em arte juntos?
          </p>
          
          <div className="space-y-6">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5511973287722"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto bg-[#25D366] hover:bg-[#20BD5C] text-white px-8 py-4 rounded-xl text-lg font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              Conversar no WhatsApp
            </a>

            {/* Email and Instagram Container */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
              {/* Email */}
              <a
                href="mailto:annagargalak@gmail.com"
                className="inline-flex items-center text-accent hover:text-dark-gray transition-colors text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z"/>
                </svg>
                annagargalak@gmail.com
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/annagargalak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent hover:text-dark-gray transition-colors text-lg"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.2c3.2,0,3.6,0,4.9,0.1c1.2,0.1,1.8,0.2,2.2,0.4c0.6,0.2,1,0.5,1.4,0.9c0.4,0.4,0.7,0.8,0.9,1.4 c0.2,0.4,0.4,1.1,0.4,2.2c0.1,1.3,0.1,1.6,0.1,4.8s0,3.6-0.1,4.9c-0.1,1.2-0.2,1.8-0.4,2.2c-0.2,0.6-0.5,1-0.9,1.4 c-0.4,0.4-0.8,0.7-1.4,0.9c-0.4,0.2-1.1,0.4-2.2,0.4c-1.3,0.1-1.6,0.1-4.9,0.1c-3.2,0-3.6,0-4.9-0.1c-1.2-0.1-1.8-0.2-2.2-0.4 c-0.6-0.2-1-0.5-1.4-0.9c-0.4-0.4-0.7-0.8-0.9-1.4c-0.2-0.4-0.4-1.1-0.4-2.2c-0.1-1.3-0.1-1.6-0.1-4.8s0-3.6,0.1-4.9 c0.1-1.2,0.2-1.8,0.4-2.2c0.2-0.6,0.5-1,0.9-1.4c0.4-0.4,0.8-0.7,1.4-0.9c0.4-0.2,1.1-0.4,2.2-0.4C8.4,2.2,8.7,2.2,12,2.2 M12,0 C8.7,0,8.3,0,7.1,0.1c-1.3,0.1-2.2,0.3-3,0.6C3.4,1,2.7,1.3,2,2C1.3,2.7,1,3.4,0.7,4.1c-0.3,0.8-0.5,1.7-0.6,3C0,8.3,0,8.7,0,12 s0,3.7,0.1,4.9c0.1,1.3,0.3,2.2,0.6,3C1,20.6,1.3,21.3,2,22c0.7,0.7,1.4,1,2.1,1.3c0.8,0.3,1.7,0.5,3,0.6C8.3,24,8.7,24,12,24 s3.7,0,4.9-0.1c1.3-0.1,2.2-0.3,3-0.6c0.7-0.3,1.4-0.6,2.1-1.3c0.7-0.7,1-1.4,1.3-2.1c0.3-0.8,0.5-1.7,0.6-3C24,15.7,24,15.3,24,12 s0-3.7-0.1-4.9c-0.1-1.3-0.3-2.2-0.6-3C23,3.4,22.7,2.7,22,2c-0.7-0.7-1.4-1-2.1-1.3c-0.8-0.3-1.7-0.5-3-0.6C15.7,0,15.3,0,12,0z M12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8z M12,16c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4 S14.2,16,12,16z M18.4,5.6c0,0.8-0.6,1.4-1.4,1.4c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4C17.8,4.2,18.4,4.8,18.4,5.6z"/>
                </svg>
                @annagargalak
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 