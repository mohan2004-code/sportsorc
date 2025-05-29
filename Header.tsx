import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBasket as Basketball } from 'lucide-react';

export const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-orange-300' : 'text-white hover:text-orange-300';
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Basketball size={32} className="text-orange-500" />
            <div>
              <h1 className="text-2xl font-bold text-white">SportsOrca</h1>
              <p className="text-xs text-blue-200">Your source for basketball matches</p>
            </div>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/" 
                  className={`${isActive('/')} transition-colors duration-200`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/matches" 
                  className={`${isActive('/matches')} transition-colors duration-200`}
                >
                  Matches
                </Link>
              </li>
              <li>
                <Link 
                  to="/teams" 
                  className={`${isActive('/teams')} transition-colors duration-200`}
                >
                  Teams
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};