import React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

type LogoProps = {
	source?: string
	link?: string
}

function Logo({
	source = '/images/cerindo_bintang_logo.svg',
	link = '/',
	className,
	...props
}: LogoProps & React.HTMLAttributes<HTMLAnchorElement>) {
	return (
		<Link href={link} className={cn(className)} {...props}>
			<img src={source} className="inline-block h-6 w-auto" alt="Logo" />
			<span className="sr-only">Home</span>
		</Link>
	)
}

export default Logo
