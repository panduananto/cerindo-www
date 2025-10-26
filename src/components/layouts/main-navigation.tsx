'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MainNavigationItem } from '@/types'

import { cn } from '@/lib/utils'

import Logo from '@/components/logo'

type MainNavigationProps = {
	items?: MainNavigationItem[]
}

const MainNavigation = ({ items }: MainNavigationProps) => {
	const pathname = usePathname()

	return (
		<div className="hidden w-full gap-14 2md:flex 2md:items-center 2md:justify-between">
			<Logo />
			{items?.[0]?.items ? (
				<nav
					aria-label="main"
					className="flex items-center text-sm leading-6 font-medium text-secondary-foreground first-letter:uppercase"
				>
					<ul className="flex space-x-8">
						{items[0].items.map((item) => {
							return (
								<li key={`menu-item-${item.title}`}>
									<Link
										href={item.href!}
										className={cn(
											'block transition-colors duration-150 ease-in-out first-letter:uppercase hover:text-primary',
											pathname === item.href ? 'text-primary' : 'text-secondary-foreground',
										)}
									>
										{item.title}
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			) : null}
		</div>
	)
}

export default MainNavigation
