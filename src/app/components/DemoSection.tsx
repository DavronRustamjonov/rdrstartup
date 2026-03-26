import { motion } from 'motion/react';
import { NeuralNetwork } from './NeuralNetwork';
import { Play, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { DashboardModal } from './DashboardModal';

export function DemoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      id="demo"
      className="relative py-32 px-6"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Neural Network - Layers 1+2 */}
      <NeuralNetwork intensity="low" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Alert Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-xl flex items-start gap-4"
          style={{
            background: 'rgba(244, 185, 66, 0.06)',
            borderLeft: '4px solid var(--gold)',
            border: '1px solid rgba(244, 185, 66, 0.3)'
          }}
        >
          <AlertTriangle size={24} style={{ color: 'var(--gold)', flexShrink: 0 }} />
          <div>
            <h4
              className="mb-2"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                color: 'var(--gold)'
              }}
            >
              // Demo haqida eslatma
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}
            >
              Loyihani qurish boshlanganiga 2 oy bo'ldi. MVP bosqichiga o'tilgan — mobil ilova to'liq ish holatida, dashboard hozirda rivojlantirish jarayonida.
            </p>
          </div>
        </motion.div>

        {/* Video Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: '📱 Mobil Ilova Demo',
              subtitle: 'Real ish jarayoni va foydalanuvchi oqimi'
            },
            {
              title: '🎬 To\'liq Tizim Demo',
              subtitle: 'App + Dashboard — birgalikda ishlashi'
            }
          ].map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer transition-all duration-200"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-blue)',
                boxShadow: '0 0 20px rgba(0, 170, 255, 0.15)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = 'var(--glow-blue)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 170, 255, 0.15)';
              }}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{
                    background: 'rgba(0, 102, 255, 0.3)',
                    border: '2px solid var(--accent-blue)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <Play size={32} style={{ color: 'var(--accent-blue)' }} />
                </div>
              </div>

              {/* Title Overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{
                  background: 'linear-gradient(to top, rgba(5, 10, 24, 0.95), transparent)'
                }}
              >
                <h4
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    color: 'var(--text-primary)'
                  }}
                >
                  {video.title}
                </h4>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {video.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* UI Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="px-6 py-3 rounded-lg transition-all duration-200"
            style={{
              background: 'transparent',
              color: 'var(--accent-blue)',
              fontFamily: 'var(--font-body)',
              border: '1px solid var(--accent-blue)'
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0, 170, 255, 0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            onClick={() => setIsModalOpen(true)}
          >
            Mobile App UI →
          </motion.button>
        </div>

        {/* Note */}
        <p
          className="text-center text-xs italic"
          style={{
            color: '#4A5568',
            fontFamily: 'var(--font-body)'
          }}
        >
          * Tugmalar dastlabki dizayn versiyalariga yo'naltiradi. Amaldagi mahsulot sezilarli darajada rivojlantirilgan.
        </p>
      </div>

      {/* Dashboard Modal */}
      <DashboardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
