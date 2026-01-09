import React from 'react'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
	const base = 'px-4 py-2 rounded-md font-medium transition'
	const variants = {
		primary: 'bg-green-700 text-white hover:bg-green-800',
		ghost: 'bg-transparent text-green-700 border border-green-700 hover:bg-green-50'
	}
	return (
		<button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
			{children}
		</button>
	)
}
