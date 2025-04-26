import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { BarChart2, Users, MessageSquare, Bell, Search, Filter } from 'lucide-react';
import Button from '../components/Button';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Active Negotiations', value: '12', icon: MessageSquare },
    { label: 'Player Watchlist', value: '48', icon: Users },
    { label: 'Market Value', value: '£24.5M', icon: BarChart2 },
    { label: 'New Alerts', value: '7', icon: Bell },
  ];

  const recentActivities = [
    { type: 'message', text: 'New message from Manchester United regarding Player Transfer', time: '2h ago' },
    { type: 'alert', text: 'Player John Doe status updated to "Available for Transfer"', time: '4h ago' },
    { type: 'negotiation', text: 'Transfer offer received for James Smith', time: '6h ago' },
    { type: 'watch', text: 'New player added to your watchlist', time: '8h ago' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-50 pt-20 p-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-slate-600">
                {user?.organization} - {user?.role}
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="primary" size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                New Message
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                </div>
                <stat.icon className="w-8 h-8 text-blue-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Search and Filters */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search players, clubs, or agents..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Player Cards would go here */}
            <div className="space-y-4">
              <p className="text-slate-600 text-center py-8">
                No active searches. Start by searching for players or clubs.
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                  <div>
                    <p className="text-sm text-slate-600">{activity.text}</p>
                    <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;