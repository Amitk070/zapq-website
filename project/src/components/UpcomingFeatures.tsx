import React from 'react';
import { Clock, Users, CreditCard, Bot, BarChart3, Globe, Rocket } from 'lucide-react';

const upcomingFeatures = [
  {
    icon: Users,
    title: 'User accounts + API keys',
    description: 'Let users log in, generate Claude tokens, and track usage',
    eta: 'Q2 2025'
  },
  {
    icon: CreditCard,
    title: 'Tiered pricing & team support',
    description: 'Offer free and pro CLI features with billing support',
    eta: 'Q2 2025'
  },
  {
    icon: Bot,
    title: 'Claude agent + project refactor',
    description: 'Upload a repo → Claude inspects and suggests changes via chat',
    eta: 'Q3 2025'
  },
  {
    icon: BarChart3,
    title: 'Token usage insights',
    description: 'See how many prompts and tokens were used per project',
    eta: 'Q3 2025'
  },
  {
    icon: Globe,
    title: 'Community template library',
    description: 'Share and browse Claude-generated components, pages, and layouts',
    eta: 'Q4 2025'
  }
];

const UpcomingFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Coming Soon
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
            What's Coming Next{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              🚀
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're constantly evolving zapq to make AI-first development even more powerful and accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800"
            >
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 group-hover:text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>{feature.eta}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UpcomingFeatures;