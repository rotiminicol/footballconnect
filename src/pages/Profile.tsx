import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Building, Calendar, Edit, Camera } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

const Profile: React.FC = () => {
  const { user } = useAuth();

  const profileStats = [
    { label: 'Negotiations', value: '24' },
    { label: 'Players Scouted', value: '156' },
    { label: 'Success Rate', value: '92%' },
    { label: 'Years Active', value: '8' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-50 pt-20 p-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 relative">
            <button className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-slate-50">
              <Camera className="w-5 h-5 text-slate-700" />
            </button>
          </div>
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 -mt-12">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white object-cover"
                />
                <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow-md hover:bg-slate-50">
                  <Edit className="w-4 h-4 text-slate-700" />
                </button>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-slate-900">{user?.name}</h1>
                <p className="text-slate-600">{user?.role} at {user?.organization}</p>
              </div>
              <Button variant="primary">Edit Profile</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center text-slate-600">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>{user?.email}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+44 (0) 20 1234 5678</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>London, United Kingdom</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Building className="w-5 h-5 mr-3" />
                  <span>{user?.organization}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>Joined January 2024</span>
                </div>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-4">Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                {profileStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-900">About</h2>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </div>
              <p className="text-slate-600">
                Experienced football scout with a proven track record in identifying and developing talent.
                Specialized in youth development and international transfers. Strong network across European
                leagues and deep understanding of modern football tactics and player development.
              </p>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <div>
                      <p className="text-slate-900">Completed negotiation with Manchester United</p>
                      <p className="text-sm text-slate-500">2 days ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;