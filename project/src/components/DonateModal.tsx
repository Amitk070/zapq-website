import React from 'react';
import { X, Heart, Mail, Copy, Check } from 'lucide-react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyUPI = () => {
    navigator.clipboard.writeText('sumamitechnologies@ybl');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg">
              <Heart className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Support zapq Development</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Help us build the future of AI-first development. Your support enables us to add more features and improve the developer experience.
          </p>

          {/* UPI Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">UPI ID for donations:</h3>
            <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex-1">
                <div className="font-mono text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
                  sumamitechnologies@ybl
                </div>
              </div>
              <button
                onClick={handleCopyUPI}
                className="flex items-center space-x-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Interested in working with us?</h3>
            <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Send your resume to:</div>
                <a 
                  href="mailto:kumarami663@gmail.com" 
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
                >
                  kumarami663@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-b-2xl">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Thank you for supporting open source development! 🙏
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;