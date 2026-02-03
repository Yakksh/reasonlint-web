import { CodeBlock } from '../components/docs/CodeBlock';

export const DocsConfig = () => {
    return (
        <div>
            <h1>Configuration</h1>
            <p>ReasonLint stores configuration in <code>~/.reasonlint/config.yaml</code>.</p>

            <h2>Configuration File</h2>
            <p>The configuration file is automatically created when you run <code>reasonlint auth</code> or <code>reasonlint config init</code>.</p>

            <h3>File Location</h3>
            <table>
                <thead>
                    <tr>
                        <th>OS</th>
                        <th>Path</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Linux/macOS</td>
                        <td><code>~/.reasonlint/config.yaml</code></td>
                    </tr>
                    <tr>
                        <td>Windows</td>
                        <td><code>%USERPROFILE%\.reasonlint\config.yaml</code></td>
                    </tr>
                </tbody>
            </table>

            <h2>Full Configuration Reference</h2>
            <CodeBlock title="~/.reasonlint/config.yaml">
                {`# OpenRouter API key (required)
# Get yours at: https://openrouter.ai/keys
api_key: sk-or-v1-xxxxxxxxxxxxx

# AI model to use for analysis
# See available models at: https://openrouter.ai/models
model: anthropic/claude-haiku-4.5

# Maximum tokens for AI response
max_tokens: 4096

# Temperature for AI (0.0 = deterministic, 1.0 = creative)
# Lower values are recommended for code analysis
temperature: 0.3`}
            </CodeBlock>

            <h2>Configuration Options</h2>

            <h3>api_key</h3>
            <p><strong>Required.</strong> Your OpenRouter API key. This is stored locally and never sent anywhere except to OpenRouter's API.</p>
            <ul>
                <li>Get a free key at <a href="https://openrouter.ai/keys">openrouter.ai/keys</a></li>
                <li>Keys typically start with <code>sk-or-</code></li>
                <li>Set via: <code>reasonlint auth</code> (recommended) or edit config directly</li>
            </ul>

            <h3>model</h3>
            <p>The AI model to use for code analysis. Default: <code>anthropic/claude-haiku-4.5</code></p>

            <h4>Recommended Models</h4>
            <table>
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Best For</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>anthropic/claude-sonnet-4</code></td>
                        <td>Balanced performance & cost</td>
                        <td>$$</td>
                    </tr>
                    <tr>
                        <td><code>anthropic/claude-opus-4</code></td>
                        <td>Complex codebases</td>
                        <td>$$$</td>
                    </tr>
                    <tr>
                        <td><code>openai/gpt-4o</code></td>
                        <td>Alternative to Claude</td>
                        <td>$$</td>
                    </tr>
                    <tr>
                        <td><code>google/gemini-2.5-pro</code></td>
                        <td>Large context windows</td>
                        <td>$$</td>
                    </tr>
                </tbody>
            </table>

            <h3>max_tokens</h3>
            <p>Maximum number of tokens for the AI response. Default: <code>4096</code></p>
            <ul>
                <li>Higher values allow more detailed analysis</li>
                <li>Lower values reduce API costs</li>
                <li>Recommended range: 2048-8192</li>
            </ul>

            <h3>temperature</h3>
            <p>Controls randomness in AI responses. Default: <code>0.3</code></p>
            <ul>
                <li><code>0.0</code> - Deterministic, consistent results</li>
                <li><code>0.3</code> - Slight variation (recommended)</li>
                <li><code>0.7+</code> - More creative, less consistent</li>
            </ul>

            <h2>Environment Variables</h2>
            <p>Configuration can also be set via environment variables:</p>
            <CodeBlock>
                {`export REASONLINT_API_KEY="sk-or-v1-xxx"
export REASONLINT_MODEL="anthropic/claude-sonnet-4"`}
            </CodeBlock>
            <p className="text-slate-400 text-sm">Environment variables take precedence over config file values.</p>

            <h2>Managing Configuration</h2>

            <h3>View Current Config</h3>
            <CodeBlock>
                {`reasonlint config`}
            </CodeBlock>

            <h3>Create Default Config</h3>
            <CodeBlock>
                {`reasonlint config init`}
            </CodeBlock>

            <h3>Update Config Values</h3>
            <CodeBlock>
                {`reasonlint config set model anthropic/claude-opus-4
reasonlint config set temperature 0.2
reasonlint config set max_tokens 8192`}
            </CodeBlock>
        </div>
    );
};
