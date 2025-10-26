import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import AnimatedSection from './AnimatedSection';

const LoginPage: React.FC<{ setActiveRoute: (route: string) => void; }> = ({ setActiveRoute }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const success = login(username, password);
    if (success) {
      setActiveRoute('/blog'); // Redirect to blog page on successful login
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="py-24 pt-36 min-h-screen flex items-center">
      <div className="container max-w-lg mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Admin Login</h2>
            <p className="text-lg text-zinc-400">
              Please enter your credentials to manage blog posts.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay="delay-200">
          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-zinc-300 mb-2">Username</label>
              <input 
                type="text" 
                name="username" 
                id="username" 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white/5 border-2 border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-2">Password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border-2 border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
              />
            </div>
            {error && <p className="text-red-400 text-center">{error}</p>}
            <div className="text-center pt-2">
               <button type="submit" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg shadow-indigo-600/30 transition-all transform hover:scale-105 text-lg">
                Login
              </button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default LoginPage;
