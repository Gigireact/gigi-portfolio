import { useEffect, useRef } from "react";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiTypescript } from "react-icons/si";
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

    // Slow diagonal lines 
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

      // Soft teal accent particles 
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


// Outer ring -> rotates clockwise
const OUTER_ICONS = [
  { name: "React", Icon: FaReact, color: "#61dafb" },
  { name: "Node.js", Icon: FaNodeJs, color: "#68a063" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "Express", Icon: SiExpress, color: "#e5e7eb" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
];

// Inner ring -> rotates anticlockwise
const INNER_ICONS = [
  { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "HTML5", Icon: FaHtml5, color: "#e34f26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572b6" },
];

const OrbitRing = ({ icons, radius, size, direction, duration, dashed }) => {
  const step = 360 / icons.length;
  const spin = direction === "cw" ? "orbit-cw" : "orbit-ccw";
  const counter = direction === "cw" ? "orbit-ccw" : "orbit-cw";

  return (
    <div
      className="orbit-ring absolute left-1/2 top-1/2 rounded-full"
      style={{
        width: size,
        height: size,
        marginLeft: `calc(${size} / -2)`,
        marginTop: `calc(${size} / -2)`,
        border: `1px ${dashed ? "dashed" : "solid"} rgba(139,92,246,0.35)`,
        animation: `${spin} ${duration}s linear infinite`,
        "--r": radius,
      }}
    >
      {icons.map(({ name, Icon, color }, i) => {
        const angle = i * step;
        return (
          // Static placement on the circle
          <div
            key={name}
            className="absolute left-1/2 top-1/2"
            style={{
              width: 0,
              height: 0,
              transform: `rotate(${angle}deg) translateY(calc(var(--r) * -1)) rotate(${-angle}deg)`,
            }}
          >
            {/* Counter-rotation keeps icon + label upright */}
            <div
              className="orbit-badge flex flex-col items-center gap-1"
              style={{
                width: 64,
                marginLeft: -32,
                marginTop: -24,
                animation: `${counter} ${duration}s linear infinite`,
              }}
            >
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-[#12122a]/90 backdrop-blur shadow-lg"
                style={{ boxShadow: `0 0 18px ${color}22` }}
              >
                <Icon size={22} color={color} />
              </div>
              <span className="text-[10px] text-gray-300 leading-none">
                {name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const OrbitPortrait = () => (
  <div
    className="relative mx-auto"
    style={{
      // overall orbit diameter 
      "--orbit": "min(88vw, 480px)",
      width: "var(--orbit)",
      height: "var(--orbit)",
    }}
  >
    <style>{`
      @keyframes orbit-cw  { from { transform: rotate(0deg); }   to { transform: rotate(360deg); } }
      @keyframes orbit-ccw { from { transform: rotate(0deg); }   to { transform: rotate(-360deg); } }
      .orbit-wrap:hover .orbit-ring,
      .orbit-wrap:hover .orbit-badge { animation-play-state: paused !important; }
    `}</style>

    <div className="orbit-wrap absolute inset-0">
      {/* Outer ring: clockwise */}
      <OrbitRing
        icons={OUTER_ICONS}
        size="var(--orbit)"
        radius="calc(var(--orbit) / 2)"
        direction="cw"
        duration={40}
      />

      {/* Inner ring: anticlockwise */}
      <OrbitRing
        icons={INNER_ICONS}
        size="calc(var(--orbit) * 0.7)"
        radius="calc(var(--orbit) * 0.35)"
        direction="ccw"
        duration={30}
        dashed
      />
    </div>

    {/* Portrait in the centre */}
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-2 border-purple-500/40 shadow-[0_0_40px_rgba(139,92,246,0.35)] bg-[#12122a]"
      style={{
      width: "calc(var(--orbit) * 0.58)",
      height: "calc(var(--orbit) * 0.58)",
    }}
    >
      <img
        src={portrait}
        alt="Gift Udofiah"
        className="w-full h-full object-cover object-top"
      />
    </div>
  </div>
);


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

      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10 py-16">

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
        <div className="flex md:w-1/2 items-center justify-center">
          <OrbitPortrait />
        </div>
      </div>
    </section>
  );
};
