import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Match } from '../types/match';
import { formatDate, formatTime } from '../utils/dateFormatter';

interface MatchCardProps {
  match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="bg-blue-900 text-white p-3 text-center">
        <h3 className="font-semibold text-sm">
          {match.league ? match.league : 'Basketball Match'}
        </h3>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col items-center text-center w-5/12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
              {match.homeTeam.logo ? (
                <img 
                  src={match.homeTeam.logo} 
                  alt={match.homeTeam.name} 
                  className="w-12 h-12 object-contain"
                />
              ) : (
                <span className="text-lg font-bold text-blue-900">
                  {match.homeTeam.name.substring(0, 2)}
                </span>
              )}
            </div>
            <p className="font-semibold text-gray-800 text-sm">{match.homeTeam.name}</p>
          </div>

          <div className="text-center w-2/12">
            <div className="text-sm font-bold text-gray-400 mb-1">VS</div>
            <div className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">
              {formatDate(match.date) === formatDate(new Date()) ? 'TODAY' : formatDate(match.date)}
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-5/12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
              {match.awayTeam.logo ? (
                <img 
                  src={match.awayTeam.logo} 
                  alt={match.awayTeam.name} 
                  className="w-12 h-12 object-contain"
                />
              ) : (
                <span className="text-lg font-bold text-blue-900">
                  {match.awayTeam.name.substring(0, 2)}
                </span>
              )}
            </div>
            <p className="font-semibold text-gray-800 text-sm">{match.awayTeam.name}</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-3">
          <div className="flex items-center text-gray-600 text-sm mb-1">
            <Calendar size={14} className="mr-2 text-blue-900" />
            <span>{formatDate(match.date)}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm mb-1">
            <Clock size={14} className="mr-2 text-blue-900" />
            <span>{formatTime(match.date)}</span>
          </div>
          {match.venue && (
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin size={14} className="mr-2 text-blue-900" />
              <span>{match.venue}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-gray-50 px-4 py-2 flex justify-between items-center">
        <span className="text-xs text-gray-500">Match #{match.id}</span>
        <Link 
          to={`/match/${match.id}`}
          className="text-xs font-medium text-blue-700 hover:text-blue-900 transition-colors duration-200"
        >
          More Details →
        </Link>
      </div>
    </div>
  );
};