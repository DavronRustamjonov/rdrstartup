import { useState } from 'react';
import { motion } from 'motion/react';
import { NeuralNetwork } from './NeuralNetwork';
import { Send, Mail, GraduationCap } from 'lucide-react';

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const sections = [
    'Asosiy', 'Muammo', 'Yechim', 'Nega Biz', 
    'Texnologiya', 'Reja', 'Jamoa', 'Aloqa'
  ];

  return (
    <footer
      id="aloqa"
      className="relative py-20 px-6"
      style={{
        background: '#030810',
        borderTop: '1px solid rgba(0, 170, 255, 0.15)'
      }}
    >
      {/* Neural Network - Layer 1 only, very faint */}
      <NeuralNetwork intensity="low" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 3-Column Layout */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* LEFT - Brand & University */}
          <div>
            <div
              className="text-2xl mb-2"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--accent-blue)',
                textShadow: 'var(--glow-blue)',
                WebkitTextStroke: '1px var(--accent-blue)'
              }}
            >
              RDR
            </div>
            <p
              className="mb-6 text-xs tracking-wider"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--text-secondary)',
                letterSpacing: '3px'
              }}
            >
              REAL-TIME DROWSINESS RESPONSE
            </p>

            {/* University Badge */}
            <div
              className="p-4 rounded-xl mb-6"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-blue)'
              }}
            >
              <div className="flex items-start gap-3">
                <GraduationCap size={24} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
                <div>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--text-primary)',
                      lineHeight: '1.5'
                    }}
                  >
                    Muhammad al-Xorazmiy nomidagi TATU
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    Sun'iy Intellekt Kafedrasi
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://t.me/bunyodbek_azimov"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-all duration-200"
                style={{
                  background: 'transparent',
                  color: 'var(--accent-blue)',
                  border: '1px solid var(--accent-blue)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0, 170, 255, 0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <Send size={16} />
                Telegram
              </a>
              <a
                href="mailto:b.azimov@tuit.uz"
                className="px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition-all duration-200"
                style={{
                  background: 'transparent',
                  color: 'var(--accent-blue)',
                  border: '1px solid var(--accent-blue)',
                  fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0, 170, 255, 0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>

          {/* CENTER - Contact Form */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '22px',
                color: 'var(--text-primary)'
              }}
            >
              Bog'laning
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Ismingiz"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg transition-all duration-200"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(0, 170, 255, 0.2)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px'
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent-blue)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(0, 170, 255, 0.2)')}
              />
              <input
                type="email"
                placeholder="Email manzilingiz"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg transition-all duration-200"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(0, 170, 255, 0.2)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px'
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent-blue)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(0, 170, 255, 0.2)')}
              />
              <input
                type="text"
                placeholder="Tashkilot (ixtiyoriy)"
                value={formData.organization}
                onChange={e => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-4 py-3 rounded-lg transition-all duration-200"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(0, 170, 255, 0.2)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px'
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent-blue)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(0, 170, 255, 0.2)')}
              />
              <textarea
                placeholder="Xabaringiz..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg resize-none transition-all duration-200"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(0, 170, 255, 0.2)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px'
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent-blue)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(0, 170, 255, 0.2)')}
              />
              <a
                href="https://t.me/davron_rustamjonov"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 rounded-lg transition-all duration-200 block text-center"
                style={{
                  background: 'var(--accent-blue-dark)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  boxShadow: 'var(--glow-blue)'
                }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.1)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(1)')}
              >
                Yuborish →
              </a>
            </form>
          </div>

          {/* RIGHT - Links & Contact */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '16px',
                color: 'var(--text-primary)'
              }}
            >
              Bo'limlar
            </h4>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {sections.map((section, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const id = section.toLowerCase().replace(/\s+/g, '-');
                    document.getElementById(id === 'asosiy' ? 'hero' : id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-sm py-1 transition-colors duration-150"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-blue)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {section}
                </button>
              ))}
            </div>

            <div
              className="my-6"
              style={{
                height: '1px',
                background: 'rgba(0, 170, 255, 0.2)'
              }}
            />

            <h4
              className="mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '16px',
                color: 'var(--text-primary)'
              }}
            >
              Aloqa
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: 'var(--text-secondary)' }} />
                <span
                  className="text-xs break-all"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  rustamjonovdavron76@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px'
                  }}
                >
                  📱 +998 91 106 38 98
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Send size={14} style={{ color: 'var(--text-secondary)' }} />
                <span
                  style={{
                    color: 'var(--accent-blue)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px'
                  }}
                >
                  t.me/davron_rustamjonov
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 text-center"
          style={{
            borderTop: '1px solid rgba(0, 170, 255, 0.1)'
          }}
        >
          <p
            className="text-xs"
            style={{
              color: '#4A5568',
              fontFamily: 'var(--font-body)'
            }}
          >
            © 2026 RDR Start Up Project | TATU · Sun'iy Intellekt · 261-23 | Barcha huquqlar himoyalangan
          </p>
        </div>
      </div>
    </footer>
  );
}
