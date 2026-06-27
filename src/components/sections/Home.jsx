import { useEffect, useRef } from "react";
import Type from "../Type.jsx";
import portrait from "../../assets/portrait.png";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Floating particles
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.8,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.45 + 0.2,
    }));

    // Slow drifting rings
    const rings = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 60 + i * 45,
      dx: (Math.random() - 0.5) * 0.12,
      dy: (Math.random() - 0.5) * 0.12,
      opacity: 0.04 + Math.random() * 0.04,
      strokeWidth: 0.5 + Math.random() * 0.5,
    }));

    // Slow diagonal lines (static shimmer effect)
    const lines = Array.from({ length: 6 }, (_, i) => ({
      offset: i * 160,
      speed: 0.08 + Math.random() * 0.5,
      opacity: 0.03,
    }));

    let tick = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      tick++;

      // Diagonal shimmer lines
      lines.forEach((l) => {
        l.offset = (l.offset + l.speed) % (w + h);
        ctx.beginPath();
        ctx.strokeStyle = `rgba(139,92,246,${l.opacity})`;
        ctx.lineWidth = 1;
        const x0 = l.offset - h;
        ctx.moveTo(x0, h);
        ctx.lineTo(l.offset, 0);
        ctx.stroke();
      });

      // Drifting rings
      rings.forEach((ring) => {
        ring.x += ring.dx;
        ring.y += ring.dy;
        if (ring.x < -ring.r) ring.x = w + ring.r;
        if (ring.x > w + ring.r) ring.x = -ring.r;
        if (ring.y < -ring.r) ring.y = h + ring.r;
        if (ring.y > h + ring.r) ring.y = -ring.r;

        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139,92,246,${ring.opacity})`;
        ctx.lineWidth = ring.strokeWidth;
        ctx.stroke();
      });

      // Floating particles
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${p.opacity})`;
        ctx.fill();
      });

      // Soft teal accent particles (fewer, larger glow hints)
      particles.slice(0, 8).forEach((p, i) => {
        const pulse = Math.sin(tick * 0.012 + i) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45,212,191,${0.04 * pulse})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Animated motion background — z-0, behind everything */}
      <AnimatedBackground />

      {/* Subtle dot grid on top of canvas, under content */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 2px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">

        {/* LEFT SIDE */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl text-blue-400 font-bold mb-6">
            Hi there!!!
          </h1>

          <p className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
            My name is Gift Udofiah
          </p>

          <div className="mb-10 text-2xl md:text-3xl font-semibold">
            <Type />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contacts"
              className="border border-purple-500/50 text-purple-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex md:w-1/2">
          <img
            src={portrait}
            alt="Gift Udofiah"
          />
        </div>
      </div>
    </section>
  );
};