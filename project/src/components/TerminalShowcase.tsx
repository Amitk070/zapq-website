import React from 'react';
import { Copy, Check } from 'lucide-react';

const TerminalShowcase: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    const commands = `zapq create my-app
zapq add component Hero
zapq deploy`;
    navigator.clipboard.writeText(commands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
            From idea to deployment in{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              four commands
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the fastest way to build and ship React applications with AI assistance.
          </p>
        </div>

        <div className="relative">
          {/* Terminal window */}
          <div className="bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-800 dark:bg-gray-800 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-400 font-mono">zapq-cli v1.0.0</span>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-200"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-400" />
                )}
                <span className="text-sm text-gray-400">
                  {copied ? 'Copied!' : 'Copy'}
                </span>
              </button>
            </div>

            {/* Terminal content */}
            <div className="p-8 font-mono text-base space-y-6">
              {/* Step 1 */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">❯</span>
                  <span className="text-green-400">zapq create my-app</span>
                </div>
                <div className="ml-4 space-y-1 text-gray-400">
                  <div>✨ Initializing React + TypeScript + Tailwind CSS...</div>
                  <div>📦 Installing dependencies...</div>
                  <div>🎨 Setting up Tailwind configuration...</div>
                  <div className="text-cyan-400">✅ Project created successfully!</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">❯</span>
                  <span className="text-green-400">zapq add component Hero</span>
                </div>
                <div className="ml-4 space-y-1 text-gray-400">
                  <div>🤖 Asking Claude to generate Hero component...</div>
                  <div>📝 Creating src/components/Hero.tsx...</div>
                  <div>🎨 Adding responsive design and animations...</div>
                  <div className="text-cyan-400">✅ Hero component added!</div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">❯</span>
                  <span className="text-green-400">zapq deploy</span>
                </div>
                <div className="ml-4 space-y-1 text-gray-400">
                  <div>🏗️ Building production bundle...</div>
                  <div>🚀 Deploying to Vercel...</div>
                  <div>🌐 Setting up custom domain...</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">✅ Live at:</span>
                    <span className="text-blue-400 underline">https://my-app-zapq.vercel.app</span>
                  </div>
                </div>
              </div>

              {/* Cursor */}
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400">❯</span>
                <span className="animate-pulse bg-gray-400 w-2 h-5 inline-block"></span>
              </div>
            </div>
          </div>

          {/* Time indicator */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              ⚡ Total time: ~45 seconds
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalShowcase;