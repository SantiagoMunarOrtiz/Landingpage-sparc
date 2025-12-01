import React, { useRef, useState } from 'react';
import { 
  BarChart2, 
  Cpu, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Database,
  ArrowUpRight,
  MessageSquare,
  FileDown,
  RefreshCw,
  Smartphone
} from 'lucide-react';

const features = [
  {
    title: "Analytics Intelligence",
    description: "Pareto analysis, responsive charts, and on-the-fly visibility toggles. Focus on the 'vital few' metrics that matter.",
    icon: BarChart2,
    colSpan: "md:col-span-2",
  },
  {
    title: "Contextual Comments",
    description: "Slide-over panels let SMEs annotate data right where it lives. Comments are preserved in PDF exports.",
    icon: MessageSquare,
    colSpan: "md:col-span-1",
  },
  {
    title: "Smart Exports",
    description: "One-click generation of PDFs and Excel files with frozen headers, auto-fit columns, and full audit trails.",
    icon: FileDown,
    colSpan: "md:col-span-1",
  },
  {
    title: "Zero-Disruption Migration",
    description: "Run Legacy EOM reports alongside the new hub. Switch instantly to ensure continuity.",
    icon: RefreshCw,
    colSpan: "md:col-span-2",
  },
  {
    title: "Mobile-First Filters",
    description: "Full-screen bottom sheet filters with keyboard shortcuts (Cmd+K) designed for power users on the go.",
    icon: Smartphone,
    colSpan: "md:col-span-3",
  },
];

interface TiltCardProps {
  feature: typeof features[0];
  index: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ feature, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    // Calculate rotation: Y axis rotation based on X position, X axis rotation based on Y position
    setRotateX(yPct * -12); 
    setRotateY(xPct * 12);
    setOpacity(1);
    
    // Set CSS variables for the spotlight effect
    ref.current.style.setProperty("--mouse-x", `${mouseX}px`);
    ref.current.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setOpacity(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${feature.colSpan} relative group perspective-1000 h-full`}
      style={{ perspective: "1000px" }}
    >
      <div 
        className="h-full w-full bg-[#080808] border border-white/10 rounded-3xl p-8 relative overflow-hidden transition-all duration-200 ease-out preserve-3d shadow-xl"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
        }}
      >
        {/* Spotlight Effect */}
        <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
            style={{
                background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(249, 115, 22, 0.1), transparent 40%)`
            }}
        />
        
        {/* Border Glow via pseudo element logic handled by parent padding or inner content, 
            here simplifying to inner shadow for performance */}
        <div 
             className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
             style={{
                 boxShadow: "inset 0 0 40px rgba(249, 115, 22, 0.05)"
             }}
        />

        {/* Content Layer - Floating with Parallax */}
        <div className="relative z-10 flex flex-col h-full justify-between" style={{ transform: "translateZ(20px)" }}>
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <feature.icon className="w-6 h-6 text-gray-400 group-hover:text-orange-400 transition-colors" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-white tracking-tight group-hover:text-orange-100 transition-colors">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              {feature.description}
            </p>
          </div>

          <div className="mt-8 flex items-center text-sm font-medium text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 px-6 relative bg-black overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
            <div className="absolute w-[800px] h-[800px] -top-[400px] -right-[200px] bg-orange-900/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute w-[600px] h-[600px] bottom-[0px] -left-[200px] bg-blue-900/5 rounded-full blur-[100px]"></div>
            
            {/* Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-20" 
                style={{ 
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', 
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
                }} 
            />
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 relative">
          <div className="absolute -left-10 -top-10 w-20 h-20 bg-orange-500/20 blur-xl rounded-full"></div>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 relative z-10">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Operations</span>. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Designed for Scale.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-xl font-light border-l-2 border-orange-500/30 pl-6">
            A complete suite of intelligent tools unified in one powerful dashboard. 
            Interactive filters, legacy continuity, and enterprise-grade security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {features.map((feature, index) => (
            <TiltCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;