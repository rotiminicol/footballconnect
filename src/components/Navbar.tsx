import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleGetStarted = () => {
    navigate('/register');
  };

  const handleWatchDemo = () => {
    // Open demo video modal
    setShowDemoModal(true);
  };

  const [showDemoModal, setShowDemoModal] = useState(false);

  const navItems = user ? [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Players', href: '/players' },
    { name: 'Clubs', href: '/clubs' },
    { name: 'Messages', href: '/messages' },
    { name: 'Profile', href: '/profile' },
  ] : [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Logo colorClass={isScrolled ? 'text-blue-600' : 'text-white'} />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={(e) => {
                      if (item.href.startsWith('/')) {
                        e.preventDefault();
                        navigate(item.href);
                      }
                    }}
                    className={`font-medium hover:text-blue-500 transition-colors ${
                      isScrolled ? 'text-slate-700' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            {!user ? (
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={isScrolled ? 'border-blue-600 text-blue-600' : 'border-white text-white'}
                  onClick={handleLogin}
                >
                  Log in
                </Button>
                <Button variant="primary" size="sm" onClick={handleGetStarted}>
                  Get Started
                </Button>
              </div>
            ) : (
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            )}
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('/')) {
                      e.preventDefault();
                      navigate(item.href);
                    }
                    setIsOpen(false);
                  }}
                  className="block py-2 px-3 text-slate-700 font-medium hover:bg-slate-100 rounded-md"
                >
                  {item.name}
                </a>
              ))}
              {!user ? (
                <div className="pt-2 space-y-2">
                  <Button variant="outline" className="w-full justify-center" onClick={handleLogin}>
                    Log in
                  </Button>
                  <Button variant="primary" className="w-full justify-center" onClick={handleGetStarted}>
                    Get Started
                  </Button>
                </div>
              ) : (
                <Button variant="outline" className="w-full justify-center" onClick={logout}>
                  Logout
                </Button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Platform Demo</h3>
              <button onClick={() => setShowDemoModal(false)} className="text-slate-500 hover:text-slate-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video bg-slate-100 rounded-lg mb-4">
              {/* Replace with your actual demo video */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Platform Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <Button variant="primary" onClick={() => setShowDemoModal(false)} className="w-full">
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;