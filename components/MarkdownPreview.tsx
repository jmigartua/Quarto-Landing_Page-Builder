import React, { useState, useEffect } from 'react';

interface MarkdownPreviewProps {
  markdown: string;
}

export const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
  };

  return (
    <aside className="w-80 lg:w-96 bg-preview-bg text-preview-text p-4 flex flex-col shadow-inner">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Quarto Markdown</h2>
        <button
          onClick={copyToClipboard}
          className="px-3 py-1 text-sm font-medium bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-preview-bg focus:ring-primary"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="flex-1 overflow-auto bg-gray-900/50 p-3 rounded-md text-sm whitespace-pre-wrap break-words">
        <code>{markdown}</code>
      </pre>
    </aside>
  );
};
