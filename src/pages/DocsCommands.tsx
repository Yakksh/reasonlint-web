import { CodeBlock } from '../components/docs/CodeBlock';

export const DocsCommands = () => {
    return (
        <div>
            <h1>Commands</h1>
            <p>Complete reference for all ReasonLint CLI commands.</p>

            <h2 id="review">reasonlint review</h2>
            <p>The main command for analyzing code changes.</p>

            <h3>Usage</h3>
            <CodeBlock>
                {`reasonlint review [base]...[head] [flags]`}
            </CodeBlock>

            <h3>Flags</h3>
            <table>
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Description</th>
                        <th>Default</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>--staged</code></td>
                        <td>Review staged (git add) changes</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td><code>--model</code></td>
                        <td>AI model to use</td>
                        <td>From config</td>
                    </tr>
                    <tr>
                        <td><code>--output</code></td>
                        <td>Output format (text/json)</td>
                        <td>text</td>
                    </tr>
                </tbody>
            </table>

            <h3>Examples</h3>
            <CodeBlock title="Review staged changes">
                {`reasonlint review --staged`}
            </CodeBlock>

            <CodeBlock title="Review last commit">
                {`reasonlint review HEAD~1...HEAD`}
            </CodeBlock>

            <CodeBlock title="Review branch changes">
                {`reasonlint review main...feature-branch`}
            </CodeBlock>

            <CodeBlock title="Use specific model">
                {`reasonlint review --model anthropic/claude-sonnet-4 --staged`}
            </CodeBlock>

            <hr className="border-slate-800 my-8" />

            <h2 id="auth">reasonlint auth</h2>
            <p>Configure your OpenRouter API key.</p>

            <h3>Usage</h3>
            <CodeBlock>
                {`reasonlint auth [flags]`}
            </CodeBlock>

            <h3>Flags</h3>
            <table>
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>--status</code></td>
                        <td>Check if API key is configured</td>
                    </tr>
                </tbody>
            </table>

            <h3>Examples</h3>
            <CodeBlock title="Set API key interactively">
                {`reasonlint auth`}
            </CodeBlock>

            <CodeBlock title="Check API key status">
                {`reasonlint auth --status`}
            </CodeBlock>

            <hr className="border-slate-800 my-8" />

            <h2 id="config">reasonlint config</h2>
            <p>View and manage configuration.</p>

            <h3>Subcommands</h3>
            <table>
                <thead>
                    <tr>
                        <th>Subcommand</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>config</code></td>
                        <td>Display current configuration</td>
                    </tr>
                    <tr>
                        <td><code>config init</code></td>
                        <td>Create default configuration file</td>
                    </tr>
                    <tr>
                        <td><code>config set &lt;key&gt; &lt;value&gt;</code></td>
                        <td>Set a configuration value</td>
                    </tr>
                </tbody>
            </table>

            <h3>Configurable Keys</h3>
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Description</th>
                        <th>Default</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>model</code></td>
                        <td>AI model to use</td>
                        <td>anthropic/claude-haiku-4.5</td>
                    </tr>
                    <tr>
                        <td><code>max_tokens</code></td>
                        <td>Maximum tokens for AI response</td>
                        <td>4096</td>
                    </tr>
                    <tr>
                        <td><code>temperature</code></td>
                        <td>AI temperature (0.0-1.0)</td>
                        <td>0.3</td>
                    </tr>
                </tbody>
            </table>

            <h3>Examples</h3>
            <CodeBlock title="Initialize configuration">
                {`reasonlint config init`}
            </CodeBlock>

            <CodeBlock title="View current config">
                {`reasonlint config`}
            </CodeBlock>

            <CodeBlock title="Change model">
                {`reasonlint config set model anthropic/claude-sonnet-4`}
            </CodeBlock>

            <hr className="border-slate-800 my-8" />

            <h2 id="global-flags">Global Flags</h2>
            <p>These flags work with any command:</p>
            <table>
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>-v, --verbose</code></td>
                        <td>Enable verbose output</td>
                    </tr>
                    <tr>
                        <td><code>--config</code></td>
                        <td>Path to config file (default: ~/.reasonlint/config.yaml)</td>
                    </tr>
                    <tr>
                        <td><code>-h, --help</code></td>
                        <td>Show help for any command</td>
                    </tr>
                    <tr>
                        <td><code>--version</code></td>
                        <td>Show version information</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
