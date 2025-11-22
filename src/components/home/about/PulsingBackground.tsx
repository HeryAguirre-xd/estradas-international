import { useEffect, useRef } from 'react';

export default function PulsingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    let frame: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const circles: any[] = Array(5).fill(null).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 100 + 50,
      hue: Math.random() * 60 + 240, // Blue to purple range
      growth: true
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(26, 11, 46, 0.1)'; // Dark purple background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      circles.forEach(circle => {
        if (circle.growth) {
          circle.radius += 0.5;
          if (circle.radius > 150) circle.growth = false;
        } else {
          circle.radius -= 0.5;
          if (circle.radius < 50) circle.growth = true;
        }

        const gradient = ctx.createRadialGradient(
          circle.x, circle.y, 0,
          circle.x, circle.y, circle.radius
        );
        gradient.addColorStop(0, `hsla(${circle.hue}, 100%, 50%, 0)`);
        gradient.addColorStop(0.5, `hsla(${circle.hue}, 100%, 50%, 0.1)`);
        gradient.addColorStop(1, `hsla(${circle.hue}, 100%, 50%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      frame = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}