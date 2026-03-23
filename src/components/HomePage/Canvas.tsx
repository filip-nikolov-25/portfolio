import React, { useEffect, useRef } from "react";

interface StarType {
  update(): void;
  draw(): void;
}

const SpaceCanvas = (props: React.CanvasHTMLAttributes<HTMLCanvasElement>) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const mouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: StarType[] = [];
    const starColors = ["#ffffff", "#ffe9c4", "#d4fbff", "#9c88ff", "#50c8ff"];

    class Star implements StarType {
      x: number;
      y: number;
      z: number;
      radius: number;
      baseRadius: number;
      color: string;
      velocity: number;
      opacity: number;
      pulseSpeed: number;

      constructor() {
        // Use the actual canvas width/height for placement
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.z = Math.random() * 1;
        this.baseRadius = Math.random() * 1.5 + 0.2;
        this.radius = this.baseRadius;
        this.color = starColors[Math.floor(Math.random() * starColors.length)];
        this.velocity = this.z * 0.5;
        this.opacity = Math.random();
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;

        if (this.z > 0.7) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = this.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.globalAlpha = 1;
      }

      update() {
        this.y -= this.velocity;
        this.opacity = 0.4 + Math.abs(Math.sin(Date.now() * this.pulseSpeed)) * 0.6;

        const dx = mouse.current.x - this.x;
        const dy = mouse.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          this.radius = Math.min(this.baseRadius * 2.5, this.radius + 0.1);
        } else {
          this.radius = Math.max(this.baseRadius, this.radius - 0.1);
        }

        // Reset star if it leaves the top
        if (this.y < -10) {
          this.y = canvas!.height + 10;
          this.x = Math.random() * canvas!.width;
        }

        this.draw();
      }
    }

    const init = () => {
      // Handle High-DPI displays (Retina) for sharpness
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      // Set actual drawing surface size
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;

      // Scale context to match CSS pixels
      ctx.scale(dpr, dpr);

      // Reset dimensions for the Star logic to match screen size
      // We use the CSS pixels for the star positions
      const screenArea = displayWidth * displayHeight;
      
      // Responsive Density: More stars for desktop, fewer for mobile
      // Roughly 1 star per 3000 pixels
      const starCount = Math.floor(screenArea / 3000);
      
      stars = [];
      for (let i = 0; i < Math.min(starCount, 800); i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      // Use CSS pixels for the gradient center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const radius = Math.max(window.innerWidth, window.innerHeight);

      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius
      );
      gradient.addColorStop(0, "#0d1b2a");
      gradient.addColorStop(0.5, "#0b0d17");
      gradient.addColorStop(1, "#020205");

      ctx.fillStyle = gradient;
      // Use the CSS dimensions for clearing
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      stars.forEach((star) => star.update());
      requestRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ display: "block", background: "#000", width: "100vw", height: "100vh" }}
      {...props}
    />
  );
};

export default SpaceCanvas;