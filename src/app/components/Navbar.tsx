import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Asosiy', id: 'hero' },
    { label: 'Muammo', id: 'muammo' },
    { label: 'Yechim', id: 'yechim' },
    { label: 'Nega Biz', id: 'nega-biz' },
    { label: 'Texnologiya', id: 'texnologiya' },
    { label: 'Reja', id: 'reja' },
    { label: 'Jamoa', id: 'jamoa' },
    { label: 'Aloqa', id: 'aloqa' }
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16"
      style={{
        background: 'rgba(5, 10, 24, 0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 170, 255, 0.15)'
      }}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl tracking-wider cursor-pointer"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--accent-blue)',
            textShadow: 'var(--glow-blue)',
            WebkitTextStroke: '1px var(--accent-blue)'
          }}
          onClick={() => scrollToSection('hero')}
        >
          RDR
        </div>

        {/* Center Navigation - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm tracking-wider transition-colors duration-150 hover:opacity-100"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--text-secondary)',
                letterSpacing: '1px',
                opacity: 0.85
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-blue)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* MVP Button */}
          <button
            onClick={() => window.open('https://t.me/RDRMVP', '_blank')}
            className="px-4 md:px-5 py-2 rounded transition-all duration-200 text-sm md:text-base"
            style={{
              background: 'var(--accent-blue-dark)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              boxShadow: 'var(--glow-blue)'
            }}
            onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(1)')}
          >
            MVP
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded transition-colors"
            style={{ color: 'var(--accent-blue)' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 py-4 px-6"
          style={{
            background: 'rgba(5, 10, 24, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0, 170, 255, 0.15)'
          }}
        >
          <div className="flex flex-col gap-4">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-2 transition-colors duration-150"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-secondary)',
                  fontSize: '16px'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-blue)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}