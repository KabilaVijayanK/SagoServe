import React, { useState } from 'react'
import SectionTittle from '../components/common/SectionTittle'
import Card from '../components/common/Card'

export default function Contact() {
	const [form, setForm] = useState({ name: '', email: '', message: '' })
	const [sent, setSent] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		setSent(true)
		setTimeout(() => setSent(false), 2000)
	}

	return (
		<div className="max-w-3xl mx-auto px-6 lg:px-8 py-10 space-y-6">
			<SectionTittle title="Contact Us" subtitle="Office and contact information" />

			<Card>
				<div className="grid gap-4 md:grid-cols-2">
					<div>
						<div className="font-semibold">Office Address</div>
						<div className="text-gray-700 mt-1">123 Industry Road, City</div>
						<div className="mt-3">Phone: +91 99999 99999</div>
						<div>Email: info@sagoserve.org</div>
					</div>

					<div>
						{sent ? (
							<div className="p-4 bg-green-50 text-green-700 rounded-md">Message sent (UI only).</div>
						) : (
							<form className="space-y-3" onSubmit={handleSubmit}>
								<input className="w-full border rounded-md p-2" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
								<input className="w-full border rounded-md p-2" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
								<textarea className="w-full border rounded-md p-2" rows={4} placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
								<div><button className="px-4 py-2 bg-green-700 text-white rounded-md">Send</button></div>
							</form>
						)}
					</div>
				</div>
			</Card>

			<Card title="Location (Map)">
				<div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">Map placeholder</div>
			</Card>
		</div>
	)
}
