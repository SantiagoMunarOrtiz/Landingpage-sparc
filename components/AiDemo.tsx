import React, { useState } from 'react';
import { generateDashboardInsight } from '../services/geminiService';
import { Sparkles, Send, Command, Terminal } from 'lucide-react';
import { LoadingState } from '../types';

const AiDemo: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoadingState(LoadingState.LOADING);
    setResponse(null);

    const result = await generateDashboardInsight(query);
    
    setResponse(result);
    setLoadingState(LoadingState.SUCCESS);
  };

  return (
    <section id="ai-demo" className="py-32 px-6 relative bg-black overflow-hidden border-t border-white/5">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(249,115,22,0.2)]">
          <Terminal className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-medium text-orange-100">Natural Language Insights</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Ask your data directly.
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-light">
          SPARC understands your operational context. Generate executive summaries or dig into production metrics instantly.
        </p>

        <div className="glass-panel p-1 rounded-2xl max-w-2xl mx-auto border border-white/10 shadow-2xl relative overflow-hidden group hover:border-orange-500/30 transition-colors duration-500">
          <form onSubmit={handleSearch} className="relative flex items-center bg-black/50 rounded-xl">
            <div className="pl-6 text-gray-500">
               <Command className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask for an EOM summary..."
              className="w-full bg-transparent border-none text-white placeholder-gray-500 py-5 pl-4 pr-16 focus:ring-0 focus:outline-none text-lg font-mono"
            />
            <button 
              type="submit"
              disabled={loadingState === LoadingState.LOADING}
              className="absolute right-3 p-2 bg-white/10 hover:bg-orange-500 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group-hover:bg-white/20 hover:!bg-orange-500"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>

          {/* AI Response Area */}
          <div className={`
            border-t border-white/5 bg-black/40 text-left transition-all duration-500 overflow-hidden
            ${(loadingState === LoadingState.LOADING || response) ? 'min-h-[120px] p-6 opacity-100' : 'h-0 p-0 opacity-0 border-none'}
          `}>
             {loadingState === LoadingState.LOADING && (
               <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-orange-500 text-sm font-mono mb-2">
                   <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                   ANALYZING_DATASET...
                 </div>
                 <div className="h-2 w-full bg-white/5 rounded overflow-hidden">
                   <div className="h-full bg-orange-500/50 animate-progress w-1/2" />
                 </div>
                 <div className="space-y-2 mt-2">
                    <div className="h-4 w-3/4 bg-white/5 rounded animate-pulse" />
                    <div className="h-4 w-1/2 bg-white/5 rounded animate-pulse" />
                 </div>
               </div>
             )}

             {loadingState === LoadingState.SUCCESS && response && (
               <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                 <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white tracking-wide">INSIGHT GENERATED</span>
                   </div>
                   <span className="text-xs text-gray-500 font-mono">0.42s</span>
                 </div>
                 <p className="text-gray-300 leading-relaxed font-light text-lg">
                   {response}
                 </p>
               </div>
             )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['Production Backlog Analysis', 'Staff Attendance Last Month', 'Generate EOM Report Summary'].map((suggestion) => (
            <button 
              key={suggestion}
              onClick={() => {
                setQuery(suggestion);
              }}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/30 transition-all cursor-pointer"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiDemo;