import React from 'react'
import SectionTittle from '../components/common/SectionTittle'
import Card from '../components/common/Card'

export default function Resources() {
	return (
		<div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-6">
			<SectionTittle title="Resources & Downloads" subtitle="Forms, manuals and FAQs" />

			<div className="grid gap-4 md:grid-cols-3">
				<Card title="Registration Form">Downloadable registration and submission checklist (UI only).</Card>
				<Card title="Testing Manual">Laboratory sampling and testing protocols for reference.</Card>
				<Card title="Member Handbook">Guidance documents for operations and compliance.</Card>
			</div>

			<SectionTittle title="FAQ" />
			<Card>Common questions and guidance for members and merchants are listed here.</Card>
		</div>
	)
}
