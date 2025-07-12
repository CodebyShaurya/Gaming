'use client';

import React from 'react';

const plans = [
	{
		name: 'Basic Package',
		price: '₹149',
		period: '/month',
		description: 'Perfect for casual gamers',
		features: [
			'2 Legendary Games',
			'50 Top Games',
			'Access to full library',
			'Cloud Saving',
      '2 devices (PC, Console, Mobile)',
		],
		popular: false,
		color: '',
	},
	{
		name: 'Premium Package',
		price: '₹249',
		period: '/month',
		description: 'Most popular choice',
		features: [
      '4 Legendary Games',
			'100 Top Games',
			'Access to full library',
			'Cloud Saving',
      '3 devices (PC, Console, Mobile)',
		],
		popular: true,
		color: 'border-2 border-violet-500',
	},
	{
		name: 'Professional Package',
		price: '₹499',
		period: '/month',
		description: 'For hardcore gamers',
		features: [
			'All Legendary Games',
			'All Top Games',
			'Access to full library',
			'Cloud Saving',
      '5 devices (PC, Console, Mobile)',
		],
		popular: false,
		color: '',
	},
];

const PlanCard = ({
	name,
	price,
	period,
	description,
	features,
	popular,
	color,
}: typeof plans[0]) => (
	<div
		className={`relative bg-[#1A1A1A] border-gray-800 p-6 rounded-xl ${color}`}
	>
		{popular && (
			<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-3 py-1 text-white text-sm font-semibold">
				Most Popular
			</div>
		)}
		<div className="text-center">
			<h3 className="text-2xl font-bold text-white">{name}</h3>
			<div className="mt-4 text-center">
				<span className="text-4xl text-violet-400 font-bold">{price}</span>
				<span className="text-gray-400">{period}</span>
			</div>
			<p className="mt-2 text-gray-400">{description}</p>
		</div>
		<div className="mt-6">
			<ul className="mb-8 space-y-4">
				{features.map((feature, idx) => (
					<li key={idx} className="flex items-center">
						<svg
							className="mr-2 h-5 w-5 text-purple-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M9 12l2 2 4-4" />
						</svg>
						<span className="text-white">{feature}</span>
					</li>
				))}
			</ul>
			<div className="flex justify-center">
				<a
					href="/get-updates"
					className="cursor-pointer w-[70%] py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
				>
					Coming Soon
				</a>
			</div>
		</div>
	</div>
);

export default function PlansSection() {
	return (
		<section className="bg-gradient-to-b from-gray-900 to-black">
			<div id="pricing" className="py-20 md:px-20 lg:px-20 bg-black">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h3 className="text-purple-400">Pricing Plans</h3>
						<h2 className="text-white text-[30px] font-bold">
							Choose Your Perfect Package
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-gray-400">
							Select from our carefully curated packages designed to meet your
							specific needs and budget.
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{plans.map((plan, idx) => (
							<PlanCard key={idx} {...plan} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}