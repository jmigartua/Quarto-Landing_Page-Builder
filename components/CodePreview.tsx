import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';

interface CodePreviewProps {
  files: Record<string, string>;
}

export const CodePreview: React.FC<CodePreviewProps> = ({ files }) => {
  const fileNames = Object.keys(files);
  const [activeFile, setActiveFile] = useState<string>('index.qmd');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // If the active file is no longer in the list, default to the first one
    if (fileNames.length > 0 && !fileNames.includes(activeFile)) {
      setActiveFile(fileNames[0]);
    }
  }, [fileNames, activeFile]);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const copyToClipboard = () => {
    if (files[activeFile]) {
      navigator.clipboard.writeText(files[activeFile]);
      setCopied(true);
    }
  };

  const exportProject = () => {
    const projectName = prompt("Please enter a name for your project folder:", "quarto-landing-page");
    if (!projectName) return;

    const zip = new JSZip();

    // Add root files
    zip.file('_quarto.yml', files['_quarto.yml']);
    zip.file('index.qmd', files['index.qmd']);

    // Add files to styles folder
    const stylesFolder = zip.folder('styles');
    if (stylesFolder) {
        stylesFolder.file('custom.scss', files['styles/custom.scss']);
        stylesFolder.file('custom-ocean.scss', files['styles/custom-ocean.scss']);
    }

    zip.generateAsync({ type: 'blob' }).then((content) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = `${projectName}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
  
  const getLanguage = (fileName: string) => {
    const extension = fileName.split('.').pop();
    switch (extension) {
      case 'yml':
        return 'yaml';
      case 'qmd':
        return 'markdown';
      case 'scss':
        return 'scss';
      default:
        return 'plaintext';
    }
  }

  return (
    <aside className="w-80 lg:w-96 bg-preview-bg text-preview-text p-4 flex flex-col shadow-inner">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">Project Files</h2>
        <div className="flex gap-2">
          <button
            onClick={copyToClipboard}
            className="px-3 py-1 text-sm font-medium bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-preview-bg focus:ring-primary"
            title="Copy current file content"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
           <button
            onClick={exportProject}
            className="px-3 py-1 text-sm font-medium bg-primary rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-preview-bg focus:ring-white"
            title="Export project as a .zip file"
          >
            Export Project
          </button>
        </div>
      </div>
      
      <div className="border-b border-gray-600 mb-2">
        <nav className="-mb-px flex space-x-2" aria-label="Tabs">
            {fileNames.map(fileName => (
                <button
                    key={fileName}
                    onClick={() => setActiveFile(fileName)}
                    className={`${
                        activeFile === fileName
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-400'
                    } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-xs`}
                >
                    {fileName}
                </button>
            ))}
        </nav>
      </div>

      <pre className="flex-1 overflow-auto bg-gray-900/50 p-3 rounded-md text-sm whitespace-pre-wrap break-words">
        <code className={`language-${getLanguage(activeFile)}`}>{files[activeFile] || ''}</code>
      </pre>
    </aside>
  );
};