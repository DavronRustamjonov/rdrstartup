import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import img1 from 'figma:asset/b04fd9975fa2e38b935067d0c6a64b9cdab80855.png';
import img2 from 'figma:asset/ef65e8726b3d02dd961fccfe5c209a036f71a5f5.png';
import img3 from 'figma:asset/651dbfcbcee3d68c26657ab0a8b9f8de510fb39a.png';
import img4 from 'figma:asset/11dc865d21d123332d7eceb33f7f866d6f7724b0.png';

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DashboardModal({ isOpen, onClose }: DashboardModalProps) {
  const images = [
    { src: img1, alt: 'Monitoring ekrani' },
    { src: img2, alt: 'Kalibrasiya ekrani' },
    { src: img3, alt: 'Budilnik sozlamalari' },
    { src: img4, alt: 'Sozlamalar ekrani' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(8px)'
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            onClick={onClose}
          >
            <div className="min-h-screen px-4 py-8 flex items-center justify-center">
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl rounded-2xl p-8"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-blue)',
                  boxShadow: 'var(--glow-blue)'
                }}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-lg transition-all duration-200"
                  style={{
                    background: 'rgba(0, 170, 255, 0.1)',
                    border: '1px solid var(--border-blue)',
                    color: 'var(--accent-blue)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 170, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 170, 255, 0.1)';
                  }}
                >
                  <X size={24} />
                </button>

                {/* Title */}
                <h2
                  className="text-center mb-8"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '28px',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}
                >
                  Boshlang'ich MVP dan namuna
                </h2>

                {/* Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {images.map((image, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-xl overflow-hidden"
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-blue)',
                        boxShadow: '0 0 20px rgba(0, 170, 255, 0.1)'
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-contain"
                        style={{ maxHeight: '500px' }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
