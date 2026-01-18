import React, { useState } from 'react'
import { CheckCircle, Users, Store, FileText, Award, TrendingUp, Shield, ArrowLeft } from 'lucide-react'

export default function Registration() {
	const [currentView, setCurrentView] = useState('cards') // cards, member-form, merchant-form
	const [memberForm, setMemberForm] = useState({ 
		firstName: '', 
		lastName: '', 
		email: '', 
		phone: '', 
		membershipType: 'Basic Membership' 
	})
	const [merchantForm, setMerchantForm] = useState({ 
		businessName: '', 
		businessType: '',
		contactPerson: '',
		businessEmail: '',
		businessPhone: '',
		website: '',
		businessAddress: '',
		city: '',
		state: '',
		zipCode: '',
		businessDescription: ''
	})
	const [memberSubmitted, setMemberSubmitted] = useState(false)
	const [merchantSubmitted, setMerchantSubmitted] = useState(false)
	const [memberLoading, setMemberLoading] = useState(false)
	const [merchantLoading, setMerchantLoading] = useState(false)

	function handleMemberSubmit(e) {
		e.preventDefault()
		if (!memberForm.firstName || !memberForm.lastName || !memberForm.email || !memberForm.phone) {
			alert('Please fill in all required fields')
			return
		}
		setMemberLoading(true)
		setTimeout(() => {
			setMemberLoading(false)
			setMemberSubmitted(true)
			setTimeout(() => {
				setMemberSubmitted(false)
				setCurrentView('cards')
				setMemberForm({ firstName: '', lastName: '', email: '', phone: '', membershipType: 'Basic Membership' })
			}, 3000)
		}, 1500)
	}

	function handleMerchantSubmit(e) {
		e.preventDefault()
		if (!merchantForm.businessName || !merchantForm.contactPerson || !merchantForm.businessEmail || !merchantForm.businessPhone) {
			alert('Please fill in all required fields')
			return
		}
		setMerchantLoading(true)
		setTimeout(() => {
			setMerchantLoading(false)
			setMerchantSubmitted(true)
			setTimeout(() => {
				setMerchantSubmitted(false)
				setCurrentView('cards')
				setMerchantForm({ 
					businessName: '', 
					businessType: '',
					contactPerson: '',
					businessEmail: '',
					businessPhone: '',
					website: '',
					businessAddress: '',
					city: '',
					state: '',
					zipCode: '',
					businessDescription: ''
				})
			}, 3000)
		}, 1500)
	}

	const memberBenefits = [
		{ icon: Award, text: 'Eligibility: Producers and processors', color: 'text-emerald-600' },
		{ icon: FileText, text: 'Documents: Identity, facility proof', color: 'text-blue-600' },
		{ icon: TrendingUp, text: 'Benefits: Auction access, reports', color: 'text-purple-600' }
	]

	const merchantBenefits = [
		{ icon: Store, text: 'Eligibility: Trading entities and buyers', color: 'text-orange-600' },
		{ icon: FileText, text: 'Forms: Business registration, tax proof', color: 'text-cyan-600' },
		{ icon: Shield, text: 'Terms: Adhere to auction rules', color: 'text-red-600' }
	]

	return (
		<div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 min-h-screen">
			{/* Cards View */}
			{currentView === 'cards' && (
				<>
					{/* Hero Section - Full Screen */}
					<div className="min-h-screen h-screen flex flex-col items-center justify-center px-6 py-12 animate-fadeIn">
						<div className="max-w-4xl w-full text-center">
							{/* Badge */}
							<div className="inline-block mb-6 sm:mb-8 animate-slideUp">
								<div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
									Member & Merchant Registration
								</div>
							</div>

							{/* Main Title */}
							<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-teal-900 mb-4 sm:mb-6 animate-slideUp" style={{ animationDelay: '0.1s' }}>
								Registration Portal
							</h1>

							{/* Subtitle */}
							<p className="text-lg sm:text-xl text-gray-700 mb-12 sm:mb-16 max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s' }}>
								Join our community of producers, processors, and merchants. Simple process, powerful benefits.
							</p>

							{/* Selection Cards */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
								{/* Member Card */}
								<div 
									onClick={() => setCurrentView('member-form')}
									className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer animate-slideUp card-hover"
									style={{ animationDelay: '0.3s' }}
								>
									<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
									<div className="p-8 sm:p-10">
										<div className="flex items-center gap-4 mb-6">
											<div className="bg-gradient-to-br from-teal-500 to-emerald-500 p-3 rounded-lg icon-hover">
												<Users className="w-8 h-8 text-white" />
											</div>
											<h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Member Registration</h2>
										</div>
										
										<ul className="space-y-3 text-left">
											<li className="flex items-start gap-3">
												<Award className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
												<span className="text-gray-700 text-sm sm:text-base">Eligibility: Producers and processors</span>
											</li>
											<li className="flex items-start gap-3">
												<FileText className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
												<span className="text-gray-700 text-sm sm:text-base">Documents: Identity, facility proof</span>
											</li>
											<li className="flex items-start gap-3">
												<TrendingUp className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
												<span className="text-gray-700 text-sm sm:text-base">Benefits: Auction access, reports</span>
											</li>
										</ul>

										<button className="w-full mt-8 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base button-hover">
											Register as Member
										</button>
									</div>
								</div>

								{/* Merchant Card */}
								<div 
									onClick={() => setCurrentView('merchant-form')}
									className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer animate-slideUp card-hover"
									style={{ animationDelay: '0.4s' }}
								>
									<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>
									<div className="p-8 sm:p-10">
										<div className="flex items-center gap-4 mb-6">
											<div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-lg icon-hover">
												<Store className="w-8 h-8 text-white" />
											</div>
											<h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Merchant Registration</h2>
										</div>
										
										<ul className="space-y-3 text-left">
											<li className="flex items-start gap-3">
												<Store className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
												<span className="text-gray-700 text-sm sm:text-base">Eligibility: Trading entities and buyers</span>
											</li>
											<li className="flex items-start gap-3">
												<FileText className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
												<span className="text-gray-700 text-sm sm:text-base">Forms: Business registration, tax proof</span>
											</li>
											<li className="flex items-start gap-3">
												<Shield className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
												<span className="text-gray-700 text-sm sm:text-base">Terms: Adhere to auction rules</span>
											</li>
										</ul>

										<button className="w-full mt-8 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base button-hover">
											Register as Merchant
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Track Status Section */}
					<div className="px-6 py-16 max-w-6xl mx-auto animate-slideUp" style={{ animationDelay: '0.5s' }}>
						<div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
							<div className="flex items-center justify-between flex-wrap gap-4">
								<div>
									<h3 className="text-2xl font-bold mb-2">Track Registration Status Online</h3>
									<p className="text-emerald-100">Monitor your application progress in real-time</p>
								</div>
								<button className="bg-white text-emerald-700 font-bold px-8 py-3 rounded-xl hover:bg-emerald-50 transition-colors duration-300 shadow-lg">
									Track Now
								</button>
							</div>
						</div>
					</div>
				</>
			)}

			{/* Member Form View */}
			{currentView === 'member-form' && (
			<div className="min-h-screen animate-fadeIn">
				{/* Fixed Back Button Header */}
				<div className="sticky top-0 z-50 bg-white border-b-2 border-teal-100 shadow-sm">
					<div className="px-6 py-4 flex items-center">
						<button 
							onClick={() => setCurrentView('cards')}
							className="flex items-center gap-3 text-teal-600 hover:text-teal-700 hover:bg-teal-50 font-semibold px-4 py-2 rounded-lg transition-all duration-300 group"
						>
							<ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
							<span>Back to Registration</span>
						</button>
					</div>
				</div>

				{/* Form Content */}
				<div className="px-6 py-12 flex items-center justify-center">
					<div className="max-w-2xl w-full">
						<div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 relative overflow-hidden animate-slideUp">
							<div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
							
							<div className="relative z-10">
								<div className="mb-10">
									<h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-3">
										Member Registration
									</h2>
									<p className="text-gray-600 text-lg">Join our community of producers and processors</p>
								</div>

								<form onSubmit={handleMemberSubmit} className="space-y-6">
									{/* Row 1: First & Last Name */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
										<div className="group">
											<label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
											<input 
												type="text"
												className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400"
												placeholder="John" 
												value={memberForm.firstName} 
												onChange={e => setMemberForm({ ...memberForm, firstName: e.target.value })}
												required
											/>
										</div>
										<div className="group">
											<label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
											<input 
												type="text"
												className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400"
												placeholder="Doe" 
												value={memberForm.lastName} 
												onChange={e => setMemberForm({ ...memberForm, lastName: e.target.value })}
												required
											/>
										</div>
									</div>

									{/* Row 2: Email & Phone */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
										<div className="group">
											<label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
											<input 
												type="email"
												className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400"
												placeholder="john@example.com" 
												value={memberForm.email} 
												onChange={e => setMemberForm({ ...memberForm, email: e.target.value })}
												required
											/>
										</div>
										<div className="group">
											<label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
											<input 
												type="tel"
												className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400"
												placeholder="+1 (555) 000-0000" 
												value={memberForm.phone} 
												onChange={e => setMemberForm({ ...memberForm, phone: e.target.value })}
												required
											/>
										</div>
									</div>

									{/* Row 3: Membership Type */}
									<div className="group">
										<label className="block text-sm font-semibold text-gray-700 mb-2">Membership Type *</label>
										<select 
											className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
											value={memberForm.membershipType}
											onChange={e => setMemberForm({ ...memberForm, membershipType: e.target.value })}
										>
											<option>Basic Membership</option>
											<option>Premium Membership</option>
											<option>Enterprise Membership</option>
										</select>
									</div>

									{/* Submit Button */}
									<div className="pt-6">
										<button 
											type="submit"
											disabled={memberLoading}
											className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
										>
											{memberLoading ? (
												<>
													<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
													<span>Processing...</span>
												</>
											) : (
												<>
													<span>Complete Registration</span>
													<CheckCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
												</>
											)}
										</button>
										
										{memberSubmitted && (
											<div className="mt-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-4 flex items-center gap-3 animate-slideDown">
												<CheckCircle className="w-6 h-6 text-emerald-600 animate-bounce" />
												<span className="text-emerald-800 font-semibold">Registration submitted successfully!</span>
											</div>
										)}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)}

		{/* Merchant Form View */}
		{currentView === 'merchant-form' && (
			<div className="min-h-screen animate-fadeIn">
				{/* Fixed Back Button Header */}
				<div className="sticky top-0 z-50 bg-white border-b-2 border-orange-100 shadow-sm">
					<div className="px-6 py-4 flex items-center">
						<button 
							onClick={() => setCurrentView('cards')}
							className="flex items-center gap-3 text-orange-600 hover:text-orange-700 hover:bg-orange-50 font-semibold px-4 py-2 rounded-lg transition-all duration-300 group"
						>
							<ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
							<span>Back to Registration</span>
						</button>
					</div>
				</div>

				{/* Form Content */}
				<div className="px-6 py-12 flex items-center justify-center">
					<div className="max-w-2xl w-full">
						<div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 relative overflow-hidden animate-slideUp">
							<div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-3xl"></div>
							
							<div className="relative z-10">
								<div className="mb-10">
									<h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-3">
										Merchant Registration
									</h2>
									<p className="text-gray-600 text-lg">Register your business to access our auction platform</p>
								</div>

								<form onSubmit={handleMerchantSubmit} className="space-y-6">
									{/* Row 1: Business Name & Type */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
										<div className="group">
											<label className="block text-sm font-semibold text-gray-700 mb-2">Business Name *</label>
											<input 
												type="text"
												className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400"
												placeholder="Your Business Name" 
												value={merchantForm.businessName} 
												onChange={e => setMerchantForm({ ...merchantForm, businessName: e.target.value })}
												required
											/>
										</div>
										<div className="group">
											<label className="block text-sm font-semibold text-gray-700 mb-2">Business Type *</label>
											<select 
												className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
												value={merchantForm.businessType}
												onChange={e => setMerchantForm({ ...merchantForm, businessType: e.target.value })}
												required
											>
												<option value="">Select Business Type</option>
												<option value="Trader">Trader</option>
												<option value="Buyer">Buyer</option>
												<option value="Distributor">Distributor</option>
												<option value="Exporter">Exporter</option>
											</select>
										</div>
									</div>

									{/* Row 2: Contact Person & Email */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
										<div className="group">
											<label className="block text-sm font-semibold text-gray-700 mb-2">Contact Person *</label>
											<input 
												type="text"
												className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400"
												placeholder="Full Name" 
												value={merchantForm.contactPerson} 
												onChange={e => setMerchantForm({ ...merchantForm, contactPerson: e.target.value })}
												required
											/>
										</div>
										<div className="group">
											<label className="block text-sm font-semibold text-gray-700 mb-2">Business Email *</label>
											<input 
												type="email"
												className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400"
												placeholder="business@example.com" 
												value={merchantForm.businessEmail} 
												onChange={e => setMerchantForm({ ...merchantForm, businessEmail: e.target.value })}
												required
											/>
										</div>
									</div>

									{/* Row 3: Phone & Website */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
										<div className="group">
											<label className="block text-sm font-semibold text-gray-700 mb-2">Business Phone *</label>
											<input 
												type="tel"
												className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400"
												placeholder="+1 (555) 000-0000" 
												value={merchantForm.businessPhone} 
												onChange={e => setMerchantForm({ ...merchantForm, businessPhone: e.target.value })}
												required
											/>
										</div>
										<div className="group">
											<label className="block text-sm font-semibold text-gray-700 mb-2">Website</label>
											<input 
												type="url"
												className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400"
												placeholder="https://yourbusiness.com" 
												value={merchantForm.website} 
												onChange={e => setMerchantForm({ ...merchantForm, website: e.target.value })}
											/>
										</div>
									</div>

									{/* Row 4: Business Address */}
									<div className="group">
										<label className="block text-sm font-semibold text-gray-700 mb-2">Business Address *</label>
										<input 
											type="text"
											className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400"
											placeholder="Street Address" 
											value={merchantForm.businessAddress} 
											onChange={e => setMerchantForm({ ...merchantForm, businessAddress: e.target.value })}
											required
										/>
									</div>

									{/* Row 5: City, State, Zip */}
									<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
										<div className="group">
											<label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
											<input 
												type="text"
												className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400"
												placeholder="City" 
												value={merchantForm.city} 
												onChange={e => setMerchantForm({ ...merchantForm, city: e.target.value })}
												required
											/>
										</div>
										<div className="group">
											<label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
											<input 
												type="text"
												className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400"
												placeholder="State" 
												value={merchantForm.state} 
												onChange={e => setMerchantForm({ ...merchantForm, state: e.target.value })}
												required
											/>
										</div>
										<div className="group">
											<label className="block text-sm font-semibold text-gray-700 mb-2">Zip Code *</label>
											<input 
												type="text"
												className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400"
												placeholder="12345" 
												value={merchantForm.zipCode} 
												onChange={e => setMerchantForm({ ...merchantForm, zipCode: e.target.value })}
												required
											/>
										</div>
									</div>

									{/* Row 6: Business Description */}
									<div className="group">
										<label className="block text-sm font-semibold text-gray-700 mb-2">Business Description</label>
										<textarea 
											className="w-full border-2 border-gray-200 rounded-xl p-3 sm:p-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm placeholder-gray-400 resize-none"
											placeholder="Tell us about your business..." 
											rows="4"
											value={merchantForm.businessDescription} 
											onChange={e => setMerchantForm({ ...merchantForm, businessDescription: e.target.value })}
										/>
									</div>

									{/* Submit Button */}
									<div className="pt-6">
										<button 
											type="submit"
											disabled={merchantLoading}
											className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
										>
											{merchantLoading ? (
												<>
													<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
													<span>Processing...</span>
												</>
											) : (
												<>
													<span>Complete Registration</span>
													<CheckCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
												</>
											)}
										</button>
										
										{merchantSubmitted && (
											<div className="mt-4 bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-4 flex items-center gap-3 animate-slideDown">
												<CheckCircle className="w-6 h-6 text-orange-600 animate-bounce" />
												<span className="text-orange-800 font-semibold">Registration submitted successfully!</span>
											</div>
										)}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)}

		<style>{`
				/* Fade In Animation */
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}

				/* Slide Up Animation */
				@keyframes slideUp {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				/* Slide Down Animation */
				@keyframes slideDown {
					from {
						opacity: 0;
						transform: translateY(-20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				/* Card Hover Glow */
				@keyframes cardGlow {
					0% {
						box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
					}
					50% {
						box-shadow: 0 20px 50px rgba(16, 185, 129, 0.15), 0 0 30px rgba(16, 185, 129, 0.1);
					}
					100% {
						box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
					}
				}

				/* Icon Pulse */
				@keyframes iconPulse {
					0% {
						transform: scale(1);
					}
					50% {
						transform: scale(1.1);
					}
					100% {
						transform: scale(1);
					}
				}

				/* Apply Animations */
				.animate-fadeIn {
					animation: fadeIn 0.8s ease-out;
				}

				.animate-slideUp {
					animation: slideUp 0.6s ease-out;
					animation-fill-mode: both;
				}

				.animate-slideDown {
					animation: slideDown 0.5s ease-out;
				}

				/* Card Hover Enhancement */
				.card-hover {
					position: relative;
					overflow: hidden;
				}

				.card-hover::before {
					content: '';
					position: absolute;
					top: 0;
					left: -100%;
					width: 100%;
					height: 100%;
					background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
					transition: left 0.5s ease-in-out;
				}

				.card-hover:hover::before {
					left: 100%;
				}

				.card-hover:hover {
					transform: scale(1.03) translateY(-5px);
					box-shadow: 0 20px 50px rgba(16, 185, 129, 0.2);
				}

				/* Icon Hover Animation */
				.icon-hover {
					transition: all 0.3s ease-in-out;
					cursor: pointer;
				}

				.card-hover:hover .icon-hover {
					transform: scale(1.15) rotate(5deg);
					animation: iconPulse 0.6s ease-in-out;
				}

				/* Button Hover Enhancement */
				.button-hover {
					position: relative;
					overflow: hidden;
				}

				.button-hover::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					width: 0;
					height: 0;
					border-radius: 50%;
					background: rgba(255, 255, 255, 0.3);
					transform: translate(-50%, -50%);
					transition: width 0.6s, height 0.6s;
				}

				.button-hover:hover::after {
					width: 300px;
					height: 300px;
				}

				/* Input Focus Enhancement */
				input:focus,
				select:focus,
				textarea:focus {
					background-color: rgba(255, 255, 255, 0.8) !important;
					border-color: inherit !important;
				}

				/* Spin Animation for Loading */
				@keyframes spin {
					to {
						transform: rotate(360deg);
					}
				}

				.animate-spin {
					animation: spin 1s linear infinite;
				}

				/* Bounce Animation */
				@keyframes bounce {
					0%, 100% {
						opacity: 1;
					}
					50% {
						opacity: 0.7;
					}
				}

				.animate-bounce {
					animation: bounce 2s infinite;
				}

				/* Smooth Transitions */
				* {
					transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
				}

				button {
					transition: all 0.3s ease;
				}
			`}</style>
		</div>
	)
}

