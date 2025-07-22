import React from 'react';
import { Zap, Github, Twitter, Globe, FileText, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">zapq</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI-first CLI + Web IDE for building React apps at the speed of thought.
            </p>
            <div className="text-sm text-gray-500">
              <div>Office: Bengaluru, Karnataka, India 🇮🇳</div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.npmjs.com/package/zapq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>npm Package</span>
                </a>
              </li>
              <li>
                <a href="https://zapq-ui-amit-ks-projects-30a8790d.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>zapq.dev/code</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Amitk070/zapq-ui" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Examples
                </a>
              </li>
              <li>
                <a href="https://github.com/Amitk070/zapq-ui" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Developers</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/Amitk070/zapq-ui" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/zapq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  CLI Docs
                </a>
              </li>
              <li>
                <a href="https://github.com/Amitk070/zapq-ui" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  API Reference
                </a>
              </li>
              <li>
                <a href="mailto:kumarami663@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Terms</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Privacy</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  License
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-gray-800">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/Amitk070/zapq-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://zapq.dev/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Website"
            >
              <Globe className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2025 zapq. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;