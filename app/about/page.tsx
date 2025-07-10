import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Users, Target, Award, Globe } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "10M+",
    label: "Active Gamers"
  },
  {
    icon: <Target className="h-8 w-8" />,
    value: "1000+",
    label: "Premium Games"
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "50+",
    label: "Awards Won"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    value: "150+",
    label: "Countries"
  }
];

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Gaming industry veteran with 15 years of experience building world-class gaming platforms."
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Former Microsoft engineer specializing in cloud gaming infrastructure and scalable systems."
  },
  {
    name: "Mike Rodriguez",
    role: "Head of Game Partnerships",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "20+ years in game publishing, responsible for our exclusive game partnerships and content strategy."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About GameVault
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to revolutionize gaming by making premium games accessible to everyone 
              through our innovative subscription model. Join millions of gamers worldwide who trust GameVault.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-lg mb-4">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  GameVault was founded in 2020 with a simple vision: to create the ultimate gaming platform 
                  that puts players first. We saw how fragmented the gaming industry had become, with games 
                  scattered across different platforms and expensive individual purchases.
                </p>
                <p>
                  Our team of gaming industry veterans came together to build something different - a unified 
                  platform where gamers could access thousands of premium games through a simple subscription model.
                </p>
                <p>
                  Today, we're proud to serve over 10 million gamers worldwide, offering them instant access 
                  to the best games across all genres, with new titles added weekly.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gaming setup"
                className="rounded-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To democratize gaming by providing affordable access to premium games, 
                fostering a global community of gamers, and supporting independent developers 
                through our platform.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To become the world's leading gaming platform where every gamer can discover, 
                play, and enjoy the best games without barriers, creating connections and 
                experiences that last a lifetime.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We continuously push the boundaries of what's possible in gaming technology 
                  and user experience.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">Community</h3>
                <p className="text-gray-300">
                  We believe in the power of gaming to bring people together and create 
                  meaningful connections.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">Quality</h3>
                <p className="text-gray-300">
                  We're committed to delivering the highest quality gaming experiences 
                  with exceptional performance and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}