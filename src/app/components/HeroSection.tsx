import { motion } from 'motion/react';
import { NeuralNetwork } from './NeuralNetwork';

export function HeroSection() {
  const stats = [
    { value: '468', label: 'Yuz tahlil nuqtasi' },
    { value: '<50ms', label: 'Signal kechikishi' },
    { value: '24/7', label: 'Doimiy monitoring' },
    { value: '3-in-1', label: 'Ovoz · Vibratsiya · Tok' }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Neural Network Background - ALL 5 LAYERS */}
      <NeuralNetwork intensity="hero" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Giant Outlined RDR */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(80px, 12vw, 180px)',
            color: 'transparent',
            WebkitTextStroke: '2px var(--accent-blue)',
            textShadow: '0 0 40px rgba(0, 170, 255, 0.5)',
            letterSpacing: '0.1em'
          }}
        >
          RDR
        </motion.h1>

        {/* Subtitle 1 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            letterSpacing: '6px',
            color: 'var(--accent-blue)'
          }}
        >
          REAL-TIME DROWSINESS RESPONSE
        </motion.p>

        {/* Subtitle 2 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12 max-w-2xl mx-auto"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            lineHeight: '1.6',
            color: 'var(--text-secondary)'
          }}
        >
          Haydovchi charchoqligini sun'iy intellekt yordamida real vaqtda aniqlash, ogohlantirish va transport xavfsizligini ta'minlash ekotizimi
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-lg text-lg transition-all duration-200"
            style={{
              background: 'var(--accent-blue-dark)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              boxShadow: 'var(--glow-blue)'
            }}
            onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(1)')}
          >
            Demo Ko'rish →
          </button>
          <button
            onClick={() => document.getElementById('muammo')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-lg text-lg transition-all duration-200"
            style={{
              background: 'transparent',
              color: 'var(--accent-blue)',
              fontFamily: 'var(--font-body)',
              border: '1px solid var(--accent-blue)'
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0, 170, 255, 0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            Batafsil o'qish
          </button>
        </motion.div>

        {/* Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl transition-all duration-200"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-blue)',
                boxShadow: '0 0 20px rgba(0, 170, 255, 0.15)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(0, 170, 255, 0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 170, 255, 0.15)';
              }}
            >
              <div
                className="mb-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '28px',
                  color: 'var(--accent-blue)'
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-secondary)'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
