import React from 'react';
import { Target, Eye, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              zapq
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're building the future of software development, where AI and human creativity work together seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mission & Vision */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <Target className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Empower every developer with a generative AI-first development loop. We believe that the future of 
                software development lies in the seamless collaboration between human creativity and AI intelligence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                  <Eye className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A future where software is built at the speed of thought. Where ideas become reality in seconds, 
                not hours. Where every developer can focus on solving problems that matter, not wrestling with boilerplate.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10K+</div>
              <div className="text-gray-600 dark:text-gray-300">Developers</div>
            </div>

            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">Apps Built</div>
            </div>

            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 col-span-2">
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-300">Faster Development</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">vs traditional workflows</div>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Built with ❤️ in India 🇮🇳
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're a team of developers, designers, and AI enthusiasts working to democratize software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;