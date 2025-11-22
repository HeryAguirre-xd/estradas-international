import { useEffect, useRef } from 'react';

interface LaserTextProps {
  text: string;
  className?: string;
}

export default function LaserText({ text, className = '' }: LaserTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const textElement = textRef.current;
    if (!canvas || !textElement) return;

    const ctx = canvas.getContext('2d')!;
    let frame: number;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createLaser = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      targetX: Math.random() * canvas.width,
      targetY: Math.random() * canvas.height,
      hue: Math.random() * 60 + 300,
      life: 1,
    });

    const lasers = Array(3).fill(null).map(createLaser);

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      lasers.forEach((laser, index) => {
        if (laser.life <= 0) {
          lasers[index] = createLaser();
          return;
        }

        ctx.strokeStyle = `hsla(${laser.hue}, 100%, 50%, ${laser.life})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(laser.x, laser.y);
        ctx.lineTo(laser.targetX, laser.targetY);
        ctx.stroke();

        laser.life -= 0.01;
        laser.x += (laser.targetX - laser.x) * 0.1;
        laser.y += (laser.targetY - laser.y) * 0.1;
      });

      frame = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      <div className="relative">
        {/* Create multiple layers for the text effect */}
        <div 
          className={`absolute inset-0 ${className}`}
          style={{
            color: 'black',
            filter: 'blur(4px)',
            transform: 'translate(-2px, -2px)'
          }}
        >
          {text}
        </div>
        <div 
          className={`absolute inset-0 ${className}`}
          style={{
            color: 'black',
            filter: 'blur(4px)',
            transform: 'translate(2px, -2px)'
          }}
        >
          {text}
        </div>
        <div 
          className={`absolute inset-0 ${className}`}
          style={{
            color: 'black',
            filter: 'blur(4px)',
            transform: 'translate(-2px, 2px)'
          }}
        >
          {text}
        </div>
        <div 
          className={`absolute inset-0 ${className}`}
          style={{
            color: 'black',
            filter: 'blur(4px)',
            transform: 'translate(2px, 2px)'
          }}
        >
          {text}
        </div>
        {/* Main text */}
        <div
          ref={textRef}
          className={`relative z-10 ${className}`}
          style={{
            color: 'white',
            textShadow: `
              0 0 20px rgba(255, 0, 255, 0.5),
              0 0 40px rgba(255, 0, 255, 0.3),
              0 0 60px rgba(255, 0, 255, 0.1)
            `
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}