import React from 'react'
import SectionTittle from '../components/common/SectionTittle'
import Card from '../components/common/Card'

export default function Products() {
	const sago = [
		{ id: 's1', name: 'Pearl Sago', desc: 'Uniform pearls used in food processing and confectionery.' },
		{ id: 's2', name: 'White Sago', desc: 'Premium sago with strict quality grading.' }
	]

	const starch = [
		{ id: 'st1', name: 'Food Grade Starch', desc: 'Consistent gelatinization properties for food use.' },
		{ id: 'st2', name: 'Industrial Starch', desc: 'Used in adhesives, papers and industrial applications.' }
	]

	return (
		<div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 space-y-6">
			<SectionTittle title="Products" subtitle="Sago, Starch and By-products" />

			<div>
				<SectionTittle title="Sago Varieties" />
				<div className="grid gap-4 md:grid-cols-2">
					{sago.map((p) => (
						<Card key={p.id} title={p.name} footer={<button className="text-green-700">View Details</button>}>
							{p.desc}
						</Card>
					))}
				</div>
			</div>

			<div>
				<SectionTittle title="Starch Varieties" />
				<div className="grid gap-4 md:grid-cols-2">
					{starch.map((p) => (
						<Card key={p.id} title={p.name} footer={<button className="text-green-700">View Details</button>}>
							{p.desc}
						</Card>
					))}
				</div>
			</div>

			<div>
				<SectionTittle title="Broken Sago / By-products" />
				<Card>Value-added uses including animal feed and industrial fillers. Quality grading is applied.</Card>
			</div>

			<div>
				<SectionTittle title="Quality Standards & Testing" />
				<Card>All products are subject to laboratory testing for moisture, purity, color, texture and particle size.</Card>
			</div>
		</div>
	)
}
