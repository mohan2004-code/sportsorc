import React, { useState, useEffect } from 'react';
import { MatchCard } from './MatchCard';
import { fetchUpcomingMatches } from '../services/apiService';
import { Match } from '../types/match';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';

export const MatchesList: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        setIsLoading(true);
        const data = await fetchUpcomingMatches();
        setMatches(data);
        setError(null);
      } catch (err) {
        setError('Failed to load upcoming matches. Please try again later.');
        console.error('Error fetching matches:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadMatches();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-blue-900">Upcoming Basketball Matches</h2>
        <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {matches.length} Matches
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center py-12">
          <LoadingSpinner />
        </div>
      )}

      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && matches.length === 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-blue-800">No upcoming matches found at this time.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};