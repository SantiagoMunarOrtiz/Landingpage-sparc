import React from 'react';
import { Button } from './Button';
import { ChevronRight, Activity, BarChart3, Lock, Zap, PieChart, TrendingUp, Cpu, Server, Shield, FileText, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-black perspective-grid-container">
      
      {/* --- 3D Background World --- */}
      
      {/* 1. The Moving Grid Floor */}
      <div className="absolute inset-0 z-0">
         <div className="moving-grid opacity-30"></div>
      </div>
      
      {/* 2. The Horizon Glow */}
      <div className="absolute top-[20%] left-0 right-0 h-[500px] bg-gradient-to-b from-orange-600/20 via-orange-900/5 to-transparent blur-[120px] -z-10" />

      {/* 3. Rotating Orbital Systems (The "Core") */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-white/5 animate-spin-slow pointer-events-none -z-10 opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-dashed border-white/10 animate-spin-reverse-slow pointer-events-none -z-10 opacity-30"></div>

      {/* 4. Floating 3D Background Objects (Depth decoration) */}
      <div className="absolute top-[15%] left-[10%] p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 animate-float opacity-30 rotate-12 -z-10">
         <FileText className="w-12 h-12 text-orange-500/50" />
      </div>
      <div className="absolute bottom-[20%] right-[10%] p-6 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-float-delayed opacity-20 -rotate-12 -z-10">
         <Users className="w-16 h-16 text-blue-500/50" />
      </div>


      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
           {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md mx-auto lg:mx-0 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-semibold text-orange-400 tracking-wider uppercase">New Reporting Hub 2.0</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="text-white drop-shadow-xl">The future of</span> <br />
            <span className="text-gradient-orange drop-shadow-2xl filter">EOM Reporting.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Faster insights, cleaner workflows, and zero-disruption migration. Experience the modern analytics suite designed for empowered teams.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button size="lg" className="group w-full sm:w-auto relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Launch Reporting Hub
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Documentation
            </Button>
          </div>
          
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
             <div className="flex items-center gap-2">
               <Lock className="w-4 h-4 text-gray-400" /> <span>SOC2 Secured</span>
             </div>
             <div className="flex items-center gap-2">
               <Zap className="w-4 h-4 text-orange-400" /> <span>Real-time Sync</span>
             </div>
             <div className="flex items-center gap-2">
               <Server className="w-4 h-4 text-gray-400" /> <span>Legacy Compatible</span>
             </div>
          </div>
        </div>

        {/* Right Content: 3D Dashboard Composition */}
        <div className="relative perspective-1000 h-[500px] w-full flex items-center justify-center lg:justify-end">
          
          {/* Main Dashboard Card */}
          <div className="relative w-full max-w-lg animate-float-slow preserve-3d hover:scale-[1.02] transition-transform duration-700">
            <div className="glass-card rounded-2xl p-1 overflow-hidden relative shadow-[0_20px_50px_rgba(249,115,22,0.15)]">
              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none animate-scan opacity-20 z-20" />
              
              <div className="bg-[#050505] rounded-xl overflow-hidden border border-white/5 relative">
                {/* Header */}
                <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs text-gray-500 font-mono">Production_Overview_v2.json</div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                  {/* Big Chart */}
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Production Backlog</div>
                        <div className="text-2xl font-bold text-white">1,240 Tasks</div>
                      </div>
                      <div className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">On Track</div>
                    </div>
                    <div className="h-32 w-full bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg border border-orange-500/20 relative overflow-hidden">
                       <div className="absolute inset-0 bg-orange-500/5 animate-pulse"></div>
                       {/* Abstract chart line */}
                       <svg className="absolute inset-0 w-full h-full text-orange-500" preserveAspectRatio="none">
                         <path d="M0 80 C 20 80, 40 40, 60 50 S 80 20, 100 30" fill="none" stroke="currentColor" strokeWidth="2" />
                         <path d="M0 80 C 20 80, 40 40, 60 50 S 80 20, 100 30 L 100 128 L 0 128 Z" fill="url(#gradient)" opacity="0.2" />
                         <defs>
                           <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                             <stop offset="0%" stopColor="currentColor" />
                             <stop offset="100%" stopColor="transparent" />
                           </linearGradient>
                         </defs>
                       </svg>
                    </div>
                  </div>

                  {/* Grid of stats */}
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                        <Users className="w-5 h-5 text-blue-400 mb-2" />
                        <div className="text-lg font-bold">42/45</div>
                        <div className="text-xs text-gray-500">Staff Attendance</div>
                     </div>
                     <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                        <Activity className="w-5 h-5 text-orange-400 mb-2" />
                        <div className="text-lg font-bold">98%</div>
                        <div className="text-xs text-gray-500">Efficiency</div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Widget 1: Top Right */}
          <div className="absolute -right-4 -top-12 animate-float glass-card p-4 rounded-xl border-l-4 border-l-orange-500 max-w-[180px] hidden md:block shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <BarChart3 className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Export Ready</div>
                <div className="text-sm font-bold text-white">PDF & Excel</div>
              </div>
            </div>
          </div>

          {/* Floating Widget 2: Bottom Left */}
          <div className="absolute -left-12 bottom-12 animate-float-delayed glass-card p-4 rounded-xl max-w-[200px] hidden md:block shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3 mb-2">
              <PieChart className="w-4 h-4 text-gray-400" />
              <div className="text-xs text-gray-400">Task Distribution</div>
            </div>
            <div className="flex gap-1 h-2 rounded-full overflow-hidden w-full">
              <div className="bg-orange-500 w-[75%]" />
              <div className="bg-gray-600 w-[25%]" />
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-gray-500">
              <span>Completed</span>
              <span>Pending</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;