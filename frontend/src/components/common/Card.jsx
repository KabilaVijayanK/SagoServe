import React from 'react'

export default function Card({ title, children, footer, className = '' }) {
	return (
		<div className={`bg-white p-4 rounded-lg shadow-sm ${className}`}>
			{title && <div className="font-semibold text-gray-800">{title}</div>}
			<div className="text-gray-700 mt-2">{children}</div>
			{footer && <div className="text-sm text-gray-500 mt-3">{footer}</div>}
		</div>
	)
}
