import React from 'react';

interface TerminalProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ children, className = '', title = 'bash' }) => {
    return (
        <div className={`rounded-xl overflow-hidden bg-space-900/90 backdrop-blur-xl border border-violet-500/20 font-mono text-sm ${className}`}>
            {/* Terminal header with traffic lights */}
            <div className="bg-space-800/80 px-4 py-3 flex items-center gap-3 border-b border-violet-500/10">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/30 hover:brightness-125 transition-all cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/30 hover:brightness-125 transition-all cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/30 hover:brightness-125 transition-all cursor-pointer" />
                </div>
                <div className="flex-1 text-center">
                    <span className="text-slate-500 text-xs font-medium tracking-wider">{title}</span>
                </div>
                <div className="w-16" /> {/* Spacer for symmetry */}
            </div>

            {/* Terminal content */}
            <div className="p-5 text-slate-300 relative">
                {/* Subtle shimmer overlay */}
                <div className="absolute inset-0 shimmer pointer-events-none opacity-30" />
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </div>
    );
};
