import React, { useState } from 'react'
import SectionTittle from '../components/common/SectionTittle'
import Card from '../components/common/Card'

export default function Registration() {
	const [form, setForm] = useState({ name: '', entity: '', docs: '' })
	const [submitted, setSubmitted] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		setSubmitted(true)
		setTimeout(() => setSubmitted(false), 2000)
	}

	return (
		<div className="max-w-4xl mx-auto px-6 lg:px-8 py-10 space-y-6">
			<SectionTittle title="Registration" subtitle="Member & Merchant registration (UI only)" />

			<div className="grid gap-6 md:grid-cols-2">
				<Card title="Member Registration">
					<ol className="list-decimal pl-5 text-gray-700">
						<li>Eligibility: Producers and processors.</li>
						<li>Documents: Identity, facility proof.</li>
						<li>Benefits: Auction access, reports.</li>
					</ol>
				</Card>

				<Card title="Merchant Registration">
					<ol className="list-decimal pl-5 text-gray-700">
						<li>Eligibility: Trading entities and buyers.</li>
						<li>Forms: Business registration, tax proof.</li>
						<li>Terms: Adhere to auction rules.</li>
					</ol>
				</Card>
			</div>

			<SectionTittle title="Application (UI only)" />
			<Card>
				<form onSubmit={handleSubmit} className="space-y-3">
					<input className="w-full border rounded-md p-2" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
					<input className="w-full border rounded-md p-2" placeholder="Entity / Company" value={form.entity} onChange={e => setForm({ ...form, entity: e.target.value })} />
					<input className="w-full border rounded-md p-2" placeholder="Documents (filenames)" value={form.docs} onChange={e => setForm({ ...form, docs: e.target.value })} />
					<div>
						<button className="px-4 py-2 bg-green-700 text-white rounded-md">Submit</button>
						{submitted && <span className="ml-3 text-sm text-green-700">Application recorded (UI only)</span>}
					</div>
				</form>
			</Card>
		</div>
	)
}

