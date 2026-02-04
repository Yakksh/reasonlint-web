import { CodeBlock } from '../components/docs/CodeBlock';
import { INSTALL_URLS } from '../config';

export const DocsQuickStart = () => {
    return (
        <div>
            <h1>Quick Start</h1>
            <p>Get ReasonLint up and running in under 2 minutes.</p>

            <h2>Prerequisites</h2>
            <ul>
                <li><strong>Git</strong> repository to analyze</li>
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
                <strong>Alternative:</strong> You can also <a href="/releases/v1.0.0/">download the binary directly</a> for your platform.
            </p>

            <h2>Step 2: Configure API Key</h2>
            <p>Set up your OpenRouter API key:</p>
            <CodeBlock>
                {`reasonlint auth`}
            </CodeBlock>
            <p>You'll be prompted to enter your API key (input is hidden for security).</p>

            <h2>Step 3: Review Your Code</h2>
            <p>Navigate to a Git repository and review your staged changes:</p>
            <CodeBlock>
                {`# Stage some changes
git add .

# Run ReasonLint
reasonlint review --staged`}
            </CodeBlock>

            <h2>Example Output</h2>
            <div className="bg-slate-900 rounded-lg border border-slate-800 p-4 font-mono text-sm my-4 overflow-x-auto">
                <div className="text-slate-400">Analyzing with AI...</div>
                <div className="text-slate-600 my-2">{'='}</div>
                <div className="text-yellow-400 font-bold my-2">● Overall Risk: MEDIUM</div>
                <div className="text-slate-300 my-2">Database query changes without corresponding migration.</div>
                <div className="text-slate-400 my-4">Risk Signals (1 found):</div>
                <div className="pl-4 border-l-2 border-yellow-400/30 my-2">
                    <div className="text-slate-300">Irreversible Changes (1):</div>
                    <div className="text-slate-400 pl-4 mt-1">
                        → db/queries.go:42 [high]<br />
                        <span className="text-slate-500">Adding new column reference without schema migration</span><br />
                        <span className="text-cyan-400">? Is there a migration to add this column?</span>
                    </div>
                </div>
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
