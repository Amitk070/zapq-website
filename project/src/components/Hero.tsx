import React from 'react';
import { Zap, ArrowRight, Play } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import DonateModal from './DonateModal';

const Hero: React.FC = () => {
  const [isDonateModalOpen, setIsDonateModalOpen] = React.useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-indigo-300/20 to-cyan-300/20 dark:from-indigo-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 pt-6 pb-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">zapq</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDonateModalOpen(true)}
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              ❤️ Donate Now
            </button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 px-6 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Build React apps in{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              seconds
            </span>{' '}
            with Claude
          </h1>
          
          <p className="mt-8 text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The CLI + web IDE for AI-first dev workflows. Generate, edit, and deploy 
            full React + Tailwind apps using Claude's intelligence.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://zapq.dev/code" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a 
              href="https://zapq.dev/code" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <Play className="mr-2 h-5 w-5" />
              Try the Demo
            </a>
          </div>

          {/* Terminal preview */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 dark:border-gray-700">
              <div className="flex items-center justify-between px-6 py-4 bg-gray-800 dark:bg-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-400">terminal</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-green-400">$ zapq create my-app</div>
                <div className="text-gray-400 mt-2">✨ Creating React + Tailwind app with Claude...</div>
                <div className="text-green-400 mt-4">$ zapq add component Hero</div>
                <div className="text-gray-400 mt-2">🤖 Generating Hero component...</div>
                <div className="text-green-400 mt-4">$ zapq deploy</div>
                <div className="text-gray-400 mt-2">🚀 Deploying to Vercel...</div>
                <div className="text-blue-400 mt-2">✅ Live at: https://my-app.vercel.app</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DonateModal 
        isOpen={isDonateModalOpen} 
        onClose={() => setIsDonateModalOpen(false)} 
      />
    </div>
  );
};

export default Hero;