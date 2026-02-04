import { useState, useEffect, useMemo } from 'react';
import { Copy, Check, Terminal, Zap, Apple, Monitor } from 'lucide-react';
import { INSTALL_URLS } from '../config';

type Platform = 'macos' | 'linux' | 'windows';

const detectPlatform = (): Platform => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('win')) return 'windows';
    if (ua.includes('mac')) return 'macos';
    return 'linux';
};

const getPlatformConfig = (installUrls: typeof INSTALL_URLS) => ({
    macos: {
        name: 'macOS',
        icon: Apple,
        command: `curl -fsSL ${installUrls.sh} | bash`,
        color: 'text-slate-300',
    },
    linux: {
        name: 'Linux',
        icon: Terminal,
        command: `curl -fsSL ${installUrls.sh} | bash`,
        color: 'text-orange-300',
    },
    windows: {
        name: 'Windows',
        icon: Monitor,
        command: `irm ${installUrls.ps1} | iex`,
        color: 'text-blue-300',
    },
});

export const Install = () => {
    const [platform, setPlatform] = useState<Platform>('macos');
    const [copied, setCopied] = useState(false);

    const platformConfig = useMemo(() => getPlatformConfig(INSTALL_URLS), []);

    useEffect(() => {
        setPlatform(detectPlatform());
    }, []);

    const config = platformConfig[platform];
    const IconComponent = config.icon;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(config.command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div id="install" className="relative bg-space-950 py-24 scroll-mt-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-violet-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-5xl relative z-10">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-4">
                        <Zap size={14} />
                        One Command Install
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                        Get <span className="gradient-text">Started</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Install ReasonLint in seconds.
                    </p>
                </div>

                {/* Platform Tabs */}
                <div className="flex justify-center gap-2 mb-6">
                    {(Object.keys(platformConfig) as Platform[]).map((p) => {
                        const cfg = platformConfig[p];
                        const Icon = cfg.icon;
                        return (
                            <button
                                key={p}
                                onClick={() => setPlatform(p)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${platform === p
                                    ? 'bg-violet-500/20 border border-violet-500/40 text-white'
                                    : 'bg-space-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600'
                                    }`}
                            >
                                <Icon size={16} />
                                <span className="text-sm font-medium">{cfg.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Install Command */}
                <div className="glass-card rounded-2xl overflow-hidden group">
                    <div className="flex justify-between items-center px-6 py-4 bg-space-800/50 border-b border-violet-500/10">
                        <div className="flex items-center gap-3">
                            <IconComponent size={18} className="text-violet-400" />
                            <h3 className="font-semibold text-slate-200">
                                Install on {config.name}
                            </h3>
                        </div>
                        <button
                            onClick={copyToClipboard}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/20 text-slate-400 hover:text-white transition-all duration-200"
                            title="Copy command"
                        >
                            {copied ? (
                                <>
                                    <Check size={16} className="text-emerald-400" />
                                    <span className="text-xs text-emerald-400">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy size={16} />
                                    <span className="text-xs">Copy</span>
                                </>
                            )}
                        </button>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <pre className="text-sm font-mono">
                            <div className="flex gap-3">
                                <span className="text-slate-600 select-none">
                                    {platform === 'windows' ? 'PS>' : '$'}
                                </span>
                                <span className={config.color}>{config.command}</span>
                            </div>
                        </pre>
                    </div>
                </div>

                {/* Requirements note */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-space-800/50 border border-slate-700/50">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <p className="text-slate-400 text-sm">
                            Requires an{' '}
                            <a
                                href="https://openrouter.ai/keys"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-300 hover:text-pink-200 transition-colors"
                            >
                                OpenRouter API key
                            </a>
                            . Run <code className="text-violet-300 bg-violet-500/10 px-1.5 py-0.5 rounded">reasonlint auth</code> after install.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};
