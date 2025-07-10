import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import PlansSection from '@/components/ui/plans-section';
import { Check, X } from 'lucide-react';

const features = [
  {
    name: "Game Library Access",
    basic: "100+ games",
    premium: "500+ games",
    ultimate: "1000+ games"
  },
  {
    name: "Gaming Quality",
    basic: "HD (1080p)",
    premium: "4K (2160p)",
    ultimate: "8K (4320p)"
  },
  {
    name: "Device Downloads",
    basic: "5 devices",
    premium: "10 devices",
    ultimate: "Unlimited"
  },
  {
    name: "Customer Support",
    basic: "Basic support",
    premium: "Priority support",
    ultimate: "24/7 premium support"
  },
  {
    name: "Game Updates",
    basic: "Monthly",
    premium: "Weekly",
    ultimate: "Daily"
  },
  {
    name: "Early Access",
    basic: false,
    premium: true,
    ultimate: true
  },
  {
    name: "Beta Access",
    basic: false,
    premium: false,
    ultimate: true
  },
  {
    name: "VIP Community",
    basic: false,
    premium: false,
    ultimate: true
  }
];

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Subscription Plans
            </h1>
            <p className="text-xl text-gray-300">
              Choose the perfect plan for your gaming journey
            </p>
          </div>
          
          <PlansSection />
          
          {/* Feature Comparison */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Compare Features
            </h2>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-700">
                      <th className="px-6 py-4 text-left text-white font-semibold">Features</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Basic</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Premium</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Ultimate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <tr key={feature.name} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}>
                        <td className="px-6 py-4 text-white font-medium">{feature.name}</td>
                        <td className="px-6 py-4 text-center text-gray-300">
                          {typeof feature.basic === 'boolean' ? (
                            feature.basic ? (
                              <Check className="h-5 w-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-red-400 mx-auto" />
                            )
                          ) : (
                            feature.basic
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300">
                          {typeof feature.premium === 'boolean' ? (
                            feature.premium ? (
                              <Check className="h-5 w-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-red-400 mx-auto" />
                            )
                          ) : (
                            feature.premium
                          )}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300">
                          {typeof feature.ultimate === 'boolean' ? (
                            feature.ultimate ? (
                              <Check className="h-5 w-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-red-400 mx-auto" />
                            )
                          ) : (
                            feature.ultimate
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}