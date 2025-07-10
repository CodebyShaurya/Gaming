'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const games = [
  {
    id: 1,
    title: "Cyber Legends",
    genre: "Action RPG",
    rating: 4.8,
    downloads: "2.5M",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Experience the ultimate cyberpunk adventure in this groundbreaking RPG set in a dystopian future."
  },
  {
    id: 2,
    title: "Mystic Realms",
    genre: "Fantasy Adventure",
    rating: 4.9,
    downloads: "3.2M",
    image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Journey through magical realms filled with mythical creatures and ancient mysteries waiting to be discovered."
  },
  {
    id: 3,
    title: "Space Odyssey",
    genre: "Sci-Fi Strategy",
    rating: 4.7,
    downloads: "1.8M",
    image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Command your fleet across the galaxy in this epic space strategy game with stunning visuals and deep gameplay."
  },
  {
    id: 4,
    title: "Urban Legends",
    genre: "Action Thriller",
    rating: 4.6,
    downloads: "2.1M",
    image: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=800",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Navigate through the dark streets of the city in this intense action thriller with immersive storytelling."
  },
  {
    id: 5,
    title: "Dragon's Quest",
    genre: "Medieval RPG",
    rating: 4.9,
    downloads: "4.1M",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Embark on an epic quest in a medieval fantasy world filled with dragons, magic, and legendary heroes."
  }
];

export default function GameCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length);
  };

  const selectGame = (game: typeof games[0]) => {
    setSelectedGame(game);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Games
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most popular games in our library. Click on any game to see more details.
          </p>
        </div>

        {/* Game Carousel */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center space-x-4 overflow-x-auto pb-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <div className="flex space-x-4">
              {games.map((game, index) => (
                <div
                  key={game.id}
                  onClick={() => selectGame(game)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedGame.id === game.id ? 'scale-110' : 'scale-100 hover:scale-105'
                  }`}
                >
                  <div className="relative group">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-48 h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>
                    <div className="absolute bottom-2 left-2 text-white">
                      <h3 className="text-sm font-bold">{game.title}</h3>
                      <p className="text-xs text-gray-300">{game.genre}</p>
                    </div>
                    {selectedGame.id === game.id && (
                      <div className="absolute inset-0 border-2 border-purple-500 rounded-lg"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Selected Game Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={selectedGame.image}
                alt={selectedGame.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <button className="p-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors">
                  <Play className="h-8 w-8 text-white" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{selectedGame.title}</h3>
              <p className="text-purple-400 text-lg">{selectedGame.genre}</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-white font-semibold">{selectedGame.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Download className="h-5 w-5 text-green-400" />
                <span className="text-white font-semibold">{selectedGame.downloads}</span>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {selectedGame.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Play className="h-5 w-5 mr-2" />
                Play Now
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Download className="h-5 w-5 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}