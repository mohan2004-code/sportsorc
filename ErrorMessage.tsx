import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 flex items-start">
      <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0\" fill="currentColor\" viewBox="0 0 20 20\" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd\" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z\" clipRule="evenodd"></path>
      </svg>
      <div>
        <p className="font-medium">{message}</p>
      </div>
    </div>
  );
};