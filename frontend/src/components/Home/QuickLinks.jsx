import React from 'react'
import { Link } from 'react-router-dom'

export default function QuickLinks() {
	const links = [
		{ to: '/registration', label: 'Registration' },
		{ to: '/auction', label: 'E-Auction' },
		{ to: '/products', label: 'Products' }
	]

	return (
		<div className="grid gap-3">
			{links.map((l) => (
				<Link key={l.to} to={l.to} className="block bg-white p-3 rounded-md shadow-sm text-green-700 hover:bg-green-50">
					{l.label}
				</Link>
			))}
		</div>
	)
}
