import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Send, Phone, Video, MoreVertical } from 'lucide-react';
import Button from '../components/Button';

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  
  const chats = [
    {
      id: 1,
      name: "Arsenal FC",
      lastMessage: "Let's discuss the transfer details...",
      time: "2m ago",
      unread: 2,
      avatar: "https://images.pexels.com/photos/12705916/pexels-photo-12705916.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "FC Barcelona",
      lastMessage: "The player is available for...",
      time: "1h ago",
      unread: 0,
      avatar: "https://images.pexels.com/photos/14324705/pexels-photo-14324705.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Bayern Munich",
      lastMessage: "Thank you for your offer...",
      time: "3h ago",
      unread: 1,
      avatar: "https://images.pexels.com/photos/14717198/pexels-photo-14717198.jpeg?auto=compress&cs=tinysrgb&w=600"
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
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {/* Chats Sidebar */}
            <div className="border-r border-slate-200">
              <div className="p-4">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search messages..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedChat === chat.id ? 'bg-blue-50' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={chat.avatar}
                          alt={chat.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-slate-900 truncate">
                              {chat.name}
                            </h3>
                            <span className="text-xs text-slate-500">{chat.time}</span>
                          </div>
                          <p className="text-sm text-slate-600 truncate">
                            {chat.lastMessage}
                          </p>
                        </div>
                        {chat.unread > 0 && (
                          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-2 lg:col-span-3 h-[calc(100vh-8rem)]">
              {selectedChat ? (
                <div className="h-full flex flex-col">
                  {/* Chat Header */}
                  <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={chats.find(c => c.id === selectedChat)?.avatar}
                        alt="Chat"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <h2 className="font-semibold text-slate-900">
                        {chats.find(c => c.id === selectedChat)?.name}
                      </h2>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="p-2 hover:bg-slate-100 rounded-full">
                        <Phone className="w-5 h-5 text-slate-600" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-full">
                        <Video className="w-5 h-5 text-slate-600" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-full">
                        <MoreVertical className="w-5 h-5 text-slate-600" />
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-4">
                      {/* Sample messages - replace with actual messages */}
                      <div className="flex justify-end">
                        <div className="bg-blue-500 text-white rounded-lg p-3 max-w-md">
                          <p>Hi, I'd like to discuss the transfer details for Player X.</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-slate-100 rounded-lg p-3 max-w-md">
                          <p>Sure, we're open to negotiations. What's your offer?</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-slate-200">
                    <div className="flex items-center gap-4">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Button variant="primary">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-500">
                  Select a chat to start messaging
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Messages;