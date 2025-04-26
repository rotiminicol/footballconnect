import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, MapPin, DollarSign } from 'lucide-react';
import Button from '../components/Button';

const Players: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    position: 'all',
    age: 'all',
    value: 'all'
  });

  const players = [
    {
      id: 1,
      name: "Marcus Thompson",
      position: "Forward",
      age: 23,
      club: "Arsenal FC",
      country: "England",
      value: "£15M",
      image: "https://images.pexels.com/photos/5889638/pexels-photo-5889638.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "Lucas Silva",
      position: "Midfielder",
      age: 25,
      club: "FC Porto",
      country: "Brazil",
      value: "£22M",
      image: "https://images.pexels.com/photos/5889668/pexels-photo-5889668.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Jan Weber",
      position: "Defender",
      age: 27,
      club: "Bayern Munich",
      country: "Germany",
      value: "£18M",
      image: "https://images.pexels.com/photos/5889652/pexels-photo-5889652.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-50 pt-20 p-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Players Database</h1>
          <Button variant="primary" size="sm">
            Add to Watchlist
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search players by name, club, or country..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedFilters.position}
                onChange={(e) => setSelectedFilters({...selectedFilters, position: e.target.value})}
              >
                <option value="all">All Positions</option>
                <option value="forward">Forward</option>
                <option value="midfielder">Midfielder</option>
                <option value="defender">Defender</option>
                <option value="goalkeeper">Goalkeeper</option>
              </select>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-slate-50">
                  <Star className="w-5 h-5 text-yellow-500" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{player.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {player.club}, {player.country}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {player.position}
                    </span>
                    <div className="flex items-center text-green-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {player.value}
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Profile
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Players;