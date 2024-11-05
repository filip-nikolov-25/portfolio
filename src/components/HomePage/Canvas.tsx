import React, { useEffect, useRef } from "react";

interface CircleType {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  minRadius: number;
  opacity: number;
  update(): void;
}

const Canvas = (props: React.CanvasHTMLAttributes<HTMLCanvasElement>) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null); 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        class Circle {
          x: number;
          y: number;
          dx: number;
          dy: number;
          radius: number;
          minRadius: number;
          color: string;
          opacity: number;

          constructor(x: number, y: number, dx: number, dy: number, radius: number) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.minRadius = radius;
            this.color = circleColorsArr[Math.floor(Math.random() * circleColorsArr.length)];
            this.opacity = 1;
          }

          draw() {
            if (context) {
              context.beginPath();
              context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
              context.fillStyle = this.color;
              context.globalAlpha = this.opacity;
              context.shadowBlur = this.radius > 3 ? 30 : 10; 
              context.shadowColor = this.color;
              context.fill();
              context.globalAlpha = 1;
            }
          }

          update() {
      
            if (this.x + this.radius > canvas!.width || this.x - this.radius < 0) {
              this.dx = -this.dx;
            }
            if (this.y + this.radius > canvas!.height || this.y - this.radius < 0) {
              this.dy = -this.dy;
            }
            this.x += this.dx * 0.5; 
            this.y += this.dy * 0.5;


            const distanceX = Math.abs(mouseMove.x - this.x);
            const distanceY = Math.abs(mouseMove.y - this.y);
            if (distanceX < 50 && distanceY < 50) {
              if (this.radius < maxRadius) {
                this.radius += 0.5;
              }
            } else if (this.radius > this.minRadius) {
              this.radius -= 0.2;
            }

            this.draw();
          }
        }

        function animate() {
          requestRef.current = requestAnimationFrame(animate);

          const gradient = context!.createLinearGradient(0, 0, 0, canvas!.height);
          gradient.addColorStop(0, "#0a0c2a");
          gradient.addColorStop(0.3, "#1d1147");
          gradient.addColorStop(0.7, "#340068");
          gradient.addColorStop(1, "#0a0c2a");

          context!.fillStyle = gradient;
          context!.fillRect(0, 0, canvas!.width, canvas!.height);

          circleArr.forEach((circle) => circle.update());
        }

        const mouseMove = { x: 0, y: 0 };
        const maxRadius = 10;
        const circleColorsArr = ["#ffffff", "#f0e130", "#ff5f56", "#9c88ff", "#50c8ff", "#b8fffc"];
        const circleArr: CircleType[] = [];

        function initializeCircles() {
          circleArr.length = 0; 
          for (let i = 0; i < 100; i++) {
            const radius = Math.random() * 2 + 1;
            const x = Math.random() * (canvas!.width - radius * 2) + radius;
            const y = Math.random() * (canvas!.height - radius * 2) + radius;
            const dx = (Math.random() - 0.5) * 0.5;
            const dy = (Math.random() - 0.5) * 0.5;

            circleArr.push(new Circle(x, y, dx, dy, radius));
          }

          for (let i = 0; i < 4; i++) {
            const radius = Math.random() * 30 + 15;
            const x = Math.random() * (canvas!.width - radius * 2) + radius;
            const y = Math.random() * (canvas!.height - radius * 2) + radius;
            const dx = (Math.random() - 0.5) * 0.2;
            const dy = (Math.random() - 0.5) * 0.2;
            circleArr.push(new Circle(x, y, dx, dy, radius));
          }
        }


        initializeCircles();
        animate();

      
        const handleResize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          initializeCircles();
        };

 
        const handleMouseMove = (e: MouseEvent) => {
          mouseMove.x = e.clientX;
          mouseMove.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("resize", handleResize);
          if (requestRef.current) {
            cancelAnimationFrame(requestRef.current); 
          }
        };
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      {...props}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ display: "block" }} 
    />
  );
};

export default Canvas;
