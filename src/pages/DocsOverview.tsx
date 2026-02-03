import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Settings, AlertTriangle } from 'lucide-react';

export const DocsOverview = () => {
    return (
        <div>
            <h1>Documentation</h1>
            <p className="text-lg text-slate-400 mb-8">
                ReasonLint is an AI-powered code review tool that identifies <strong>reasoning risks</strong> in your code changes.
                Unlike traditional linters that focus on syntax, ReasonLint catches hidden assumptions, missing failure modes, and logic flaws.
            </p>

            <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
                <QuickLink
                    to="/docs/quickstart"
                    icon={<Terminal className="text-cyan-400" />}
                    title="Quick Start"
                    description="Install and run your first review in 2 minutes"
                />
                <QuickLink
                    to="/docs/commands"
                    icon={<Settings className="text-emerald-400" />}
                    title="Commands"
                    description="Complete CLI reference"
                />
                <QuickLink
                    to="/docs/risks"
                    icon={<AlertTriangle className="text-amber-400" />}
                    title="Risk Taxonomy"
                    description="Understanding reasoning risks"
                />
            </div>

            <h2>How It Works</h2>
            <ol>
                <li><strong>Git Integration:</strong> ReasonLint reads your staged changes or commit diffs directly from Git.</li>
                <li><strong>AI Analysis:</strong> Changes are analyzed by an AI model (Claude, GPT-4, etc.) via OpenRouter.</li>
                <li><strong>Risk Report:</strong> You get a structured report identifying reasoning risks with explanations and questions.</li>
            </ol>

            <h2>Key Features</h2>
            <ul>
                <li><strong>Privacy-first:</strong> Your API key stays local. We never see your code.</li>
                <li><strong>CLI-native:</strong> Works entirely in your terminal. No web dashboards.</li>
                <li><strong>Model-agnostic:</strong> Use any model available on OpenRouter.</li>
                <li><strong>Semantic understanding:</strong> AI understands code context, not just keywords.</li>
            </ul>

            <h2>Risk Categories</h2>
            <p>ReasonLint classifies risks into five categories:</p>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>What It Means</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Hidden Assumptions</strong></td>
                        <td>Code assumes conditions that may not always hold</td>
                    </tr>
                    <tr>
                        <td><strong>Irreversible Changes</strong></td>
                        <td>Changes that are hard to undo (DB schema, API contracts)</td>
                    </tr>
                    <tr>
                        <td><strong>Missing Failure Modes</strong></td>
                        <td>Unhandled error cases or edge conditions</td>
                    </tr>
                    <tr>
                        <td><strong>Overgeneralization</strong></td>
                        <td>Solution is too broad and may cause unexpected behavior</td>
                    </tr>
                    <tr>
                        <td><strong>Confidence Mismatch</strong></td>
                        <td>Code complexity doesn't match confidence level</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const QuickLink = ({
    to,
    icon,
    title,
    description
}: {
    to: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}) => (
    <Link
        to={to}
        className="group block p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors"
    >
        <div className="flex items-center gap-3 mb-2">
            {icon}
            <span className="font-semibold text-white group-hover:text-cyan-400 transition-colors">{title}</span>
            <ArrowRight size={16} className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all ml-auto" />
        </div>
        <p className="text-sm text-slate-400">{description}</p>
    </Link>
);
