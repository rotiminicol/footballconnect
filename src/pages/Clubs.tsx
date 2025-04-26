import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Users, Trophy } from 'lucide-react';
import Button from '../components/Button';

const Clubs: React.FC = () => {
  const clubs = [
    {
      id: 1,
      name: "Manchester United",
      country: "England",
      league: "Premier League",
      players: 28,
      trophies: 66,
      image: "https://images.pexels.com/photos/12705916/pexels-photo-12705916.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "FC Barcelona",
      country: "Spain",
      league: "La Liga",
      players: 26,
      trophies: 75,
      image: "https://images.pexels.com/photos/14324705/pexels-photo-14324705.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Bayern Munich",
      country: "Germany",
      league: "Bundesliga",
      players: 27,
      trophies: 82,
      image: "https://images.pexels.com/photos/14717198/pexels-photo-14717198.jpeg?auto=compress&cs=tinysrgb&w=600"
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
          <h1 className="text-2xl font-bold text-slate-900">Football Clubs</h1>
          <Button variant="primary" size="sm">
            Connect with Club
          </Button>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search clubs by name, league, or country..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-48">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{club.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {club.country}, {club.league}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-600">
                      <Users className="w-4 h-4 mr-2" />
                      {club.players} Players
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Trophy className="w-4 h-4 mr-2" />
                      {club.trophies} Trophies
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" className="flex-1">
                    View Profile
                  </Button>
                  <Button variant="primary" className="flex-1">
                    Contact
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Clubs;