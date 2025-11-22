import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black shadow-lg' 
          : 'bg-gradient-to-b from-black/90 to-black/0'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Estradas International Logo" 
              className="h-16 w-auto"
            />
            <span className="text-2xl md:text-3xl font-bold text-white">Estradas International</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {['Home', 'Gallery', 'About'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="relative group py-2"
                >
                  <span className="text-white hover:text-accent transition-colors">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          <button 
            className="md:hidden text-accent hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 border-t border-accent/20 pt-4">
            {['Home', 'Gallery', 'About'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block py-2 text-white hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}