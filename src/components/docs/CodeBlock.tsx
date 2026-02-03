import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
    children: string;
    language?: string;
    title?: string;
}

export const CodeBlock = ({ children, language = 'bash', title }: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="my-4 rounded-lg overflow-hidden bg-slate-900 border border-slate-800">
            {title && (
                <div className="flex justify-between items-center px-4 py-2 bg-slate-800 border-b border-slate-700">
                    <span className="text-sm text-slate-400 font-mono">{title}</span>
                    <button
                        onClick={copyToClipboard}
                        className="text-slate-400 hover:text-white transition-colors p-1"
                        title="Copy code"
                    >
                        {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    </button>
                </div>
            )}
            <div className="p-4 overflow-x-auto">
                <pre className={`language-${language} text-sm`}>
                    <code className="text-cyan-300 font-mono">{children}</code>
                </pre>
            </div>
            {!title && (
                <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 text-slate-400 hover:text-white transition-colors p-1"
                    title="Copy code"
                >
                    {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
            )}
        </div>
    );
};
