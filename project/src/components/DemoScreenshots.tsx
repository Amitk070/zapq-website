import React from 'react';
import { MessageSquare, File as FileTree, Zap } from 'lucide-react';

const demos = [
  {
    icon: MessageSquare,
    title: 'Live Chat Editor',
    description: 'Chat with Claude directly in your IDE. Get instant code generation, explanations, and improvements.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    icon: FileTree,
    title: 'File Tree + Monaco Tabs',
    description: 'Professional IDE experience with full file system access, syntax highlighting, and auto-completion.',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    icon: Zap,
    title: 'Claude Response Insertion',
    description: 'Seamlessly integrate Claude\'s code suggestions directly into your project with smart context awareness.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  }
];

const DemoScreenshots: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
            See zapq in{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              action
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the power of AI-first development with our intuitive interface.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
            >
              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon overlay */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-xl shadow-lg">
                    <demo.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {demo.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {demo.description}
                </p>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/50 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="https://zapq.dev/code" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Try zapq Now
            <Zap className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoScreenshots;