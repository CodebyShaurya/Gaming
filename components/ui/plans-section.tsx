'use client';

import { useState } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    period: "per month",
    description: "Perfect for casual gamers",
    icon: <Star className="h-6 w-6" />,
    features: [
      "Access to 100+ games",
      "HD gaming quality",
      "5 device downloads",
      "Basic customer support",
      "Monthly game updates"
    ],
    color: "border-gray-600",
    buttonColor: "bg-gray-600 hover:bg-gray-700",
    popular: false
  },
  {
    name: "Premium",
    price: "$19.99",
    period: "per month",
    description: "Most popular choice",
    icon: <Zap className="h-6 w-6" />,
    features: [
      "Access to 500+ games",
      "4K gaming quality",
      "10 device downloads",
      "Priority customer support",
      "Weekly game updates",
      "Early access to new releases",
      "Exclusive game content"
    ],
    color: "border-purple-500",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    popular: true
  },
  {
    name: "Ultimate",
    price: "$29.99",
    period: "per month",
    description: "For hardcore gamers",
    icon: <Crown className="h-6 w-6" />,
    features: [
      "Access to 1000+ games",
      "8K gaming quality",
      "Unlimited device downloads",
      "24/7 premium support",
      "Daily game updates",
      "Beta access to upcoming games",
      "Exclusive collector's content",
      "VIP community access",
      "Personal game recommendations"
    ],
    color: "border-yellow-500",
    buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    popular: false
  }
];

export default function PlansSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Select the perfect subscription plan for your gaming needs. All plans include offline play and instant downloads.
          </p>
          
          <div className="inline-flex items-center bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                !isAnnual ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isAnnual ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-gray-800 rounded-2xl p-8 border-2 ${plan.color} ${
                plan.popular ? 'scale-105' : ''
              } transition-transform hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                  plan.name === 'Basic' ? 'bg-gray-700 text-gray-300' :
                  plan.name === 'Premium' ? 'bg-purple-600 text-white' :
                  'bg-yellow-600 text-white'
                }`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {isAnnual ? 
                      `$${(parseFloat(plan.price.replace('$', '')) * 12 * 0.8).toFixed(2)}` : 
                      plan.price
                    }
                  </span>
                  <span className="text-gray-400 ml-2">
                    {isAnnual ? 'per year' : plan.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className={`w-full ${plan.buttonColor} text-white`}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            All plans include a 7-day free trial • Cancel anytime • No hidden fees
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-400" />
              <span className="text-gray-300">Instant Downloads</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-400" />
              <span className="text-gray-300">Offline Play</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-400" />
              <span className="text-gray-300">Cross-Platform</span>
            </div>
          </div>
        </div>
      </div> */}

      <div id="pricing" className="py-20 md:px-20 lg:px-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h3 className="text-purple-400" data-aos="fade-down">
              Pricing Plans
            </h3>
            <h2 className="text-white text-[30px] font-bold" data-aos="fade-down">
              Choose Your Perfect Package
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400" data-aos="fade-down">
              Select from our carefully curated photography packages designed to meet
              your specific needs and budget.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Basic Package Card */}
            <div className="relative bg-[#1A1A1A] border-gray-800 p-6 rounded-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">Basic Package</h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl text-violet-400 font-bold">₹499</span>
                  <span className="text-gray-400">/session</span>
                </div>
              </div>
              <div className="mt-6">
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">2 Hour Photo Session</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">50 Digital Images</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">Online Gallery</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">Basic Editing</span>
                  </li>
                </ul>
                <span className="cursor-pointer w-full py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
                  Choose Plan
                </span>
              </div>
            </div>
            {/* Premium Package Card */}
            <div className="relative bg-violet-900/20 backdrop-blur-lg rounded-2xl border-2 border-violet-500 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-3 py-1 text-white text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-white">Premium Package</h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl text-violet-400 font-bold">₹899</span>
                  <span className="text-gray-400">/session</span>
                </div>
              </div>
              <div className="px-4 pb-8">
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">4 Hour Photo Session</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">100 Digital Images</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">Online Gallery</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">Advanced Editing</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">Print Release</span>
                  </li>
                </ul>
                <span className="cursor-pointer w-full py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
                  Choose Plan
                </span>
              </div>
            </div>
            {/* Professional Package Card */}
            <div className="relative bg-[#1A1A1A] border-gray-800 p-6 rounded-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">
                  Professional Package
                </h3>
                <div className="mt-4 text-center">
                  <span className="text-3xl text-violet-400 font-bold">₹1499</span>
                  <span className="text-gray-400">/session</span>
                </div>
              </div>
              <div className="mt-6">
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">Full Day Coverage</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">Unlimited Images</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">Premium Online Gallery</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">Premium Editing</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-purple-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white">Photo Album</span>
                  </li>
                </ul>
                <span className="cursor-pointer w-full py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105">
                  Choose Plan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}