import React from 'react'
import SectionTittle from '../components/common/SectionTittle'
import Card from '../components/common/Card'
import AuctionCountdown from '../components/common/AuctionCountdown'

const sample = [
	{ id: 'A-1001', title: 'Sago Lot A - 50 MT', date: '2026-01-10T10:00:00Z' },
	{ id: 'B-2001', title: 'Starch Lot B - 30 MT', date: '2026-01-12T14:00:00Z' }
]

export default function Auction() {
	return (
		<div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-6">
			<SectionTittle title="E-Auction" subtitle="Current and upcoming auctions" />

			<div className="grid gap-4 md:grid-cols-2">
				{sample.map((a) => (
					<Card key={a.id} title={a.title} footer={<button className="text-green-700">Join</button>}>
						<div className="text-sm text-gray-600">Lot ID: {a.id}</div>
						<div className="mt-2 text-sm text-gray-500">Scheduled: {new Date(a.date).toLocaleString()}</div>
					</Card>
				))}
			</div>

			<SectionTittle title="Guidelines for Participation" />
			<Card>Participation requires registration and adherence to auction rules. Ensure documents are uploaded prior to bidding.</Card>

			<SectionTittle title="Past Auction Results" />
			<Card>Downloadable reports and historical price lists are maintained for transparency.</Card>
		</div>
	)
}
