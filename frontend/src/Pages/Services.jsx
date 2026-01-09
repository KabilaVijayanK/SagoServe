import React from 'react'
import SectionTittle from '../components/common/SectionTittle'
import Card from '../components/common/Card'

export default function Services() {
	return (
		<div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-6">
			<SectionTittle title="Services & Laboratory" subtitle="Accredited testing and member support" />

			<div className="grid gap-4 md:grid-cols-2">
				<Card title="Laboratory Testing Services">Moisture, Purity, Color, Texture and Particle Size testing with certified reports.</Card>
				<Card title="Chemical & Microbiological Testing">Comprehensive chemical profiling and microbiological assays for compliance and safety.</Card>
				<Card title="Batch-wise Analysis">Batch-level certificates with traceability and test metadata.</Card>
				<Card title="Auction Facilitation">E-Auction guidance, real-time updates and reporting for transparent trade.</Card>
			</div>

			<Card title="Training & Advisory">Workshops, on-site audits and advisory services for quality improvement.</Card>
		</div>
	)
}
