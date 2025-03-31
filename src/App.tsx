import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Phone, Mail, Instagram, Facebook, Twitter, Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-amber-800' : 'text-white'
            }`}>
             <a href="#">Guará Turismo</a>
            </h1>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-amber-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Início', 'Destinos', 'Pacotes', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled
                      ? 'text-stone-600 hover:text-amber-600'
                      : 'text-white hover:text-amber-200'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && ( 
            <nav className="md:hidden mt-4 pb-4 bg-white/80 hover:bg-white/80 text-white px-8 py-3 rounded-lg transition-colors text-lg font-medium backdrop-blur-sm">
              {['Início', 'Destinos', 'Pacotes', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-stone-600 hover:text-amber-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="início" className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://www.conexsus.org/website/wp-content/uploads/2021/04/shutterstock-1234729855-2048x1365.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Descubra as riquezas do sertão!
            </h2>
            <p className="text-xl text-stone-200 mb-8 leading-relaxed">
              Explore a beleza única da Caatinga em experiências inesquecíveis. 
              Conheça paisagens deslumbrantes, cultura rica e aventuras memoráveis.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#pacotes" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg inline-block transition-colors text-lg font-medium"
              >
                Ver Pacotes
              </a>
              <a 
                href="#sobre" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg inline-block transition-colors text-lg font-medium backdrop-blur-sm"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">Sobre a Caatinga</h2>
          <div className="max-w-3xl mx-auto text-stone-600 space-y-4">
            <p>
              A Caatinga é um bioma único no mundo, exclusivamente brasileiro, que ocupa cerca de 11% do território nacional.
              Rica em biodiversidade, abriga espécies únicas de fauna e flora adaptadas às condições semiáridas.
            </p>
            <p>
              Com paisagens deslumbrantes e uma cultura rica, a Caatinga oferece experiências autênticas para
              viajantes que buscam descobrir um Brasil diferente e surpreendente.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinos" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">Destinos Imperdíveis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pedra_Furada_-_Serra_da_Capivara_I.jpg/1024px-Pedra_Furada_-_Serra_da_Capivara_I.jpg" 
                alt="Serra da Capivara"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Parque Nacional Serra da Capivara</h3>
                <p className="text-stone-600">Patrimônio Mundial da UNESCO, com pinturas rupestres milenares.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://th.bing.com/th/id/OIP.zevr_I7-xWUHW1X3POVifwHaFS?rs=1&pid=ImgDetMain" 
                alt="Chapada Diamantina"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chapada Diamantina</h3>
                <p className="text-stone-600">Cachoeiras, grutas e montanhas em um cenário deslumbrante.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://th.bing.com/th/id/R.52c7ecb8c27d827f359679f4828c56c7?rik=wovTmkfu82pC%2fg&pid=ImgRaw&r=0" 
                alt="Raso da Catarina"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Raso da Catarina</h3>
                <p className="text-stone-600">Refúgio ecológico com paisagens únicas e rica fauna.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pacotes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">Pacotes de Viagem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Expedição Serra da Capivara</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-stone-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>5 dias</span>
                </div>
                <div className="flex items-center text-stone-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Piauí</span>
                </div>
              </div>
              <p className="text-2xl font-bold text-amber-600 mb-4">R$ 2.490</p>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg transition-colors">
                Reservar
              </button>
            </div>
            <div className="border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Aventura na Chapada</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-stone-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>7 dias</span>
                </div>
                <div className="flex items-center text-stone-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Bahia</span>
                </div>
              </div>
              <p className="text-2xl font-bold text-amber-600 mb-4">R$ 3.290</p>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg transition-colors">
                Reservar
              </button>
            </div>
            <div className="border border-stone-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Rota do Cangaço</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-stone-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>4 dias</span>
                </div>
                <div className="flex items-center text-stone-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Sergipe</span>
                </div>
              </div>
              <p className="text-2xl font-bold text-amber-600 mb-4">R$ 1.990</p>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg transition-colors">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">Entre em Contato</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>

            <div className="mt-12 space-y-4">
              <div className="flex items-center text-stone-600">
                <Phone className="w-5 h-5 mr-3" />
                <span>(84) 99999-9999</span>
              </div>
              <div className="flex items-center text-stone-600">
                <Mail className="w-5 h-5 mr-3" />
                <span>contato@guaraturismo.com.br</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-stone-600 hover:text-amber-600">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-stone-600 hover:text-amber-600">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-stone-600 hover:text-amber-600">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-400 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2025 Guará Turismo. Todos os direitos reservados.</p>
            <p>Desenvolvido por <a target='_blank' href="https://talessantos-mu.vercel.app/">Tales Santos</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;