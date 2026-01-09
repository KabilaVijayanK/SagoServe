import React from 'react'
import SectionTittle from '../components/common/SectionTittle'
import Card from '../components/common/Card'

export default function About() {
	return (
		<div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-6">
			<SectionTittle title="About Us" subtitle="Overview of SAGOSERVE" />

			<Card title="Organization Overview">SAGOSERVE is a cooperative portal dedicated to supporting the sago and starch industry through certified laboratory testing, market transparency and auction facilitation.</Card>

			<div className="grid gap-4 md:grid-cols-2">
				<Card title="Mission & Vision">To enable fair market access, uphold product quality, and provide training and advisory services to industry members.</Card>
				<Card title="Management Team">Experienced professionals in quality assurance, industry regulation and trade facilitation lead the organization.</Card>
			</div>

			<SectionTittle title="Certifications" />
			<div className="grid gap-4 md:grid-cols-3">
				<Card title="FSSAI">Registered food safety compliance for processing and trade.</Card>
				<Card title="NABL">Accredited laboratory services for chemical and microbiological testing.</Card>
				<Card title="ISO">Quality management systems aligned with ISO standards.</Card>
			</div>

			<SectionTittle title="Gallery & Testimonials" />
			<div className="grid gap-4 md:grid-cols-3">
				<Card title="Member Testimonial">"Accredited certificates increased our buyer confidence."</Card>
				<Card title="Workshop Feedback">"Hands-on training improved our sampling and reporting."</Card>
				<Card title="Photo Gallery">Images from recent seminars and laboratory operations.</Card>
			</div>
		</div>
	)
}
