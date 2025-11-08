import React, { useEffect, useRef } from 'react';

export const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star properties
    interface Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      brightness: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
    }

    // Create stars
    const stars: Star[] = [];
    const numStars = Math.floor((canvas.width * canvas.height) / 3000);

    const colors = [
      'rgba(255, 255, 255, 1)',
      'rgba(173, 216, 230, 1)',
      'rgba(255, 244, 229, 1)',
      'rgba(255, 221, 180, 1)',
    ];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.05 + 0.01,
        brightness: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: 0,
        pulseSpeed: Math.random() * 0.04 + 0.01,
      });
    }

    // Animation
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.globalAlpha = star.brightness + Math.sin(star.pulse) * 0.2;
        ctx.fillStyle = star.color;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update star position for subtle movement
        star.y += star.speed;
        star.pulse += star.pulseSpeed;
        
        // Reset star position if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
    />
  );
};