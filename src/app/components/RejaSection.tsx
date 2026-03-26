import { motion } from 'motion/react';
import { NeuralNetwork } from './NeuralNetwork';
import { CreditCard, Watch, Building2, BarChart3, Brain, Cpu, Smartphone, Cloud, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

export function RejaSection() {
  const revenueStreams = [
    { icon: CreditCard, title: 'Subscription', description: 'B2C / $3–5 / oy' },
    { icon: Watch, title: 'Bracelet Device', description: '$15–25' },
    { icon: Building2, title: 'B2B License', description: '$5–10 / haydovchi / oy' },
    { icon: BarChart3, title: 'Data Analytics', description: 'Korporativ xizmatlar' }
  ];

  const investments = [
    { label: 'AI Model ishlab chiqish', amount: 35000, percentage: 29, color: '#0066FF', icon: Brain },
    { label: 'Braslet qurilma prototipi', amount: 25000, percentage: 21, color: '#00AAFF', icon: Cpu },
    { label: 'Mobil ilova', amount: 20000, percentage: 17, color: '#3399FF', icon: Smartphone },
    { label: 'Server va Cloud', amount: 20000, percentage: 17, color: '#0088DD', icon: Cloud },
    { label: 'Marketing', amount: 20000, percentage: 16, color: '#00CCFF', icon: TrendingUp }
  ];

  const pieData = investments.map(inv => ({
    name: inv.label,
    value: inv.percentage,
    percentage: inv.percentage, // Add percentage property for label display
    amount: inv.amount,
    color: inv.color,
    icon: inv.icon
  }));

  const totalInvestment = 120000;

  return (
    <section
      id="reja"
      className="relative py-32 px-6"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Neural Network - Layers 1+2+3 */}
      <NeuralNetwork intensity="medium" />

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
            05 — REJA
          </p>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Moliyaviy Reja va Bozor Imkoniyati
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* LEFT - TAM/SAM/SOM Circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* TAM - Outer Ring */}
              <div
                className="absolute inset-0 rounded-full flex items-center justify-center"
                style={{
                  border: '3px solid rgba(0, 170, 255, 0.3)',
                  background: 'radial-gradient(circle, rgba(0, 170, 255, 0.05) 0%, transparent 70%)'
                }}
              >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-center">
                  <p
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    TAM
                  </p>
                  <p
                    className="text-3xl"
                    style={{
                      color: 'var(--accent-blue)',
                      fontFamily: 'var(--font-display)'
                    }}
                  >
                    $8B
                  </p>
                </div>
              </div>

              {/* SAM - Middle Ring */}
              <div
                className="absolute inset-[15%] rounded-full flex items-center justify-center"
                style={{
                  border: '3px solid rgba(0, 170, 255, 0.5)',
                  background: 'radial-gradient(circle, rgba(0, 170, 255, 0.08) 0%, transparent 70%)'
                }}
              >
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-left">
                  <p
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    SAM
                  </p>
                  <p
                    className="text-xl"
                    style={{
                      color: 'var(--accent-blue)',
                      fontFamily: 'var(--font-display)'
                    }}
                  >
                    $1.5B
                  </p>
                </div>
              </div>

              {/* SOM - Inner Circle */}
              <div
                className="absolute inset-[35%] rounded-full flex items-center justify-center"
                style={{
                  border: '3px solid var(--accent-blue)',
                  background: 'radial-gradient(circle, rgba(0, 170, 255, 0.15) 0%, rgba(0, 170, 255, 0.05) 100%)',
                  boxShadow: 'var(--glow-blue)'
                }}
              >
                <div className="text-center">
                  <p
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    SOM
                  </p>
                  <p
                    className="text-xl"
                    style={{
                      color: 'var(--accent-blue)',
                      fontFamily: 'var(--font-display)'
                    }}
                  >
                    $50-100M
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)',
                  marginBottom: '8px'
                }}
              >
                Global Driver Monitoring Market
              </p>
              <span
                className="px-4 py-2 rounded-full text-sm"
                style={{
                  background: 'rgba(0, 170, 255, 0.1)',
                  color: 'var(--accent-blue)',
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid var(--border-blue)'
                }}
              >
                100M+ potensial foydalanuvchi
              </span>
            </div>
          </motion.div>

          {/* RIGHT - Revenue Streams */}
          <div>
            <h3
              className="text-2xl mb-6"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Daromad Oqimlari
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {revenueStreams.map((stream, idx) => {
                const Icon = stream.icon;
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
                      border: '1px solid var(--border-blue)'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    <Icon size={32} className="mb-3" style={{ color: 'var(--accent-blue)' }} />
                    <h4
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '16px',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {stream.title}
                    </h4>
                    <p
                      className="text-sm"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {stream.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Investment Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-blue)'
          }}
        >
          <h3
            className="text-center mb-8"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '36px',
              color: 'var(--text-primary)'
            }}
          >
            Kerakli Investitsiya: ${totalInvestment.toLocaleString()}
          </h3>

          <div className="flex items-center justify-center">
            {/* Pie Chart with icons inside */}
            <div className="w-full max-w-3xl relative">
              <ResponsiveContainer width="100%" height={600}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, name, percentage, amount, color, icon: IconComponent }) => {
                      const RADIAN = Math.PI / 180;
                      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);

                      return (
                        <g>
                          {/* Icon and percentage side by side */}
                          <foreignObject
                            x={x - 35}
                            y={y - 20}
                            width={70}
                            height={40}
                          >
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '6px',
                              width: '100%',
                              height: '100%'
                            }}>
                              {IconComponent && (
                                <>
                                  <IconComponent
                                    size={28}
                                    color="#FFFFFF"
                                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
                                  />
                                  <span style={{
                                    color: '#FFFFFF',
                                    fontSize: '14px',
                                    fontFamily: 'var(--font-mono)',
                                    fontWeight: 'bold',
                                    textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                                  }}>
                                    {percentage}%
                                  </span>
                                </>
                              )}
                            </div>
                          </foreignObject>
                        </g>
                      );
                    }}
                    outerRadius={180}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="rgba(5, 10, 24, 0.8)"
                    strokeWidth={3}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Legend below chart */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {investments.map((investment, idx) => {
                  const Icon = investment.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                        style={{
                          background: investment.color,
                          boxShadow: `0 0 8px ${investment.color}60`
                        }}
                      >
                        <Icon size={16} color="#FFFFFF" />
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '11px',
                            color: 'var(--text-primary)',
                            marginBottom: '2px'
                          }}
                        >
                          {investment.label}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          ${investment.amount.toLocaleString()}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}