'use client';
import Navigation from '@/components/ui/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GetUpdates() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address');
      return;
    }

    // Store email in localStorage (temporary solution until backend is connected)
    const storedEmails = JSON.parse(localStorage.getItem('subscribedEmails') || '[]');
    localStorage.setItem('subscribedEmails', JSON.stringify([...storedEmails, email]));
    
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
        <Navigation />
      {/* Animated Background Element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get Ready for the
            <span className="text-purple-500"> Future of Gaming</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Be the first to know when our revolutionary gaming subscription launches. 
            Get exclusive early access and special founding member benefits.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-purple-500/20 p-8 rounded-lg text-center"
          >
            <h2 className="text-2xl text-white mb-4">🎮 You're In!</h2>
            <p className="text-gray-300">
              Thanks for joining! We'll keep you posted about our launch.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 max-w-md mx-auto"
          >
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                Join Waitlist
              </button>
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm"
              >
                {error}
              </motion.p>
            )}
          </motion.form>
        )}

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              icon: "🎮",
              title: "Unlimited Games",
              description: "Access to 100+ premium titles"
            },
            {
              icon: "🏆",
              title: "Early Access",
              description: "Be first to play new releases"
            },
            {
              icon: "💎",
              title: "Exclusive Perks",
              description: "Special rewards for members"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-lg text-center hover:bg-gray-900/70 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-white text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}