import React, { useState } from 'react'
import { Beaker, Microscope, FileCheck, Gavel, GraduationCap, CheckCircle } from 'lucide-react'

export default function Services() {
	const [hoveredCard, setHoveredCard] = useState(null)

	const services = [
		{
			id: 1,
			icon: Beaker,
			title: "Laboratory Testing Services",
			description: "Moisture, Purity, Color, Texture, Particle Size",
			subtitle: "Chemical & Microbiological Testing",
			features: ["Certified Reports", "Fast Turnaround", "ISO Compliant"],
			gradient: "from-blue-500 to-cyan-500",
			bgGradient: "from-blue-50 to-cyan-50"
		},
		{
			id: 2,
			icon: Microscope,
			title: "Advanced Analysis",
			description: "Batch-wise Sample Analysis & Certificates",
			subtitle: "Complete Traceability",
			features: ["E-Auction Guidance", "Real-time Updates", "Detailed Reports"],
			gradient: "from-purple-500 to-pink-500",
			bgGradient: "from-purple-50 to-pink-50"
		},
		{
			id: 3,
			icon: Gavel,
			title: "Auction Facilitation",
			description: "E-Auction Platform Support",
			subtitle: "Transparent Trading",
			features: ["Live Bidding", "Price Discovery", "Secure Transactions"],
			gradient: "from-orange-500 to-red-500",
			bgGradient: "from-orange-50 to-red-50"
		},
		{
			id: 4,
			icon: GraduationCap,
			title: "Training & Workshops",
			description: "Consultation & Advisory Services",
			subtitle: "Capacity Building",
			features: ["Expert Guidance", "Best Practices", "Quality Improvement"],
			gradient: "from-green-500 to-emerald-500",
			bgGradient: "from-green-50 to-emerald-50"
		}
	]

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
			{/* Animated Background Elements */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
				<div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
				<div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Hero Section */}
				<div className="text-center mb-16 space-y-4 mt-8 sm:mt-12 lg:mt-16">
					<div className="inline-block">
						<div className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
							<h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
								Services & Laboratory
							</h1>
						</div>
					</div>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Accredited testing and comprehensive member support
					</p>
					<div className="flex justify-center gap-2 mt-6">
						<div className="h-1 w-12 bg-blue-500 rounded"></div>
						<div className="h-1 w-12 bg-purple-500 rounded"></div>
						<div className="h-1 w-12 bg-pink-500 rounded"></div>
					</div>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					{services.map((service, index) => {
						const Icon = service.icon
						const isHovered = hoveredCard === service.id
						
						return (
							<div
								key={service.id}
								onMouseEnter={() => setHoveredCard(service.id)}
								onMouseLeave={() => setHoveredCard(null)}
								className={`relative group transition-all duration-500 transform ${
									isHovered ? 'scale-105 -translate-y-2' : 'scale-100'
								}`}
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500`}></div>
								
								<div className={`relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden`}>
									{/* Animated background pattern */}
									<div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
									
									{/* Icon */}
									<div className={`relative mb-6 inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} transform group-hover:rotate-6 transition-transform duration-500`}>
										<Icon className="w-8 h-8 text-white" />
									</div>

									{/* Content */}
									<div className="relative">
										<h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
											{service.title}
										</h3>
										<p className="text-gray-600 mb-2 font-medium">{service.description}</p>
										<p className="text-sm text-gray-500 mb-4">{service.subtitle}</p>

										{/* Features with checkmarks */}
										<div className="space-y-2 mt-4">
											{service.features.map((feature, idx) => (
												<div 
													key={idx}
													className="flex items-center gap-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
													style={{ transitionDelay: `${idx * 50}ms` }}
												>
													<CheckCircle className={`w-5 h-5 text-green-500 ${isHovered ? 'animate-bounce' : ''}`} style={{ animationDelay: `${idx * 100}ms` }} />
													<span className="text-sm text-gray-700">{feature}</span>
												</div>
											))}
										</div>
									</div>

									{/* Hover effect corner */}
									<div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500`}></div>
								</div>
							</div>
						)
					})}
				</div>

				{/* Bottom CTA Section */}
				<div className="mt-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
					<div className="absolute inset-0 bg-black opacity-10"></div>
					<div className="relative z-10">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Ready to Get Started?
						</h2>
						<p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
							Experience world-class laboratory services and expert consultation
						</p>
						<button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-50">
							Contact Our Team
						</button>
					</div>
					
					{/* Decorative elements */}
					<div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full opacity-10"></div>
					<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full opacity-10"></div>
				</div>
			</div>

			<style>{`
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(-20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.animate-fade-in {
					animation: fade-in 1s ease-out;
				}

				.delay-1000 {
					animation-delay: 1s;
				}

				.delay-2000 {
					animation-delay: 2s;
				}
			`}</style>
		</div>
	)
}