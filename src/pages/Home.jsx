 import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  const features = [
    {
      name: "Set Goals",
      description: "Define clear, measurable goals with deadlines and track your progress over time.",
      icon: (
        <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
      delay: 0.1
    },
    {
      name: "Track Achievements",
      description: "Record and celebrate your accomplishments, big and small, to build lasting motivation.",
      icon: (
        <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-gradient-to-br from-emerald-500 to-green-600",
      delay: 0.2
    },
    {
      name: "Gain Insights",
      description: "Visualize your growth with interactive charts and uncover valuable personal insights.",
      icon: (
        <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-gradient-to-br from-violet-500 to-purple-600",
      delay: 0.3
    },
  ];

  const stats = [
    { id: 1, name: "Active Users", value: "10K+", color: "text-cyan-500" },
    { id: 2, name: "Goals Achieved", value: "100K+", color: "text-emerald-500" },
    { id: 3, name: "Daily Reflections", value: "50K+", color: "text-violet-500" },
  ];

  const testimonials = [
    {
      id: 1,
      content: "ReflectMe transformed how I approach personal growth. The insights are incredible!",
      author: "Sarah Johnson",
      role: "Product Manager",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      content: "Finally found an app that makes goal tracking actually enjoyable and sustainable.",
      author: "Michael Chen",
      role: "Software Engineer",
      avatar: "👨‍💻"
    },
    {
      id: 3,
      content: "The visualization features helped me see patterns I never noticed before.",
      author: "Emily Rodriguez",
      role: "Designer",
      avatar: "👩‍🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              ReflectMe
            </span>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <Link
                to="/dashboard"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Dashboard
              </Link>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-6 py-2.5 rounded-full border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <motion.h1 
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              Reflect
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Grow
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent">
              Achieve
            </span>
          </motion.h1>
          
          <motion.p 
            className="mt-8 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transform your personal growth journey with intelligent goal tracking, 
            achievement celebration, and powerful insights that reveal your true potential.
          </motion.p>

          <motion.div 
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {user ? (
              <Link
                to="/dashboard"
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform"
              >
                <span className="flex items-center justify-center">
                  Continue Your Journey
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            ) : (
              <>
                <Link
                  to="/register"
                  className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform"
                >
                  <span className="flex items-center justify-center">
                    Start Free Trial
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 rounded-2xl border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 font-bold text-lg hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300"
                >
                  Learn More
                </Link>
              </>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="text-center p-8 rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/20 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className={`text-6xl font-black ${stat.color}`}>{stat.value}</p>
              <p className="mt-4 text-lg font-semibold text-gray-600 dark:text-gray-300">{stat.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to track your growth, celebrate wins, and unlock your full potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.name}
              className="group relative p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: feature.delay, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
            >
              <div className={`inline-flex items-center justify-center p-4 rounded-2xl shadow-lg ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">{feature.name}</h3>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="p-8 rounded-3xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 shadow-xl border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="text-lg text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-cyan-600 dark:text-cyan-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative rounded-4xl overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600"></div>
          
          {/* Animated Orbs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10 text-center py-20 px-8">
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-8">
              Ready to Transform?
            </h2>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto mb-12">
              Join thousands of achievers who are already unlocking their potential with ReflectMe
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/register"
                className="px-8 py-4 rounded-2xl bg-white text-cyan-600 font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform"
              >
                Start Your Journey
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 rounded-2xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;