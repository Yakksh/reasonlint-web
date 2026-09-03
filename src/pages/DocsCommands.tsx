import { CodeBlock } from '../components/docs/CodeBlock';

export const DocsCommands = () => {
    return (
        <div>
            <h1>Commands</h1>
            <p>Complete reference for all ReasonLint CLI commands.</p>

            <h2 id="review">reasonlint review</h2>
            <p>The main command for analyzing code for reasoning risks.</p>

            <h3>Usage</h3>
            <CodeBlock>
                {`reasonlint review [base...head | <file>...] [flags]`}
            </CodeBlock>

            <h3>What gets reviewed</h3>
            <p>
                With no arguments, <code>review</code> covers everything you have not committed
                yet &mdash; staged changes, unstaged changes, and untracked files. Untracked files
                never show up in a diff, so ReasonLint includes them as new files rather than
                quietly leaving them out.
            </p>
            <p>
                Given one or more file paths, <code>review</code> reads those files in full and
                reviews them as they currently stand, instead of reviewing a change. That works on
                files which are untracked, ignored by Git, or outside a repository altogether.
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Command</th>
                        <th>Reviews</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>reasonlint review</code></td>
                        <td>All uncommitted work: staged, unstaged, and untracked</td>
                    </tr>
                    <tr>
                        <td><code>reasonlint review --unstaged</code></td>
                        <td>Working tree against the index, plus untracked files</td>
                    </tr>
                    <tr>
                        <td><code>reasonlint review --staged</code></td>
                        <td>The index against HEAD &mdash; what a commit would contain</td>
                    </tr>
                    <tr>
                        <td><code>reasonlint review base...head</code></td>
                        <td>The diff between two Git refs</td>
                    </tr>
                    <tr>
                        <td><code>reasonlint review &lt;file&gt;...</code></td>
                        <td>Whole files, whether or not they have changed</td>
                    </tr>
                </tbody>
            </table>

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
                        <td>Review only staged (git add) changes</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td><code>--unstaged</code></td>
                        <td>Review only unstaged changes</td>
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
            <CodeBlock title="Review everything you haven't committed">
                {`reasonlint review`}
            </CodeBlock>

            <CodeBlock title="Review only unstaged changes">
                {`reasonlint review --unstaged`}
            </CodeBlock>

            <CodeBlock title="Review staged changes before committing">
                {`reasonlint review --staged`}
            </CodeBlock>

            <CodeBlock title="Review a single file in full">
                {`reasonlint review backend/main.py`}
            </CodeBlock>

            <CodeBlock title="Review several files together">
                {`reasonlint review backend/main.py backend/db.py`}
            </CodeBlock>

            <CodeBlock title="Review last commit">
                {`reasonlint review HEAD~1...HEAD`}
            </CodeBlock>

            <CodeBlock title="Review branch changes">
                {`reasonlint review main...feature-branch`}
            </CodeBlock>

            <CodeBlock title="Use specific model">
                {`reasonlint review --model <model-id> --staged`}
            </CodeBlock>

            <hr className="border-slate-800 my-8" />

            <h2 id="auth">reasonlint auth</h2>
            <p>Configure your OpenRouter API key and the model used for reviews.</p>

            <h3>Usage</h3>
            <CodeBlock>
                {`reasonlint auth [flags]`}
            </CodeBlock>

            <h3>Choosing a model</h3>
            <p>
                After your API key, <code>auth</code> asks which model to review with. If you have
                no preference it lists the models OpenRouter is currently offering for free, and
                you can pick one by number:
            </p>
            <CodeBlock>
                {`Which model should ReasonLint use for reviews?
Current: minimax/minimax-m3:free

Not sure? These are free on OpenRouter right now:
  1. minimax/minimax-m3:free                    1.0M context
  2. thinkingmachines/inkling:free              1.0M context
  3. nvidia/nemotron-3.5-lightning:free         1.0M context

Pick a number, type any model ID, or press Enter to keep the current model:`}
            </CodeBlock>
            <p>
                That list is fetched from OpenRouter when you run the command, so it reflects what
                is actually free today rather than a list baked into the binary. Offline, you can
                still type a model ID by hand. Running <code>auth</code> when a key is already
                configured lets you keep the key and change only the model.
            </p>

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
                        <td>Show the configured key status and current model</td>
                    </tr>
                </tbody>
            </table>

            <h3>Examples</h3>
            <CodeBlock title="Set API key and model interactively">
                {`reasonlint auth`}
            </CodeBlock>

            <CodeBlock title="Check configuration status">
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
                        <td>minimax/minimax-m3:free</td>
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
                {`reasonlint config set model <model-id>`}
            </CodeBlock>

            <hr className="border-slate-800 my-8" />

            <h2 id="update">reasonlint update</h2>
            <p>Check for and install the latest version of ReasonLint.</p>

            <h3>Usage</h3>
            <CodeBlock>
                {`reasonlint update [flags]`}
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
                        <td><code>-f, --force</code></td>
                        <td>Skip confirmation prompt</td>
                    </tr>
                    <tr>
                        <td><code>--check</code></td>
                        <td>Only check for updates, don't install</td>
                    </tr>
                </tbody>
            </table>

            <h3>Examples</h3>
            <CodeBlock title="Update to latest version">
                {`reasonlint update`}
            </CodeBlock>

            <CodeBlock title="Force update (skip confirmation)">
                {`reasonlint update --force`}
            </CodeBlock>

            <CodeBlock title="Check for updates only">
                {`reasonlint update --check`}
            </CodeBlock>

            <hr className="border-slate-800 my-8" />

            <h2 id="uninstall">reasonlint uninstall</h2>
            <p>Remove ReasonLint and optionally its configuration from your system.</p>

            <h3>Usage</h3>
            <CodeBlock>
                {`reasonlint uninstall [flags]`}
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
                        <td><code>-f, --force</code></td>
                        <td>Skip all confirmation prompts</td>
                    </tr>
                    <tr>
                        <td><code>--keep-config</code></td>
                        <td>Remove binary only; preserve ~/.reasonlint/ configuration</td>
                    </tr>
                </tbody>
            </table>

            <h3>Examples</h3>
            <CodeBlock title="Uninstall ReasonLint">
                {`reasonlint uninstall`}
            </CodeBlock>

            <CodeBlock title="Uninstall but keep config files">
                {`reasonlint uninstall --keep-config`}
            </CodeBlock>

            <CodeBlock title="Force uninstall (no prompts)">
                {`reasonlint uninstall --force`}
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
