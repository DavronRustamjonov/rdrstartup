import { motion } from 'motion/react';
import { NeuralNetwork } from './NeuralNetwork';
import { Smartphone, DollarSign, Watch, Car, Gauge } from 'lucide-react';

export function NegaBizSection() {
  const comparison = [
    {
      company: 'Tesla',
      approach: 'Cabin monitoring',
      weakness: 'Faqat Tesla avtolari',
      rdr: 'Har qanday avto'
    },
    {
      company: 'Seeing Machines',
      approach: 'AI monitoring',
      weakness: 'Narxi juda yuqori',
      rdr: '$3–5/oy'
    },
    {
      company: 'Smart Eye',
      approach: 'Kamera tizimi',
      weakness: 'Mobil versiya yo\'q',
      rdr: 'Telefon orqali'
    },
    {
      company: 'Bosch',
      approach: 'Avto integratsiya',
      weakness: 'Ommaviy emas',
      rdr: 'Wearable qurilma'
    }
  ];

  const advantages = [
    { icon: Smartphone, text: 'Telefon orqali ishlaydi' },
    { icon: DollarSign, text: 'Arzon — $3/oy dan' },
    { icon: Watch, text: 'Wearable braslet' },
    { icon: Car, text: 'Har qanday avtomobil' },
    { icon: Gauge, text: 'Avtomobil holati ko\'rsatiladi' }
  ];

  return (
    <section
      id="nega-biz"
      className="relative py-32 px-6"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Neural Network - Layers 1+2 */}
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
            03 — NEGA BIZ
          </p>
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Raqobatchilardan Nima Bilan Farq Qilamiz?
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
            Mavjud yechimlar yoki juda qimmat, yoki faqat premium avtomobillarga mo'ljallangan.
          </p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-xl overflow-hidden"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-blue)'
          }}
        >
          {/* Header Row */}
          <div
            className="grid grid-cols-4 gap-4 p-4"
            style={{
              background: 'rgba(0, 102, 255, 0.15)',
              borderBottom: '1px solid var(--border-blue)'
            }}
          >
            {['Kompaniya', 'Yondashuv', 'Asosiy Kamchilik', 'RDR Farqi'].map((header, idx) => (
              <div
                key={idx}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '14px',
                  color: 'var(--text-primary)'
                }}
              >
                {header}
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {comparison.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-4 gap-4 p-4 transition-all duration-200"
              style={{
                background: idx % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)',
                borderBottom: idx < comparison.length - 1 ? '1px solid rgba(0, 170, 255, 0.1)' : 'none'
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0, 170, 255, 0.05)')}
              onMouseLeave={e => (e.currentTarget.style.background = idx % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)')}
            >
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--text-primary)'
                }}
              >
                {row.company}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--text-secondary)'
                }}
              >
                {row.approach}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--text-secondary)'
                }}
              >
                {row.weakness}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--accent-blue)',
                  borderLeft: '2px solid var(--accent-blue)',
                  paddingLeft: '12px'
                }}
              >
                ✅ {row.rdr}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Advantage Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {advantages.map((advantage, idx) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-200"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-blue)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = 'var(--glow-blue)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Icon size={20} style={{ color: 'var(--accent-blue)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--text-primary)'
                  }}
                >
                  {advantage.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
