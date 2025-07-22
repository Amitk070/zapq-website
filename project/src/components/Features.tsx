import React from 'react';
import { Zap, Code2, Rocket, Bot, RefreshCw, File as FileTree, Terminal, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Terminal,
    title: 'zapq create',
    description: 'Instantly scaffold Vite + React + Tailwind projects with perfect configuration and modern tooling.',
    command: '$ zapq create my-app'
  },
  {
    icon: Code2,
    title: 'zapq add component',
    description: 'Generate production-ready React components with Claude. Get TypeScript, props, and styling done right.',
    command: '$ zapq add component Button'
  },
  {
    icon: Rocket,
    title: 'zapq deploy',
    description: 'One-click deployment to Vercel with automatic builds, previews, and custom domains.',
    command: '$ zapq deploy'
  },
  {
    icon: Bot,
    title: 'Live Monaco Editor',
    description: 'Chat with Claude directly in your IDE. Ask questions, request changes, and iterate in real-time.',
    command: 'Chat: "Make this responsive"'
  },
  {
    icon: RefreshCw,
    title: 'Claude-Powered Refactor',
    description: 'Select any code and click "Improve this code" to get optimized, cleaner, and more maintainable solutions.',
    command: 'One-click code improvements'
  },
  {
    icon: FileTree,
    title: 'Real File Tree',
    description: 'Full file system access with Monaco tabs. Save, edit, and organize your codebase like a native IDE.',
    command: 'Complete project management'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-First Development
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
            Ship faster with Claude as your{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              coding partner
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every feature is designed to accelerate your development workflow with AI assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl mb-6 group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 group-hover:text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="bg-gray-900 dark:bg-gray-900 rounded-lg p-3 font-mono text-sm text-green-400 border border-gray-800">
                {feature.command}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Get started with zapq CLI:
            </div>
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm text-green-400 border border-gray-800 inline-block">
              npm install -g zapq
            </div>
            <div className="flex justify-center">
              <a 
                href="https://www.npmjs.com/package/zapq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
              >
                View on npm →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;