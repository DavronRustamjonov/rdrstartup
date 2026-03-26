import { motion } from 'motion/react';
import { NeuralNetwork } from './NeuralNetwork';
import { Mail, Phone, Send } from 'lucide-react';
import img1 from 'figma:asset/cfe6769e57a0278d3db6e9a1f1781a9ed0497296.png';
import img2 from 'figma:asset/e779946428b07990489821be688510f55944ccd9.png';
import img3 from 'figma:asset/43fc3ec8344cc054b5be582c44ac14f8edbd866f.png';
import img4 from 'figma:asset/8a79f370d3d8bea315eae06b014e3edb0ab98346.png';

export function JamoaSection() {
  const team = [
    {
      badge: 'LOYIHA ASOSCHISI',
      badgeColor: 'var(--accent-blue-dark)',
      badgeText: '#FFFFFF',
      borderColor: 'var(--border-blue)',
      name: 'Rustamjonov Davron',
      patronymic: 'Rustamjon o\'g\'li',
      tags: ['Sun\'iy Intellekt'],
      email: 'rustamjonovdavron76@gmail.com',
      phone: '+998 91 106 38 98',
      telegram: '@davron_rustamjonov',
      avatar: true,
      image: img1
    },
    {
      badge: 'JAMOA A\'ZOSI',
      badgeColor: 'transparent',
      badgeText: 'var(--accent-blue)',
      borderColor: 'var(--border-blue)',
      name: 'Abdunabiyev Asadbek',
      patronymic: 'Begmurod o\'g\'li',
      tags: ['Sun\'iy Intellekt'],
      phone: '+998 90 005 75 02',
      telegram: '@Asad_707',
      avatar: true,
      image: img2
    },
    {
      badge: 'JAMOA A\'ZOSI',
      badgeColor: 'transparent',
      badgeText: 'var(--accent-blue)',
      borderColor: 'var(--border-blue)',
      name: 'Qarshiyev Umarbek',
      patronymic: 'Islomjon o\'g\'li',
      tags: ['Sun\'iy Intellekt'],
      phone: '+998 99 179 67 70',
      telegram: '@umar_karshiev',
      avatar: true,
      image: img3
    },
    {
      badge: 'ILMIY RAHBAR',
      badgeColor: 'var(--gold)',
      badgeText: '#000000',
      borderColor: 'rgba(244, 185, 66, 0.3)',
      name: 'Qobilov Sirojiddin',
      patronymic: 'Sherquljon o\'g\'li',
      tags: ['Katta O\'qituvchi', 'Sun\'iy Intellekt'],
      phone: '+998 90 185 00 24',
      telegram: '@Qobilov_S',
      avatar: true,
      glowColor: 'rgba(244, 185, 66, 0.4)',
      image: img4
    }
  ];

  return (
    <section
      id="jamoa"
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
            06 — JAMOA
          </p>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            RDR Ortidagi Odamlar
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)'
            }}
          >
            TATU — Sun'iy Intellekt Kafedrasi
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl transition-all duration-200"
              style={{
                background: 'var(--bg-card)',
                border: `1px solid ${member.borderColor}`,
                boxShadow: member.glowColor ? `0 0 20px ${member.glowColor}` : '0 0 20px rgba(0, 170, 255, 0.15)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = member.glowColor 
                  ? `0 0 30px ${member.glowColor}` 
                  : 'var(--glow-blue)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = member.glowColor 
                  ? `0 0 20px ${member.glowColor}` 
                  : '0 0 20px rgba(0, 170, 255, 0.15)';
              }}
            >
              {/* Badge */}
              <div
                className="inline-block px-3 py-1 rounded text-xs mb-4"
                style={{
                  background: member.badgeColor,
                  color: member.badgeText,
                  fontFamily: 'var(--font-mono)',
                  border: member.badgeColor === 'transparent' ? `1px solid ${member.badgeText}` : 'none'
                }}
              >
                {member.badge}
              </div>

              {/* Avatar with Image */}
              {member.avatar && (
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden"
                  style={{
                    border: member.glowColor 
                      ? `2px solid var(--gold)` 
                      : '2px solid var(--accent-blue)',
                    boxShadow: member.glowColor 
                      ? `0 0 15px ${member.glowColor}` 
                      : '0 0 15px rgba(0, 170, 255, 0.4)'
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Name */}
              <h3
                className="text-center mb-1"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  color: 'var(--text-primary)'
                }}
              >
                {member.name}
              </h3>

              {/* Patronymic */}
              {member.patronymic && (
                <p
                  className="text-center mb-3"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {member.patronymic}
                </p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {member.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      background: 'rgba(0, 170, 255, 0.1)',
                      color: 'var(--accent-blue)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div
                className="my-4"
                style={{
                  height: '1px',
                  background: member.glowColor 
                    ? 'rgba(244, 185, 66, 0.2)' 
                    : 'rgba(0, 170, 255, 0.2)'
                }}
              />

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                {member.email && (
                  <div className="flex items-center gap-2">
                    <Mail size={14} style={{ color: 'var(--text-secondary)' }} />
                    <span
                      className="text-xs break-all"
                      style={{
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-body)'
                      }}
                    >
                      {member.email}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Phone size={14} style={{ color: 'var(--text-secondary)' }} />
                  <span
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px'
                    }}
                  >
                    {member.phone}
                  </span>
                </div>
                <a
                  href={`https://t.me/${member.telegram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-all duration-200 hover:opacity-80"
                  style={{
                    color: 'var(--accent-blue)'
                  }}
                >
                  <Send size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}