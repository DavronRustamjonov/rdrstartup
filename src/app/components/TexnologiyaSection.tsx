import { motion } from 'motion/react';
import { NeuralNetwork } from './NeuralNetwork';
import { Smartphone, Wifi, Zap, Gauge, Fuel, Thermometer, Navigation, Cloud, BotMessageSquare } from 'lucide-react';

export function TexnologiyaSection() {
  const steps = [
    {
      icon: Smartphone,
      title: 'AI Monitoring',
      items: [
        '468 ta yuz nuqtasi tahlili',
        'EAR real-time hisoblash',
        '30–60 FPS kamera tahlili',
        'Fon rejimida ishlash',
        'Avtomobil holati paneli:',
        'yoqilg\'i · harorat · tezlik · GPS'
      ]
    },
    {
      icon: Wifi,
      title: 'Wi-Fi Trigger',
      items: [
        'ESP32-C3 Access Point',
        'HTTP so\'rov — internet shart emas',
        '<50ms kechikish',
        'Lokal tarmoq, xavfsiz aloqa'
      ]
    },
    {
      icon: Zap,
      title: 'Hardware Alert',
      items: [
        'Active Buzzer — ovozli signal',
        'Haptic Motor — kuchli vibratsiya',
        'Step-up elektr impulsi',
        '3D-printer korpus'
      ]
    },
    {
      icon: BotMessageSquare,
      title: 'Ovozli Maslahatchi',
      items: [
        'Chatbot orqali real-time maslahat',
        'Uyqu sifatini tahlil qilish',
        'Dam olish vaqtlarini tavsiya',
        'Xavfsizlik ko\'rsatmalari'
      ]
    }
  ];

  const carMetrics = [
    { icon: Fuel, label: 'Fuel', value: '45%' },
    { icon: Thermometer, label: 'Temp', value: '68°C' },
    { icon: Gauge, label: 'Speed', value: '87 km/h' },
    { icon: Navigation, label: 'GPS', value: 'Active' }
  ];

  return (
    <section
      id="texnologiya"
      className="relative py-32 px-6"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Neural Network - Layers 1+2+3+5 HIGH intensity */}
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
            04 — TEXNOLOGIYA
          </p>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Tizim Qanday Ishlaydi?
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)'
            }}
          >
            Uch qadam. Soniyalar ichida. Hayot saqlanadi.
          </p>
        </div>

        {/* 4-Step Flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative"
              >
                <div
                  className="p-8 rounded-xl transition-all duration-200 h-full"
                  style={{
                    background: 'var(--bg-card)',
                    borderTop: '2px solid var(--accent-blue)',
                    border: '1px solid var(--border-blue)'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {/* Step Number */}
                  <div
                    className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: 'var(--accent-blue-dark)',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-display)',
                      fontSize: '18px',
                      boxShadow: 'var(--glow-blue)'
                    }}
                  >
                    {idx + 1}
                  </div>

                  <Icon size={40} className="mb-4" style={{ color: 'var(--accent-blue)' }} />
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '20px',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                          lineHeight: '1.5',
                          paddingLeft: item.startsWith('yoqilg') ? '20px' : '0'
                        }}
                      >
                        {!item.startsWith('yoqilg') && '• '}{item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Neural Pathway Arrow */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2 z-20">
                    <svg width="32" height="32" viewBox="0 0 32 32">
                      <path
                        d="M4 16 L24 16 M24 16 L18 10 M24 16 L18 22"
                        stroke="var(--accent-blue)"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Car Status Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-xl"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-blue)'
            }}
          >
            {/* Step Number */}
            <div
              className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: 'var(--accent-blue-dark)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                boxShadow: 'var(--glow-blue)'
              }}
            >
              5
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Gauge size={28} style={{ color: 'var(--accent-blue)' }} />
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  color: 'var(--text-primary)'
                }}
              >
                Avtomobil Holati Paneli
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {carMetrics.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg"
                    style={{
                      background: 'rgba(0, 170, 255, 0.05)',
                      border: '1px solid rgba(0, 170, 255, 0.2)'
                    }}
                  >
                    <Icon size={20} className="mb-2" style={{ color: 'var(--accent-blue)' }} />
                    <div
                      className="text-xs mb-1"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {metric.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '16px',
                        color: 'var(--accent-blue)'
                      }}
                    >
                      {metric.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Fleet Platform */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-xl"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-blue)'
            }}
          >
            {/* Step Number */}
            <div
              className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: 'var(--accent-blue-dark)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                boxShadow: 'var(--glow-blue)'
              }}
            >
              6
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Cloud size={28} style={{ color: 'var(--accent-blue)' }} />
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  color: 'var(--text-primary)'
                }}
              >
                Fleet & Cloud Platform
              </h3>
            </div>
            <p
              className="mb-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}
            >
              B2B dashboard, real-time monitoring, safety rating
            </p>
            <div className="flex flex-wrap gap-2">
              {['Real-time Data', 'Fleet Analytics', 'Safety Scoring', 'Alert System'].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded text-xs"
                  style={{
                    background: 'rgba(0, 170, 255, 0.1)',
                    color: 'var(--accent-blue)',
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid rgba(0, 170, 255, 0.3)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
