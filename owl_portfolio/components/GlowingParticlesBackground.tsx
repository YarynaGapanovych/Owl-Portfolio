"use client";

import { useEffect, useRef } from "react";

export default function GlowingParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    // Create particles array first
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      glowColor: string;
    }> = [];

    const resizeCanvas = () => {
      const oldCenterX = centerX;
      const oldCenterY = centerY;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;

      // Adjust particle positions relative to new center (only if particles exist)
      if (particles.length > 0) {
        const dx = centerX - oldCenterX;
        const dy = centerY - oldCenterY;
        particles.forEach((p) => {
          p.x += dx;
          p.y += dy;
        });
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation variables
    let animationFrame: number;

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      // Large blue particles - foreground layer
      for (let i = 0; i < 10; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: 3 + Math.random() * 4,
          color: "rgba(31, 91, 151, 0.5)",
          glowColor: "rgba(31, 91, 151, 0.4)",
        });
      }
      // Medium orange particles - mid layer
      for (let i = 0; i < 20; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: 2 + Math.random() * 3,
          color: "rgba(220, 95, 25, 0.4)",
          glowColor: "rgba(220, 95, 25, 0.3)",
        });
      }
      // Small blue particles - background layer for depth
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: 1 + Math.random() * 1.5,
          color: "rgba(31, 91, 151, 0.25)",
          glowColor: "rgba(31, 91, 151, 0.15)",
        });
      }
      // Tiny orange particles - deep background layer
      for (let i = 0; i < 20; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: 0.5 + Math.random() * 1,
          color: "rgba(220, 95, 25, 0.2)",
          glowColor: "rgba(220, 95, 25, 0.1)",
        });
      }
      // Very small white/gray particles - deepest layer
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: 0.5 + Math.random() * 0.8,
          color: "rgba(197, 195, 198, 0.15)",
          glowColor: "rgba(197, 195, 198, 0.08)",
        });
      }
    };

    initParticles();

    const draw = () => {
      // Clear canvas completely for transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position with random movement
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Add slight random drift for more organic movement
        particle.vx += (Math.random() - 0.5) * 0.03;
        particle.vy += (Math.random() - 0.5) * 0.03;

        // Limit velocity
        particle.vx = Math.max(-1.5, Math.min(1.5, particle.vx));
        particle.vy = Math.max(-1.5, Math.min(1.5, particle.vy));

        // Bounce off canvas edges - move freely within the block
        const margin = 20;
        if (particle.x < margin) {
          particle.x = margin;
          particle.vx = Math.abs(particle.vx) * 0.8;
        } else if (particle.x > canvas.width - margin) {
          particle.x = canvas.width - margin;
          particle.vx = -Math.abs(particle.vx) * 0.8;
        }

        if (particle.y < margin) {
          particle.y = margin;
          particle.vy = Math.abs(particle.vy) * 0.8;
        } else if (particle.y > canvas.height - margin) {
          particle.y = canvas.height - margin;
          particle.vy = -Math.abs(particle.vy) * 0.8;
        }

        // Draw glow effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3,
        );
        gradient.addColorStop(0, particle.glowColor);
        gradient.addColorStop(
          0.5,
          particle.glowColor.replace("0.8", "0.4").replace("0.6", "0.2"),
        );
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright center point
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
