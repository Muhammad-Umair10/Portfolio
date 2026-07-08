import React, { useEffect, useRef } from 'react';

const NeonCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // settings
    const config = {
      friction: 0.5,
      trails: 10,
      size: 15,
      dampening: 0.25,
      tension: 0.98,
    };

    // state
    const cursor = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let lines = [];
    let animationFrameId;

    class Node {
      constructor() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
      }
    }

    class Line {
      constructor(options) {
        this.spring = options.spring + (Math.random() * 0.1) - 0.05;
        this.friction = config.friction + (Math.random() * 0.01) - 0.005;
        this.nodes = [];
        for (let i = 0; i < config.size; i++) {
          const node = new Node();
          node.x = cursor.x;
          node.y = cursor.y;
          this.nodes.push(node);
        }
      }

      update() {
        let spring = this.spring;
        let node = this.nodes[0];

        node.vx += (cursor.x - node.x) * spring;
        node.vy += (cursor.y - node.y) * spring;

        for (let prev, i = 0, n = this.nodes.length; i < n; i++) {
          node = this.nodes[i];

          if (i > 0) {
            prev = this.nodes[i - 1];
            node.vx += (prev.x - node.x) * spring;
            node.vy += (prev.y - node.y) * spring;
            node.vx += prev.vx * config.dampening;
            node.vy += prev.vy * config.dampening;
          }

          node.vx *= this.friction;
          node.vy *= this.friction;
          node.x += node.vx;
          node.y += node.vy;
          spring *= config.tension;
        }
      }

      draw() {
        let x = this.nodes[0].x;
        let y = this.nodes[0].y;

        ctx.beginPath();
        ctx.moveTo(x, y);

        for (let i = 1, n = this.nodes.length - 2; i < n; i++) {
          const a = this.nodes[i];
          const b = this.nodes[i + 1];
          x = (a.x + b.x) * 0.5;
          y = (a.y + b.y) * 0.5;
          ctx.quadraticCurveTo(a.x, a.y, x, y);
        }

        const a = this.nodes[this.nodes.length - 2];
        const b = this.nodes[this.nodes.length - 1];
        ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);

        ctx.stroke();
        ctx.closePath();
      }
    }

    const initLines = () => {
      lines = [];
      for (let i = 0; i < config.trails; i++) {
        lines.push(new Line({ spring: 0.45 + (i / config.trails) * 0.025 }));
      }
    };

    const handleMouseMove = (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      cursor.x = e.touches[0].clientX;
      cursor.y = e.touches[0].clientY;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const render = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      // The neon pink/purple color from the image
      ctx.strokeStyle = '#ff9b1966';
      ctx.lineWidth = 1;
      ctx.shadowColor = 'rgba(177, 134, 16, 1)';
      ctx.shadowBlur = 10;

      for (let i = 0; i < config.trails; i++) {
        lines[i].update();
        lines[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('resize', resize);

    resize();
    initLines();
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      className="hidden lg:block"
    />
  );
};

export default NeonCursor;
