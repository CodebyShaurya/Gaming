'use client';

import { useState } from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Search, Filter, Star, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const games = [
  {
    id: 1,
    title: "Cyber Legends",
    genre: "Action RPG",
    rating: 4.8,
    downloads: "2.5M",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Experience the ultimate cyberpunk adventure in this groundbreaking RPG set in a dystopian future.",
    category: "action"
  },
  {
    id: 2,
    title: "Mystic Realms",
    genre: "Fantasy Adventure",
    rating: 4.9,
    downloads: "3.2M",
    image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Journey through magical realms filled with mythical creatures and ancient mysteries.",
    category: "adventure"
  },
  {
    id: 3,
    title: "Space Odyssey",
    genre: "Sci-Fi Strategy",
    rating: 4.7,
    downloads: "1.8M",
    image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Command your fleet across the galaxy in this epic space strategy game.",
    category: "strategy"
  },
  {
    id: 4,
    title: "Urban Legends",
    genre: "Action Thriller",
    rating: 4.6,
    downloads: "2.1M",
    image: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Navigate through the dark streets of the city in this intense action thriller.",
    category: "action"
  },
  {
    id: 5,
    title: "Dragon's Quest",
    genre: "Medieval RPG",
    rating: 4.9,
    downloads: "4.1M",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Embark on an epic quest in a medieval fantasy world filled with dragons and magic.",
    category: "rpg"
  },
  {
    id: 6,
    title: "Racing Thunder",
    genre: "Racing",
    rating: 4.5,
    downloads: "1.9M",
    image: "https://images.pexels.com/photos/1181463/pexels-photo-1181463.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Experience high-speed racing with realistic physics and stunning graphics.",
    category: "racing"
  }
];

const categories = [
  { id: 'all', name: 'All Games' },
  { id: 'action', name: 'Action' },
  { id: 'rpg', name: 'RPG' },
  { id: 'strategy', name: 'Strategy' },
  { id: 'adventure', name: 'Adventure' },
  { id: 'racing', name: 'Racing' }
];

export default function GamesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.genre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Game Library
            </h1>
            <p className="text-xl text-gray-300">
              Explore our extensive collection of premium games
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map(game => (
              <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{game.title}</h3>
                    <p className="text-purple-400">{game.genre}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{game.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">{game.downloads}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    {game.description}
                  </p>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                      <Play className="h-4 w-4 mr-2" />
                      Play Now
                    </Button>
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}