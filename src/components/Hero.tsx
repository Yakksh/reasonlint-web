import { Terminal } from './Terminal';
import { ChevronRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const TypingAnimation = () => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = 'reasonlint review --staged';

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 80);

        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <span className="text-white">
            {displayText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-violet-400`}>▊</span>
        </span>
    );
};

export const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-space-950 pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Animated background orbs */}
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />

            {/* Grid background */}
            <div className="grid-bg" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1 text-center lg:text-left animate-in">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6 animate-in-delayed">
                            <Sparkles size={14} className="text-violet-400" />
                            <span className="text-sm text-violet-300">AI-Powered Code Analysis</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                            Code review for{' '}
                            <span className="gradient-text">reasoning risks</span>.
                        </h1>
                        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Traditional linters catch syntax errors. ReasonLint catches{' '}
                            <span className="text-violet-300">hidden assumptions</span>,{' '}
                            <span className="text-pink-300">missing failure modes</span>, and{' '}
                            <span className="text-rose-300">logic flaws</span> using AI.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <a
                                href="#install"
                                className="btn-glow px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2 text-lg"
                            >
                                Get Started <ChevronRight size={20} />
                            </a>
                            <a
                                href="#features"
                                className="px-6 py-3 rounded-full border border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-2"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 w-full max-w-lg lg:max-w-none animate-slide-in">
                        <Terminal title="reasonlint review --staged" className="terminal-glow">
                            <div className="space-y-3">
                                <div className="flex gap-2">
                                    <span className="text-violet-400">➜</span>
                                    <TypingAnimation />
                                </div>
                                <div className="text-slate-500 italic flex items-center gap-2">
                                    <span className="inline-block w-4 h-4 border-2 border-violet-500 border-t-transparent rounded-full animate-spin"></span>
                                    Analyzing 3 changed files...
                                </div>
                                <br />
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                                    <span className="text-amber-400 font-bold tracking-wide">POTENTIAL REASONING RISK</span>
                                </div>
                                <div className="pl-4 border-l-2 border-gradient-to-b from-amber-400/50 to-orange-500/30 bg-amber-500/5 rounded-r-lg py-2 pr-3">
                                    <div className="text-slate-300 font-mono text-sm">
                                        <span className="text-violet-400">src/</span>
                                        <span className="text-pink-300">payment.go</span>
                                        <span className="text-slate-500">:</span>
                                        <span className="text-amber-300">45</span>
                                    </div>
                                    <div className="text-slate-400 mt-2 text-sm leading-relaxed">
                                        <span className="text-rose-300 font-medium">Hidden Assumption:</span>{' '}
                                        You are retrying the payment call, but verify if{' '}
                                        <code className="code-highlight text-xs">chargeUser</code>{' '}
                                        is idempotent.
                                    </div>
                                </div>
                            </div>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    );
};
