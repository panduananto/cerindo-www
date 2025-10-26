'use client'

import React from 'react'

import { siteConfig } from '@/config/site'

import MainNavigation from './main-navigation'

const Header = () => {
	return (
		<header className="sticky inset-x-0 top-0 z-40 w-full border-b border-secondary-foreground/10 bg-background shadow-md">
			<div className="relative mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 lg:px-8">
				<MainNavigation items={siteConfig.mainNav} />
			</div>
		</header>
	)
}

export default Header
