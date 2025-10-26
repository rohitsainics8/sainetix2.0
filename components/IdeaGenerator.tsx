import React, { useState } from 'react';
import { generateIdeas } from '../services/geminiService';
import type { Idea } from '../types';
import AnimatedSection from './AnimatedSection';
import SparklesIcon from './icons/SparklesIcon';

const IdeaGeneratorPage: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ideas, setIdeas] = useState<Idea[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError('Please enter a topic to brainstorm.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setIdeas([]);

    try {
      const result = await generateIdeas(topic);
      setIdeas(result);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-24 pt-36 min-h-screen">
      <div className="container max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">AI Idea Generator</h2>
            <p className="text-lg text-zinc-400 mb-8">
              Stuck in a creative rut? Enter a topic, and our AI will brainstorm innovative ideas and concepts for you.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay="delay-200" className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., A mobile app for sustainable living, a new type of social media..."
                className="w-full bg-transparent text-white rounded-lg px-4 py-3 focus:outline-none placeholder:text-zinc-500 text-lg resize-none"
                rows={3}
                disabled={isLoading}
              />
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-indigo-600/30 transition-all transform hover:scale-105 disabled:bg-zinc-600 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
                >
                  {isLoading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'Generate Ideas'}
                </button>
              </div>
            </div>
          </form>
          {error && <p className="text-red-400 text-center mt-6">{error}</p>}
        </AnimatedSection>
        
        {isLoading && ideas.length === 0 && (
          <div className="w-full mt-16 flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-lg text-zinc-400">Our AI is brainstorming... this may take a moment.</p>
            </div>
          </div>
        )}

        {ideas.length > 0 && (
          <AnimatedSection className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-white mb-8">Generated Ideas for "{topic}"</h3>
            <div className="space-y-6">
              {ideas.map((idea, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-900/10">
                  <h4 className="text-xl font-bold text-indigo-400 mb-2 flex items-center">
                    <SparklesIcon className="w-5 h-5 mr-3" />
                    {idea.title}
                  </h4>
                  <p className="text-zinc-300 leading-relaxed">{idea.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default IdeaGeneratorPage;