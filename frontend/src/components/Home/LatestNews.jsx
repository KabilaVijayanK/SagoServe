import React from 'react'

export default function LatestNews({ items = [] }) {
	return (
		<div className="space-y-3">
			{items.length === 0 ? (
				<div className="bg-white p-4 rounded-md shadow-sm">No recent news available.</div>
			) : (
				items.map((n) => (
					<div key={n.id} className="bg-white p-4 rounded-md shadow-sm flex justify-between items-start">
						<div>
							<div className="font-medium">{n.title}</div>
							<div className="text-sm text-gray-600">{n.summary}</div>
						</div>
						<div className="text-sm text-gray-500">{n.date || ''}</div>
					</div>
				))
			)}
		</div>
	)
}
