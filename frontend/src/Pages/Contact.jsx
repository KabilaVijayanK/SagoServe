import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, Globe } from 'lucide-react'

const SectionTittle = ({ title, subtitle }) => (
   <div className="text-center mb-12 space-y-3 mt-8 sm:mt-12 lg:mt-16">
    <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
      {title}
    </h1>
    <p className="text-gray-600 text-lg">{subtitle}</p>
    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
  </div>
)
 
const Card = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 ${className}`}>
    {title && <h3 className="text-2xl font-bold mb-6 text-gray-800">{title}</h3>}
    {children}
  </div>
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [hoveredContact, setHoveredContact] = useState(null)
  const [focusedField, setFocusedField] = useState(null)

  function handleSubmit() {
    if (form.name && form.email && form.message) {
      setSent(true)
      setTimeout(() => {
        setSent(false)
        setForm({ name: '', email: '', message: '' })
      }, 3000)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: "123 Industry Road, City, Country",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 99999 99999",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@sagoserve.org",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50"
    }
  ]

  const features = [
    { icon: MapPin, text: "Office Address, Phone, Email", color: "text-emerald-600" },
    { icon: Globe, text: "Google Map Integration", color: "text-blue-600" },
    { icon: MessageSquare, text: "Message / Contact Form", color: "text-purple-600" },
    { icon: Send, text: "Social Media Links", color: "text-pink-600" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <SectionTittle title="Contact Us" subtitle="Get in touch with us for any inquiries" />

        {/* Animated Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <feature.icon className={`w-10 h-10 ${feature.color} mb-3`} />
              <p className="text-gray-700 font-medium">{feature.text}</p>
              <div className="mt-3 h-1 w-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredContact(idx)}
                onMouseLeave={() => setHoveredContact(null)}
                className={`${info.bgColor} rounded-2xl p-6 transform transition-all duration-300 ${
                  hoveredContact === idx ? 'scale-105 shadow-2xl' : 'shadow-lg'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-4 bg-gradient-to-br ${info.color} rounded-xl transform transition-transform duration-300 ${
                    hoveredContact === idx ? 'rotate-12 scale-110' : ''
                  }`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-200 to-cyan-200 rounded-full blur-3xl opacity-30 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30 -ml-20 -mb-20"></div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-6 relative z-10">Send Message</h2>
            
            {sent ? (
              <div className="relative z-10 text-center py-12">
                <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-emerald-600 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you soon.</p>
              </div>
            ) : (
              <div className="space-y-5 relative z-10">
                <div className={`transform transition-all duration-300 ${focusedField === 'name' ? 'scale-105' : ''}`}>
                  <input
                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                
                <div className={`transform transition-all duration-300 ${focusedField === 'email' ? 'scale-105' : ''}`}>
                  <input
                    type="email"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                
                <div className={`transform transition-all duration-300 ${focusedField === 'message' ? 'scale-105' : ''}`}>
                  <textarea
                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none resize-none"
                    rows={5}
                    placeholder="Your Message"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            )}
          </Card>
        </div>

        {/* Map Section */}
        <Card title="📍 Find Us on Map">
          <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
                <p className="text-gray-600 text-lg font-medium">Interactive Map Integration</p>
                <p className="text-gray-500">123 Industry Road, City</p>
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Open in Google Maps
                </button>
              </div>
            </div>
            
            {/* Animated map markers */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-75"></div>
          </div>
        </Card>

        {/* Social Media Links */}
        <Card className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
            <p className="mb-6 opacity-90">Follow us on social media for updates</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <button
                  key={social}
                  className="px-6 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}