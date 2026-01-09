import React from 'react'

export default function AverageRates({ rates = {} }) {
	const { sago = 'â€”', starch = 'â€”', broken = 'â€”' } = rates
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
			<div className="bg-white p-4 rounded-md shadow-sm">
				<div className="text-xs text-gray-500">Sago (Average)</div>
				<div className="text-xl font-semibold">{sago}</div>
			</div>
			<div className="bg-white p-4 rounded-md shadow-sm">
				<div className="text-xs text-gray-500">Starch (Average)</div>
				<div className="text-xl font-semibold">{starch}</div>
			</div>
			<div className="bg-white p-4 rounded-md shadow-sm">
				<div className="text-xs text-gray-500">Broken Sago / By-products</div>
				<div className="text-xl font-semibold">{broken}</div>
			</div>
		</div>
	)
}

