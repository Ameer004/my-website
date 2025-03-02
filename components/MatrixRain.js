import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const characters = '01';
    const fontSize = 10;
    const columns = width / fontSize;
    const drops = new Array(Math.floor(columns)).fill(0);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, x) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, x * fontSize, y * fontSize);
        if (y * fontSize > height && Math.random() > 0.975) {
          drops[x] = 0;
        } else {
          drops[x]++;
        }
      });
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 -z-10" />;
}