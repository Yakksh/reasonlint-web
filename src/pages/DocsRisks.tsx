export const DocsRisks = () => {
    return (
        <div>
            <h1>Risk Taxonomy</h1>
            <p>
                ReasonLint identifies five categories of <strong>reasoning risks</strong> — subtle issues that traditional linters miss.
                These are not bugs or syntax errors; they're logical flaws and hidden assumptions that can cause problems in production.
            </p>

            <h2 id="hidden-assumptions">🔮 Hidden Assumptions</h2>
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800 my-4 not-prose">
                <p className="text-slate-300 mb-4">
                    Code that assumes certain conditions will always be true, when in reality they may not hold.
                </p>
                <h4 className="text-white font-medium mb-2">Examples:</h4>
                <ul className="text-slate-400 space-y-2 text-sm list-disc pl-5">
                    <li>Assuming a list will never be empty</li>
                    <li>Assuming an API response will always have a specific field</li>
                    <li>Assuming a database query will always return exactly one row</li>
                    <li>Assuming time zones or locales are consistent</li>
                </ul>
                <h4 className="text-white font-medium mt-4 mb-2">Questions to ask:</h4>
                <ul className="text-cyan-400 space-y-1 text-sm list-disc pl-5">
                    <li>What happens if this assumption is wrong?</li>
                    <li>Under what conditions could this fail?</li>
                    <li>Is there documentation for this assumption?</li>
                </ul>
            </div>

            <h2 id="irreversible-changes">⚠️ Irreversible Changes</h2>
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800 my-4 not-prose">
                <p className="text-slate-300 mb-4">
                    Changes that are difficult or impossible to undo once deployed.
                </p>
                <h4 className="text-white font-medium mb-2">Examples:</h4>
                <ul className="text-slate-400 space-y-2 text-sm list-disc pl-5">
                    <li>Database schema changes (dropping columns, changing types)</li>
                    <li>Changing API contracts that external clients depend on</li>
                    <li>Modifying data formats in persistent storage</li>
                    <li>Removing feature flags or configuration options</li>
                </ul>
                <h4 className="text-white font-medium mt-4 mb-2">Questions to ask:</h4>
                <ul className="text-cyan-400 space-y-1 text-sm list-disc pl-5">
                    <li>What's the rollback plan?</li>
                    <li>Who else depends on this?</li>
                    <li>Is there a migration path for existing data?</li>
                </ul>
            </div>

            <h2 id="missing-failure-modes">🚨 Missing Failure Modes</h2>
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800 my-4 not-prose">
                <p className="text-slate-300 mb-4">
                    Code paths that don't handle potential error conditions or edge cases.
                </p>
                <h4 className="text-white font-medium mb-2">Examples:</h4>
                <ul className="text-slate-400 space-y-2 text-sm list-disc pl-5">
                    <li>Network calls without timeout handling</li>
                    <li>File operations without error handling</li>
                    <li>Removing retry logic or circuit breakers</li>
                    <li>Edge cases with empty inputs, nulls, or boundary values</li>
                </ul>
                <h4 className="text-white font-medium mt-4 mb-2">Questions to ask:</h4>
                <ul className="text-cyan-400 space-y-1 text-sm list-disc pl-5">
                    <li>What happens if this fails?</li>
                    <li>Is the failure visible or silent?</li>
                    <li>What's the fallback behavior?</li>
                </ul>
            </div>

            <h2 id="overgeneralization">🌊 Overgeneralization</h2>
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800 my-4 not-prose">
                <p className="text-slate-300 mb-4">
                    Solutions that are too broad and may introduce unexpected side effects.
                </p>
                <h4 className="text-white font-medium mb-2">Examples:</h4>
                <ul className="text-slate-400 space-y-2 text-sm list-disc pl-5">
                    <li>Changing a function to handle "all cases" when only one was needed</li>
                    <li>Making a specific fix that affects unrelated areas</li>
                    <li>Adding permissions that are broader than required</li>
                    <li>Using catch-all patterns that might match too much</li>
                </ul>
                <h4 className="text-white font-medium mt-4 mb-2">Questions to ask:</h4>
                <ul className="text-cyan-400 space-y-1 text-sm list-disc pl-5">
                    <li>Could this affect other parts of the system?</li>
                    <li>Is this change more broad than necessary?</li>
                    <li>What's the blast radius if something goes wrong?</li>
                </ul>
            </div>

            <h2 id="confidence-mismatch">🎯 Confidence Mismatch</h2>
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800 my-4 not-prose">
                <p className="text-slate-300 mb-4">
                    The complexity of the code doesn't match the apparent confidence in the change.
                </p>
                <h4 className="text-white font-medium mb-2">Examples:</h4>
                <ul className="text-slate-400 space-y-2 text-sm list-disc pl-5">
                    <li>Complex concurrency changes in a "small" PR</li>
                    <li>One-line fix for a fundamental architectural issue</li>
                    <li>Security-critical changes without review comments</li>
                    <li>Adding sophisticated patterns (like retry/backoff) casually</li>
                </ul>
                <h4 className="text-white font-medium mt-4 mb-2">Questions to ask:</h4>
                <ul className="text-cyan-400 space-y-1 text-sm list-disc pl-5">
                    <li>Is this change as simple as it looks?</li>
                    <li>Has this been tested under realistic conditions?</li>
                    <li>Who reviewed this and what did they focus on?</li>
                </ul>
            </div>

            <h2>How ReasonLint Uses This</h2>
            <p>
                When you run <code>reasonlint review</code>, the AI analyzes your diff and identifies patterns that match these risk categories.
                For each risk found, you'll get:
            </p>
            <ul>
                <li><strong>Category:</strong> Which type of risk this is</li>
                <li><strong>Severity:</strong> Low, Medium, or High</li>
                <li><strong>Location:</strong> File and line number</li>
                <li><strong>Explanation:</strong> Why this is potentially risky</li>
                <li><strong>Question:</strong> A specific question for the developer to consider</li>
            </ul>

            <p>
                The goal is not to block your code, but to prompt you to <em>think</em> about these risks before merging.
            </p>
        </div>
    );
};
