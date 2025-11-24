 import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import AchievementCard from '../components/AchievementCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { getAchievements, deleteAchievement } from '../services/achievementService';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const data = await getAchievements();
      setAchievements(data);
    } catch (error) {
      console.error('Error fetching achievements:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this achievement?')) {
      try {
        await deleteAchievement(id);
        setAchievements(achievements.filter(achievement => achievement.id !== id));
      } catch (error) {
        console.error('Error deleting achievement:', error);
      }
    }
  };

  // Filter and sort achievements
  const filteredAchievements = achievements
    .filter(achievement => {
      const matchesFilter = filter === 'all' || achievement.category === filter;
      const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'significance':
          return b.significance - a.significance;
        default:
          return 0;
      }
    });

  // Calculate statistics
  const achievementStats = {
    total: achievements.length,
    personal: achievements.filter(a => a.category === 'personal').length,
    professional: achievements.filter(a => a.category === 'professional').length,
    health: achievements.filter(a => a.category === 'health').length,
    learning: achievements.filter(a => a.category === 'learning').length,
  };

  // Professional charm color palette
  const categories = [
    { 
      key: 'all', 
      label: 'All Achievements', 
      count: achievements.length, 
      color: 'bg-gradient-to-r from-amber-400 to-orange-400',
      icon: '🏆',
      bgGradient: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200'
    },
    { 
      key: 'personal', 
      label: 'Personal', 
      count: achievementStats.personal, 
      color: 'bg-gradient-to-r from-violet-400 to-purple-500',
      icon: '💫',
      bgGradient: 'from-violet-50 to-purple-50',
      borderColor: 'border-violet-200'
    },
    { 
      key: 'professional', 
      label: 'Professional', 
      count: achievementStats.professional, 
      color: 'bg-gradient-to-r from-cyan-400 to-blue-500',
      icon: '💼',
      bgGradient: 'from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200'
    },
    { 
      key: 'health', 
      label: 'Health', 
      count: achievementStats.health, 
      color: 'bg-gradient-to-r from-emerald-400 to-green-500',
      icon: '💚',
      bgGradient: 'from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200'
    },
    { 
      key: 'learning', 
      label: 'Learning', 
      count: achievementStats.learning, 
      color: 'bg-gradient-to-r from-rose-400 to-pink-500',
      icon: '🎓',
      bgGradient: 'from-rose-50 to-pink-50',
      borderColor: 'border-rose-200'
    },
  ];

  const sortOptions = [
    { value: 'newest', label: 'Most Recent' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'significance', label: 'Most Significant' },
  ];

  const currentCategory = categories.find(cat => cat.key === filter);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <Sidebar />
        <div className="lg:ml-64">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-center items-center min-h-96">
              <LoadingSpinner size="lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Sidebar />
      
      <div className="lg:ml-64">
        {/* Header with Gradient */}
        <div className={`bg-gradient-to-r ${currentCategory?.color || 'from-amber-400 to-orange-400'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-8">
              <div className="text-white">
                <h1 className="text-3xl font-bold">Achievements</h1>
                <p className="mt-2 text-amber-100">
                  {achievements.length} milestones • Celebrate your journey
                </p>
              </div>
              
              <motion.div 
                className="mt-4 sm:mt-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/achievements/new"
                  className="inline-flex items-center px-6 py-3 bg-white text-amber-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-amber-50"
                >
                  <span className="text-lg">✨</span>
                  <span className="ml-2">Add Achievement</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Category Filters with Charm Colors */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 ${
                  filter === category.key 
                    ? `ring-4 ring-white ring-opacity-50 shadow-2xl ${category.color} text-white` 
                    : `bg-white/80 backdrop-blur-sm border ${category.borderColor} shadow-lg hover:shadow-xl text-gray-700`
                }`}
                whileHover={{ y: -4, scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{category.count}</div>
                    <div className="text-sm mt-1">{category.label}</div>
                  </div>
                  <div className="text-xl">
                    {category.icon}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Controls with Glass Effect */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search achievements..."
                    className="block w-full pl-10 pr-3 py-3 border border-amber-200 rounded-xl bg-white text-amber-900 placeholder-amber-400 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-amber-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-amber-500 text-white shadow-md' 
                      : 'text-amber-600 hover:text-amber-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-amber-500 text-white shadow-md' 
                      : 'text-amber-600 hover:text-amber-700'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-amber-200 rounded-xl bg-white text-amber-900 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-300"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* Clear Search */}
              {searchTerm && (
                <motion.button
                  onClick={() => setSearchTerm('')}
                  className="px-4 py-3 text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Celebration Progress */}
          {achievements.length > 0 && (
            <motion.div 
              className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl p-6 shadow-lg mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between text-amber-50 mb-4">
                <span className="font-semibold">Your Celebration Journey</span>
                <span className="font-bold text-xl">{achievements.length} 🎉</span>
              </div>
              <div className="flex items-center space-x-1">
                {[5, 15, 30, 50, 100].map((milestone) => (
                  <div
                    key={milestone}
                    className={`flex-1 h-3 rounded-full transition-all duration-500 ${
                      achievements.length >= milestone
                        ? 'bg-white'
                        : 'bg-amber-200/30'
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-amber-100 mt-2">
                <span>5</span>
                <span>15</span>
                <span>30</span>
                <span>50</span>
                <span>100+</span>
              </div>
            </motion.div>
          )}

          {/* Achievements Grid/List */}
          <AnimatePresence mode="wait">
            {filteredAchievements.length > 0 ? (
              <motion.div
                key="achievements-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-4"
                }
              >
                {filteredAchievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    layout
                  >
                    <AchievementCard
                      achievement={achievement}
                      onDelete={handleDelete}
                      viewMode={viewMode}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-16"
              >
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <span className="text-4xl">🎉</span>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-amber-800 mb-3">
                  {searchTerm ? 'No achievements found' : 'Time to Celebrate!'}
                </h3>
                
                <p className="text-amber-600 max-w-md mx-auto mb-8 text-lg">
                  {searchTerm 
                    ? `No achievements match "${searchTerm}". Try a different search!`
                    : 'Every achievement deserves celebration. Add your first success story!'
                  }
                </p>

                {!searchTerm && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/achievements/new"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                    >
                      <span className="text-xl">✨</span>
                      <span className="ml-2">Add First Achievement</span>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Celebration Footer */}
          {achievements.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-8 border-t border-amber-200"
            >
              <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl p-6 text-center text-white shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-2xl font-bold mb-4 sm:mb-0">
                    {achievements.length} Achievements Celebrated!
                  </div>
                  <div className="flex items-center justify-center space-x-6 text-amber-100">
                    <div className="text-center">
                      <div className="text-xl font-bold">{achievementStats.personal}</div>
                      <div className="text-sm">Personal</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold">{achievementStats.professional}</div>
                      <div className="text-sm">Professional</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold">{achievementStats.health}</div>
                      <div className="text-sm">Health</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold">{achievementStats.learning}</div>
                      <div className="text-sm">Learning</div>
                    </div>
                  </div>
                </div>
                <motion.p 
                  className="mt-4 text-amber-100 text-lg italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  "Success is the sum of small efforts, repeated day in and day out." 🎊
                </motion.p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Achievements;