import { motion } from 'motion/react';
import { NeuralNetwork } from './NeuralNetwork';
import { Bell, AlertTriangle, Gauge, Globe, BarChart3, Brain, AppWindow, Watch } from 'lucide-react';

export function YechimSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI Monitoring',
      description: '468 landmark · EAR · 30–60 FPS real-time tahlil.'
    },
    {
      icon: AppWindow,
      title: 'Suzuvchi oynalar rejimi',
      description: 'Har qanday ilova ustida ishlaydi. Fonda doimiy kuzatuv.'
    },
    {
      icon: Watch,
      title: 'Smart Braslet',
      description: 'Vibratsiya · Ovoz · Tok — uch xil ogohlantirish usuli.'
    },
    {
      icon: Bell,
      title: 'Budilnik Tizimi',
      description: 'Ma\'lum vaqtga RDR budilnik o\'rnating. Vaqti kelganda tok, vibratsiya, tovush bilan uyg\'otadi.'
    },
    {
      icon: AlertTriangle,
      title: 'Favqulodda Rejim',
      description: 'Haydovchi uyonmasa, GPS lokatsiyasi oila yoki xizmatga SMS yuboriladi.'
    },
    {
      icon: Gauge,
      title: 'Avtomobil Holati Paneli',
      description: 'Yoqilg\'i, harorat, tezlik, GPS — bitta ekranda. Yoqilg\'i past bo\'lsa yaqin stantsiya tavsiya qilinadi.'
    },
    {
      icon: Globe,
      title: 'Ko\'p Tilli Interfeys',
      description: 'O\'zbek / Русский / English — 3 tilda to\'liq interfeys.'
    },
    {
      icon: BarChart3,
      title: 'Driver Safety Rating',
      description: 'AI tahlili asosida har bir haydovchiga xavfsizlik bahosi beriladi.'
    }
  ];

  return (
    <section
      id="yechim"
      className="relative py-32 px-6"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Neural Network - Layers 1+2+3+5 */}
      <NeuralNetwork intensity="high" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p
            className="text-sm tracking-[0.25em] uppercase mb-4"
            style={{
              color: 'var(--accent-blue)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            02 — YECHIM
          </p>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            RDR Ekotizimi — To'liq Integrated Yechim
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)'
            }}
          >
            Bitta ilova. Bitta braslet. Cheksiz xavfsizlik.
          </p>
        </div>

        {/* Feature Cards - Vertical Layout */}
        <div className="max-w-3xl mx-auto space-y-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
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
                  borderTop: '2px solid var(--accent-blue)',
                  border: '1px solid var(--border-blue)'
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Icon size={28} className="mb-3" style={{ color: 'var(--accent-blue)' }} />
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    color: 'var(--text-primary)'
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5'
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}