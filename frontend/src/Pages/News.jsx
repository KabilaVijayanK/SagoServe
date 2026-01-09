import React from 'react'
import SectionTittle from '../components/common/SectionTittle'
import Card from '../components/common/Card'

const sample = [
	{ id: 'n1', title: 'Daily Market Update', summary: 'Sago prices steady with balanced demand.' },
	{ id: 'n2', title: 'Testing Protocol Update', summary: 'Revised sampling guidelines for lab submissions.' }
]

export default function News() {
	return (
		<div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-6">
			<SectionTittle title="News & Announcements" subtitle="Official circulars and event notices" />

			<div className="grid gap-4 md:grid-cols-2">
				{sample.map((n) => (
					<Card key={n.id} title={n.title} footer="Official">
						{n.summary}
					</Card>
				))}
			</div>

			<Card title="Archive">Past circulars and PDFs are available for download (UI only).</Card>
		</div>
	)
}
