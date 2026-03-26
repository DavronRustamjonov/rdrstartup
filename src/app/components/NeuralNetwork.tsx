import { useEffect, useRef } from 'react';

interface NeuralNetworkProps {
  intensity?: 'low' | 'medium' | 'high' | 'hero';
  className?: string;
}

export function NeuralNetwork({ intensity = 'medium', className = '' }: NeuralNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Node grid configuration
    const gridSpacing = 60;
    let nodes: { x: number; y: number; active: boolean; glow: boolean }[] = [];

    // Generate grid nodes based on current canvas size
    const generateNodes = () => {
      nodes = [];
      for (let y = -gridSpacing; y < canvas.height + gridSpacing; y += gridSpacing) {
        for (let x = -gridSpacing; x < canvas.width + gridSpacing; x += gridSpacing) {
          const active = intensity === 'hero' || intensity === 'high' ? Math.random() < 0.15 : Math.random() < 0.08;
          const glow = intensity === 'hero' && Math.random() < 0.1;
          nodes.push({ x, y, active, glow });
        }
      }
    };

    // Set canvas size and regenerate nodes
    const updateSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      generateNodes();
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Animation state
    let animationFrame: number;
    let signalOffset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Layer 1: Background Grid Dots
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 170, 255, ${intensity === 'low' ? 0.05 : 0.12})`;
        ctx.fill();
      });

      // Layer 2: Connection Lines
      if (intensity !== 'low') {
        nodes.forEach((node, i) => {
          nodes.slice(i + 1).forEach(otherNode => {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = `rgba(0, 170, 255, 0.08)`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          });
        });
      }

      // Layer 3: Active Pulse Nodes
      if (intensity === 'medium' || intensity === 'high' || intensity === 'hero') {
        nodes.filter(n => n.active).forEach(node => {
          // Glow
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 12);
          gradient.addColorStop(0, 'rgba(0, 170, 255, 0.25)');
          gradient.addColorStop(1, 'rgba(0, 170, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 12, 0, Math.PI * 2);
          ctx.fill();

          // Node
          ctx.beginPath();
          ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 170, 255, 0.35)';
          ctx.fill();
        });
      }

      // Layer 4: Hub Nodes (hero only)
      if (intensity === 'hero') {
        nodes.filter(n => n.glow).forEach(node => {
          // Strong glow
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 24);
          gradient.addColorStop(0, 'rgba(0, 170, 255, 0.5)');
          gradient.addColorStop(1, 'rgba(0, 170, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 24, 0, Math.PI * 2);
          ctx.fill();

          // Hub node
          ctx.beginPath();
          ctx.arc(node.x, node.y, 12, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 170, 255, 0.6)';
          ctx.fill();

          // Radiating lines
          for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const length = 80;
            const endX = node.x + Math.cos(angle) * length;
            const endY = node.y + Math.sin(angle) * length;

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = 'rgba(0, 170, 255, 0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      }

      // Layer 5: Signal Travel Lines (hero only)
      if (intensity === 'hero') {
        signalOffset += 2;
        if (signalOffset > 200) signalOffset = 0;

        for (let i = 0; i < 3; i++) {
          const startNode = nodes[Math.floor(nodes.length * (i / 3))];
          const endNode = nodes[Math.floor(nodes.length * ((i + 1) / 3))];

          if (startNode && endNode) {
            const progress = (signalOffset % 200) / 200;
            const currentX = startNode.x + (endNode.x - startNode.x) * progress;
            const currentY = startNode.y + (endNode.y - startNode.y) * progress;

            ctx.beginPath();
            ctx.arc(currentX, currentY, 4, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 170, 255, 0.8)';
            ctx.fill();

            // Glow
            const gradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 8);
            gradient.addColorStop(0, 'rgba(0, 170, 255, 0.4)');
            gradient.addColorStop(1, 'rgba(0, 170, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(currentX, currentY, 8, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', updateSize);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    />
  );
}
