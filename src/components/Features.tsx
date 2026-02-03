import React from 'react';
import { Brain, Shield, Terminal as TerminalIcon, AlertTriangle } from 'lucide-react';

export const Features = () => {
    return (
        <div id="features" className="relative bg-space-900 py-24 scroll-mt-16 overflow-hidden">
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-space-950 via-transparent to-space-950 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-4">
                        Features
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                        Why <span className="gradient-text">ReasonLint</span>?
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Code reviews are hard. Humans get tired. ReasonLint acts as a tireless, skeptical critic for your logic.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard
                        icon={<Brain size={28} />}
                        title="AI Analysis"
                        description="Uses modern LLMs to reason about your code changes, not just parse syntax trees."
                        gradient="from-violet-500 to-purple-500"
                    />
                    <FeatureCard
                        icon={<Shield size={28} />}
                        title="Privacy First"
                        description="BYOK (Bring Your Own Key). Your API keys stay local. We never see your code."
                        gradient="from-emerald-400 to-teal-500"
                    />
                    <FeatureCard
                        icon={<TerminalIcon size={28} />}
                        title="CLI Workflow"
                        description="Integrates seamlessly into your terminal. No web dashboards to context switch to."
                        gradient="from-amber-400 to-orange-500"
                    />
                    <FeatureCard
                        icon={<AlertTriangle size={28} />}
                        title="Risk Taxonomy"
                        description="Classifies risks into hidden assumptions, irreversible changes, and missing guards."
                        gradient="from-rose-400 to-pink-500"
                    />
                </div>
            </div>
        </div>
    );
};

const FeatureCard = ({
    icon,
    title,
    description,
    gradient
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
}) => (
    <div className="glass-card p-6 rounded-2xl group">
        <div className={`feature-icon mb-5 bg-gradient-to-br ${gradient} bg-opacity-20`}>
            <div className="text-white">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
            {title}
        </h3>
        <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
);
