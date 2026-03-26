import { motion } from 'motion/react';
import { NeuralNetwork } from './NeuralNetwork';
import { Car, Clock, Navigation, Radio, DollarSign, Factory } from 'lucide-react';

export function MuammoSection() {
  const problems = [
    { icon: Car, text: 'Uyqu sababli YTH hodisalari ortib bormoqda' },
    { icon: Clock, text: 'Uzoq vaqt hushyor turmaslik — yashirin xavf' },
    { icon: Navigation, text: 'Uzoq masofali qatnovlarda charchoq yo\'q' },
    { icon: Radio, text: 'Real vaqt monitoring tizimlari yetarli emas' },
    { icon: DollarSign, text: 'YTH sababli millionlab dollar iqtisodiy zarar' },
    { icon: Factory, text: 'Zavod va tungi smena ishchilarida xavf' }
  ];

  return (
    <section
      id="muammo"
      className="relative py-32 px-6"
      style={{
        background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))'
      }}
    >
      {/* Neural Network - Layers 1+2+3 */}
      <NeuralNetwork intensity="medium" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p
            className="text-sm tracking-[0.25em] uppercase mb-4"
            style={{
              color: 'var(--accent-blue)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            01 — MUAMMO
          </p>
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Yo'llarda Har Kuni Sodir Bo'layotgan Fojia
          </h2>
          <p
            className="max-w-2xl"
            style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)',
              lineHeight: '1.6'
            }}
          >
            Dunyo bo'ylab millionlab haydovchi uyqu va charchoq tufayli ulkan xavf ostida...
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-[40%_60%] gap-12">
          {/* Left Column - Stats */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl"
              style={{
                background: 'var(--bg-card)',
                borderLeft: '3px solid var(--accent-blue)',
                border: '1px solid var(--border-blue)'
              }}
            >
              <div
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  color: 'var(--accent-blue)',
                  textShadow: 'var(--glow-blue)'
                }}
              >
                1,350,000+
              </div>
              <p
                className="mb-2"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--text-primary)'
                }}
              >
                Yiliga uyqu tufayli YTH hodisalari
              </p>
              <p
                className="text-xs"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)'
                }}
              >
                — WHO va NHTSA ma'lumotlari
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-xl"
              style={{
                background: 'var(--bg-card)',
                borderLeft: '3px solid var(--accent-blue)',
                border: '1px solid var(--border-blue)'
              }}
            >
              <div
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(48px, 6vw, 72px)',
                  color: 'var(--accent-blue)',
                  textShadow: 'var(--glow-blue)'
                }}
              >
                $518 Mlrd
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--text-primary)'
                }}
              >
                Yillik iqtisodiy zarar (AQSh)
              </p>
            </motion.div>
          </div>

          {/* Right Column - Problem Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((problem, idx) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-xl transition-all duration-200"
                  style={{
                    background: 'var(--bg-card)',
                    borderLeft: '2px solid var(--accent-blue)',
                    border: '1px solid var(--border-blue)'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <Icon
                    size={28}
                    className="mb-3"
                    style={{ color: 'var(--accent-blue)' }}
                  />
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.5'
                    }}
                  >
                    {problem.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
