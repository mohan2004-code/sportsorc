import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-blue-200">
              &copy; {new Date().getFullYear()} SportsOrca. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-200 hover:text-orange-300 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-200 hover:text-orange-300 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-blue-200 hover:text-orange-300 transition-colors duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};