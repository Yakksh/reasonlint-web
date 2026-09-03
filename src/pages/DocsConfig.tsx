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
model: minimax/minimax-m3:free

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
            <p>
                The AI model to use for code analysis. Default:{' '}
                <code>minimax/minimax-m3:free</code>
            </p>
            <p>
                The default is a free model so that a fresh install works before you have added any
                OpenRouter credit. Run <code>reasonlint auth</code> to pick a different one &mdash;
                it lists whatever is free at the time, and you can type any model ID instead.
            </p>

            <h4>Choosing a Model</h4>
            <p>
                ReasonLint works with any model ID on OpenRouter, so there is no single right
                answer &mdash; it is a trade-off:
            </p>
            <ul>
                <li>
                    <strong>Capability against cost.</strong> More capable models catch subtler
                    reasoning risks and raise fewer false alarms, and they cost proportionally more
                    per review. A smaller model is perfectly adequate for a quick pass over a small
                    diff.
                </li>
                <li>
                    <strong>Context window.</strong> The whole diff, or the whole file, has to fit
                    in the prompt. If you routinely review large changes, weight this heavily.
                </li>
                <li>
                    <strong>Free tiers.</strong> Free models cost nothing, but they are usually rate
                    limited and can be withdrawn at any time.
                </li>
            </ul>
            <p>
                We deliberately don't list specific models here. The catalog changes constantly, and
                a hardcoded recommendation is out of date within months. Instead, run{' '}
                <code>reasonlint auth</code> &mdash; it fetches what OpenRouter is offering for free
                at that moment. For the full catalog with pricing and context windows, see{' '}
                <a href="https://openrouter.ai/models">openrouter.ai/models</a>.
            </p>

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
                {`reasonlint config set model <model-id>
reasonlint config set temperature 0.2
reasonlint config set max_tokens 8192`}
            </CodeBlock>
        </div>
    );
};
