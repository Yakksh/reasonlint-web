import { CodeBlock } from '../components/docs/CodeBlock';
import { INSTALL_URLS } from '../config';

export const DocsQuickStart = () => {
    return (
        <div>
            <h1>Quick Start</h1>
            <p>Get ReasonLint up and running in under 2 minutes.</p>

            <h2>Prerequisites</h2>
            <ul>
                <li><strong>Git</strong> repository to analyze (not needed if you are reviewing a single file)</li>
                <li><strong>OpenRouter API key</strong> (<a href="https://openrouter.ai/keys">get one free</a>)</li>
            </ul>

            <h2>Step 1: Install</h2>
            <p>Run one of these commands in your terminal:</p>

            <h3>macOS / Linux</h3>
            <CodeBlock title="Terminal">
                {`curl -fsSL ${INSTALL_URLS.sh} | bash`}
            </CodeBlock>

            <h3>Windows (PowerShell)</h3>
            <CodeBlock title="PowerShell">
                {`irm ${INSTALL_URLS.ps1} | iex`}
            </CodeBlock>

            <p className="text-sm text-slate-400 mt-4">
                <strong>Alternative:</strong> You can also download the binary directly from the <a href="/docs/quick-start">releases page</a> for your platform.
            </p>

            <h2>Step 2: Configure API Key and Model</h2>
            <p>Set up your OpenRouter API key:</p>
            <CodeBlock>
                {`reasonlint auth`}
            </CodeBlock>
            <p>
                You'll be prompted for your API key (input is hidden), then asked which model to
                review with. If you're not sure, it lists the models OpenRouter is currently
                offering for free and you can pick one by number.
            </p>

            <h2>Step 3: Review Your Code</h2>
            <p>Navigate to a Git repository and run:</p>
            <CodeBlock>
                {`reasonlint review`}
            </CodeBlock>
            <p>
                That reviews everything you haven't committed yet &mdash; staged changes, unstaged
                changes, and untracked files. To narrow it down, or to review a file that hasn't
                changed at all:
            </p>
            <CodeBlock>
                {`# Just what you're about to commit
reasonlint review --staged

# Just your unstaged work
reasonlint review --unstaged

# One file, in full, changed or not
reasonlint review backend/main.py`}
            </CodeBlock>

            <h2>Example Output</h2>
            <div className="bg-slate-900 rounded-lg border border-slate-800 p-4 font-mono text-sm my-4 overflow-x-auto">
                <div className="text-slate-400">Analyzing with AI...</div>
                <div className="text-slate-700 mt-3">────────────────────────────────────────────</div>
                <div className="text-yellow-400 font-bold">● MEDIUM RISK</div>
                <div className="text-slate-500">2 signals · 1 high · 1 medium</div>
                <div className="text-slate-700">────────────────────────────────────────────</div>
                <div className="text-slate-300 my-3">Database query changes without a corresponding migration.</div>
                <div className="my-3">
                    <div>
                        <span className="text-slate-600">1</span>{' '}
                        <span className="text-red-400 font-bold">HIGH</span>{'   '}
                        <span className="text-slate-300">Irreversible Changes</span>
                    </div>
                    <div className="text-cyan-400 pl-5">db/queries.go:42</div>
                    <div className="text-slate-400 pl-5 mt-2">Adding a new column reference without a schema migration.</div>
                    <div className="text-slate-500 pl-5 mt-2">? Is there a migration to add this column?</div>
                </div>
                <div className="text-slate-700 mt-3">────────────────────────────────────────────</div>
                <div className="text-slate-500">minimax/minimax-m3:free · 1,234 + 456 = 1,690 tokens</div>
            </div>

            <h2>Next Steps</h2>
            <ul>
                <li>Learn all the <a href="/docs/commands">CLI commands</a></li>
                <li>Customize your <a href="/docs/config">configuration</a></li>
                <li>Understand the <a href="/docs/risks">risk taxonomy</a></li>
            </ul>
        </div>
    );
};
