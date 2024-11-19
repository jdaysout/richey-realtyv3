import React, { useEffect, useRef, useCallback } from 'react';

export default function DottedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const dotsRef = useRef<{ x: number; y: number; speed: number }[]>([]);
  const rafRef = useRef<number>();

  const createDots = useCallback((width: number, height: number) => {
    const numberOfDots = Math.floor((width * height) / 15000);
    return Array.from({ length: numberOfDots }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.5 + Math.random(),
    }));
  }, []);

  const drawDots = useCallback((
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    dots: { x: number; y: number; speed: number }[]
  ) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';

    dots.forEach(dot => {
      dot.y -= dot.speed;
      if (dot.y < 0) dot.y = canvas.height;

      const offsetX = (mouseRef.current.x - canvas.width / 2) * 0.02;
      const x = dot.x + offsetX;

      ctx.beginPath();
      ctx.arc(x, dot.y, 1, 0, Math.PI * 2);
      ctx.fill();
    });

    rafRef.current = requestAnimationFrame(() => drawDots(ctx, canvas, dots));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dotsRef.current = createDots(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    drawDots(ctx, canvas, dotsRef.current);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [createDots, drawDots]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: 'linear-gradient(to bottom, #000000, #111111)' }}
    />
  );
}